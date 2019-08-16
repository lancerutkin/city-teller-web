import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Customers from './Customers';
import Money from './Money';

const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    display: 'flex'
  },
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

const Home = ({display, goToSignup}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Fade in={display === 'home'} timeout={{enter: 100, exit: 100}}>
          <div>
            <Customers/>
            <Money />
            <Container maxWidth="lg" className={classes.section}>
              <SignupButton onClick={goToSignup}>Signup</SignupButton>
            </Container>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;