import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import TelegramSingIn from 'react-telegram-login'
import colors from '../../stylesConst/colors'
import { BotName } from '../../telegramConst'


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
          <BtnLogin isAuth={props.isAuth} logout={props.logout} />
        </Toolbar>
      </AppBar>
    </div >
  );
}

function BtnLogin({ isAuth, logout }) {
  if (!isAuth) {
    return (
      <div>
        <TelegramSingIn dataOnauth={(data)=>{console.log(data)}} botName={BotName}/>
      </div>)
  }
  return (<div><Button onClick={logout} color="inherit">Logout</Button></div>)
}

const mapStateProps = (state) => {
  return {
    isAuth: Boolean(state.auth.id),
    username: state.auth.username,
  }
}

export default connect(mapStateProps)(ButtonAppBar)