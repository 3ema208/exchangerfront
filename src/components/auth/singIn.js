import React from 'react';

import Button from '@material-ui/core/Button';
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
  form: {
    width: '100%',
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
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={(event)=>{props.setEmail(event.target.value)}}
            value={props.email}
            variant="outlined"
            color="secondary"
            
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            autoComplete="login"
            autoFocus
          />
          <TextField
            onChange={(event)=>{props.setPassword(event.target.value)}}
            value={props.passwrod}
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {props.failLogin ? <Typography color="error" align='center'>Not correct login or password</Typography>: null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event)=>{
                event.preventDefault()
                props.login(props.email, props.password)
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}