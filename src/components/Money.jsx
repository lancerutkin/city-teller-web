import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    display: 'flex'
  },
  text: {
    fontFamily: 'Montserrat', 
    color: '#1F487E'
  },
  emoji: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const Money = () => {
  const classes = useStyles();

  return (
    <Fade in={true}>
      <div>
        <Container maxWidth="md" className={classes.section}>
          <Typography className={classes.text} variant="h2">
            Make money.
          </Typography>
        </Container>
        <Container maxWidth="md" className={classes.section}>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/money-bag_1f4b0.png" className={classes.emoji}/>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/money-bag_1f4b0.png" className={classes.emoji}/>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/money-bag_1f4b0.png" className={classes.emoji}/>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/money-bag_1f4b0.png" className={classes.emoji}/>
        </Container>
      </div>
    </Fade>
  )
};

export default Money;