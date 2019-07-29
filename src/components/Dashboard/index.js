import React, { Component } from 'react'
import NavBar from '../NavBar';
import {Col,Row} from 'react-bootstrap'
class Dashboard extends Component {
    render() {
        return (
            <div style={{marginTop:"7%"}}>
                <NavBar/>
                <Row>
                    <Col></Col>
                    <Col>
                    <h2>Dashboard</h2>
                <p>Welcome back user</p>
                    </Col>
                    <Col></Col>
                </Row>
                
            </div>
        )
    }
}

export default Dashboard
