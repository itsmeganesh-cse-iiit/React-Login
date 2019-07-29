import React, { Component } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import "./styles.css";
import Axios from 'axios'
import md5 from 'md5'
import {Redirect} from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      redirect:false
    };
  }

  loginHandler=e=>{
      e.preventDefault();
      Axios.get("https://my-json-server.typicode.com/itsmeganesh-cse-iiit/Ganesh-json-server/react_login").then(response=>{
        const {username,password}= response.data
        // alert(`${md5(this.state.password)} -- ${password}`)
        const user={
          username:this.state.username,
          password:md5(this.state.password)
        }
        if(username===user.username && password===user.password){
          this.setState({
            redirect: true
          })
      }
        else
          alert("Login Failed")
          
      })
    }

  
  usernameHandler=event=>{
    this.setState({
      username:event.target.value
    },()=>{
      console.log(this.state.username)
    });
  }


  pwdHandler=event=>{
    this.setState({
      password:event.target.value
  });
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/dashboard' />
    }
  }

  render() {
    return (
      <div style={{marginTop:"7%"}}>
        {this.renderRedirect()}
        <Row>
          <Col />
          <Col>
            <Form onSubmit={this.loginHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ float: "left" }}>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={this.usernameHandler} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ float: "left" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.pwdHandler} />
              </Form.Group>

              <Row>
                <Col>
                  {" "}
                  <Button variant="primary" type="submit" block>
                    Submit
                  </Button>
                </Col>
                <Col>
                  <Button variant="success" type="button" block>
                    Reset
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col />
        </Row>
      </div>
    );
  }
}

export default Login;
