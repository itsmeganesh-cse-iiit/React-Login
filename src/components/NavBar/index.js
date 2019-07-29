import React, { Component } from 'react'
import {Button,Col,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <div>
            <Row>
            <Col></Col>
            <Col ><Link to="/signup" style={{float:"right"}}><Button variant="outline-primary">Signup</Button></Link></Col>
            <Col><Link to="/login"><Button variant="outline-primary">Login</Button></Link></Col>
            <Col></Col>
        </Row>
            </div>
        )
    }
}

export default NavBar
