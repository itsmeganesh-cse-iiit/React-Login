import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Signup from './components/Signup/'
import {Col,Row,Button} from 'react-bootstrap'
const routing = (
    <Router>
      <div>
          <br/><br/>
        <Row>
            <Col></Col>
            <Col ><Link to="/signup" style={{float:"right"}}><Button variant="outline-primary">Signup</Button></Link></Col>
            <Col><Link to="/login"><Button variant="outline-primary">Login</Button></Link></Col>
            <Col></Col>
        </Row>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={App} />

      </div>
    </Router>
  )
  

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
