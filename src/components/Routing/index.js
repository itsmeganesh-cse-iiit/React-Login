import React from 'react'
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import Signup from '../Signup/'
import Dashboard from '../Dashboard'
import NotFound from '../NotFound'
import App from '../../App';
function Routing() {
    return (
        <div>
        <Router>
          <br/><br/>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
        </Switch>
      
    </Router>
        </div>
    )
}

export default Routing
