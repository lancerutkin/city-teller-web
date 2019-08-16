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

const Customers = () => {
  const classes = useStyles();

  return (
    <Fade in={true}>
      <div>
        <Container maxWidth="md" className={classes.section}>
          <Typography className={classes.text} variant="h2">
            Let customers know you offer cash back.
          </Typography>
        </Container>
        <Container maxWidth="md" className={classes.section}>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/man_emoji-modifier-fitzpatrick-type-1-2_1f468-1f3fb_1f3fb.png" className={classes.emoji}/>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/woman_emoji-modifier-fitzpatrick-type-6_1f469-1f3ff_1f3ff.png" className={classes.emoji}/>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/girl_emoji-modifier-fitzpatrick-type-4_1f467-1f3fd_1f3fd.png" className={classes.emoji}/>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/boy_emoji-modifier-fitzpatrick-type-3_1f466-1f3fc_1f3fc.png" className={classes.emoji}/>
        </Container>
      </div>
    </Fade>
  )
};

export default Customers;