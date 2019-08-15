const googleMapsKey = process.env.GOOGLE_MAPS_KEY || require('../config').googleMapsKey;
const googleMapsClient = require('@google/maps').createClient({
  key: googleMapsKey
});
const { createMerchant, readProximateMerchants } = require('./db');

module.exports = {
  postNewMerchant: (req, res) => {
    let address = `${req.body.address1}, ${req.body.city}, ${req.body.state}`;
    googleMapsClient.geocode({
      address: address
    }, (err, response) => {
      if (!err) {
        let {lat, lng} = response.json.results[0].geometry.location;
        createMerchant({...req.body, lat: lat, lng: lng}).then(() => {
          res.sendStatus(201);
        })
        .catch(err => {
          console.error(err);
          res.sendStatus(500);
        })
      } else {
        console.error(err)
        res.sendStatus(500);
      }
    });
  },
  getProximateAddresses: (req, res) => {
    let {lat, lng, latRange, lngRange } = req.query;
    console.log(`lat: ${lat}
    lng: ${lng}
    latRange: ${latRange}
    lngRange: ${lngRange}`)
    readProximateMerchants(lat, lng, latRange, lngRange).then((results) => {
      res.send(results);
    }).catch(err => {
      console.error(err)
      res.sendStatus(500);
    })
  }
}