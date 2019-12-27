import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import colors from "../../stylesConst/colors"

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    color: colors.white,
    backgroundColor: colors.black,
    margin: theme.spacing(3, 0, 2),
    '&:hover': {
        backgroundColor: colors.spaceGray,
    }
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  console.log(11, props)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={(event)=>{props.setEmail(event.target.value)}}
            value={props.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(event)=>{props.setPassword(event.target.value)}}
            value={props.passwrod}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event)=>{
                event.preventDefault()
                props.login('3ema208', '1231233a')
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}