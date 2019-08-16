import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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

const SignupButton = withStyles(theme => ({
  root: {
    borderRadius: 20,
    boxShadow: 10,
    fontFamily: 'Montserrat',
    color: '#1F487E',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#eeeeee',
    },
  },
}))(Button);

const Register = ({goToSignup}) => {
  const classes = useStyles();

  return (
    <Fade in={true}>
      <div>
        <Container maxWidth="md" className={classes.section}>
          <Typography className={classes.text} variant="h2">
            Signup.
          </Typography>
        </Container>
        <Container maxWidth="lg" className={classes.section}>
          <SignupButton onClick={goToSignup}>Signup</SignupButton>
        </Container>
      </div>
    </Fade>
  )
};

export default Register;