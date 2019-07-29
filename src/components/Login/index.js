import React, { Component } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import "./styles.css";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  loginHandler=e=>{
      e.preventDefault();
      alert(1)
  }

  inputHandler=(event,param)=>{
      switch(param){
          case 'username':
              this.setState({
                username:event.target.value
              },()=>{
                console.log(this.state.username)
              });
              break;
        case 'password':
            this.setState({
                password:event.target.value
            });
            break;
        default:
            // do nothing
      }
    console.log(this.state.username)
  }
  render() {
    return (
      <div style={{marginTop:"7%"}}>
        <Row>
          <Col />
          <Col>
            <Form onSubmit={this.loginHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ float: "left" }}>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={()=>this.inputHandler('username')} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ float: "left" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={()=>this.inputHandler('username')} />
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
