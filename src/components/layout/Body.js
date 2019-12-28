import React from 'react'
import { connect } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import Auth from '../../components/auth/authContainer'
import CurrencyRequest from '../../components/currencyRequest/currencyReqContainer'

class Body extends React.Component {
    render() {
        return (
            <div>
                <CssBaseline />
                <Switch>
                    <Route exact path='/login'><Auth></Auth></Route>
                    <Route path='/registration'><div>reg</div></Route>
                    <Route path='/'><CurrencyRequest /></Route>
                </Switch>
            </div>
        )
    }
}

const mapStateProps = (store) => {
    return {

    }
}

export default connect(mapStateProps)(Body)