import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    fontFamily: 'Montserrat'
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
    color: '#1F487E',
    fontFamily: 'Montserrat',
    borderRadius: 20
  },
  section: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA',
  'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY',
  'NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX',
  'UT', 'VT','VA','WA','WV','WI','WY'
 ];

const Signup = ({display}) => {
  const classes = useStyles();
  const defaulState = {
    storeName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    minimumPurchase: 0,
    chargeFlat: 0,
    chargePercent: 0
  };
  const [values, setValues] = useState(defaulState);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  const reset = () => {
    setValues(defaulState);
  };

  const [spinner, setSpinner] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const postInformation = () => {
    if (document.getElementById('address-form').checkValidity()) {
      setInvalid(false);
      setSpinner(true)
      Axios.post('/address', values).then(() => {
        setSpinner(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1500);
        reset();
      }).catch(() => {
        setFailure(true)
        setSpinner(false)
      });
    } else {
      setInvalid(true);
    }
  }

  return (
    <Fade in={display === 'signup'} timeout={{enter: 100, exit: 100}}>
      <Paper className={classes.paper}>
        <form className={classes.container} autoComplete="off" id="address-form">
          <Container maxWidth="md" className={classes.section}>
            <TextField
              required
              id="standard-required"
              label="Store Name"
              className={classes.textField}
              value={values.storeName}
              placeholder="Top Shop"
              onChange={handleChange('storeName')}
              margin="normal"
            />
          </Container>
          <Container maxWidth="md" className={classes.section}>
            <TextField
              required
              id="standard-required"
              label="Address Line 1"
              className={classes.textField}
              value={values.address1}
              placeholder="1 Broadway"
              onChange={handleChange('address1')}
              margin="normal"
            />
            <TextField
              id="standard-text"
              label="Address Line 2"
              className={classes.textField}
              value={values.address2}
              placeholder="Apt. 1"
              onChange={handleChange('address2')}
              margin="normal"
            />
          </Container>
          <Container maxWidth="md" className={classes.section}>
            <TextField
              required
              id="standard-required"
              label="City"
              className={classes.textField}
              value={values.city}
              placeholder="New York"
              onChange={handleChange('city')}
              margin="normal"
            />
            <TextField
              required
              id="standard-select-state"
              select
              label="State"
              className={classes.textField}
              value={values.state}
              onChange={handleChange('state')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your state"
              margin="normal"
            >
              {US_STATES.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              required
              id="standard-required"
              label="Zip Code"
              value={values.zip}
              onChange={handleChange('zip')}
              placeholder="10001"
              className={classes.textField}
              margin="normal"
            />
          </Container>
          <Container maxWidth="md" className={classes.section}>
            <TextField
              id="standard-number"
              label="Minimum Purchase"
              value={values.minimumPurchase}
              onChange={handleChange('minimumPurchase')}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-number"
              label="Flat Fee"
              value={values.chargeFlat}
              onChange={handleChange('chargeFlat')}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="standard-number"
              label="Percentage Fee (1 = 1%)"
              value={values.chargePercent}
              onChange={handleChange('chargePercent')}
              type="number"
              className={classes.textField}
              margin="normal"
            />
          </Container>
          <Container maxWidth="md" className={classes.section}>
            <Button variant="contained" color="inherit" className={classes.button} onClick={postInformation}>Submit</Button>
          </Container>
          <Container maxWidth="md" className={classes.section}>
          {spinner ? <CircularProgress className={classes.progress} /> : null}
          {invalid ? <Typography variant="body2" color="secondary">Please fill out the required fields.</Typography> : null}
          {success ? <Typography variant="body2" color="primary">Thank you for signing up!</Typography> : null}
          {failure ? <Typography variant="body2" color="secondary">We were unable to sign you up. Please try again.</Typography> : null}
          </Container>
        </form>
      </Paper>
    </Fade>
  );
};

export default Signup;