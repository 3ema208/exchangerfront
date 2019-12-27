import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"

import { connect } from 'react-redux';


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
  },
}));


function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ajax currency Exchanger
          </Typography>
          <BtnLogin isAuth={props.isAuth}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function BtnLogin({isAuth}){
  if (!isAuth){
    return (
    <div>
      <Button color="inherit"><Link to='/login'>sing in</Link></Button>
      <Button color="inherit"><Link to='/registration'>Registration</Link></Button>
    </div>)
  }
  return null
}

const mapStateProps = (state) => {
  return {isAuth: state.auth.token !== null }
}

export default connect(mapStateProps)(ButtonAppBar)