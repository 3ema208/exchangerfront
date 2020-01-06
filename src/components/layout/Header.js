import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import TelegramSingIn from 'react-telegram-login'
import colors from '../../stylesConst/colors'
import { BotName } from '../../telegramConst'
import {successLogin} from '../../store/auth/action'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#000"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: colors.white,
    textDecorationLine: 'inherit'
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} component={Link} to='/'>CurrencyExchanger</Typography>
          <BtnLogin isAuth={props.isAuth} username={props.username} avatar={props.avatar} successLogin={props.successLogin}/>
        </Toolbar>
      </AppBar>
    </div >
  );
}

function BtnLogin({ isAuth, username, avatar, successLogin }) {
  if (!isAuth) {
    return <TelegramSingIn buttonSize="medium" cornerRadius={8} dataOnauth={(data) => { successLogin(data) }} botName={BotName} />
  } else {
    return (
      <div>
        <Avatar alt={username} src={avatar}></Avatar>
      </div>)
  }
}

const mapStateProps = (state) => {
  return {
    isAuth: Boolean(state.auth.id),
    username: state.auth.username,
    avatar: state.auth.photo_url,
  }
}

const mapDispatch = {
  successLogin: successLogin
}

export default connect(mapStateProps, mapDispatch)(ButtonAppBar)