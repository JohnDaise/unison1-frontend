import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Button, Form, Message } from 'semantic-ui-react'

import { connect } from "react-redux";
import { setCurrentUser } from "../redux/actions/index";

const baseUrl = "http://localhost:3001"

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   });
 };



    handleSubmit = (e) => {
      e.preventDefault();
      let data = JSON.stringify({
        email: e.target[0].value,
        password: e.target[1].value
      });
      fetch(baseUrl + "/login", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json().catch(() => {
          window.alert("Incorrect Email or Password")
          this.props.history.push("/login")
        }))
          .then(json => {
        // this.props.setCurrentUser(json.user);
        this.props.updateUser(json.user);
        localStorage.setItem("token", json.token);
        this.props.history.push("/myevents")
      }); ///this works got a user and a token but did not reroute
      this.setState({
        email: ""
      })

    };


render(){
  return (
    <div className='ui card login' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form
      onSubmit={this.handleSubmit}
      onClick={this.handleClick}
      loading={this.props.authenticatingUser}
      error={this.props.failedLogin}
      >
      <Message
         error
         header={this.props.failedLogin ? this.props.error : null}
       />
      <Form.Field>
      <label> Email </label>
      <input
        name='email'
        placeholder='email'
        onChange={this.handleChange}
        value={this.state.email}
         />
      </Form.Field>
      <Form.Field>
      <label>Password</label>
      <input
        name= 'password'
        type='password'
        placeholder='Password'
        onChange={this.handleChange}
        value={this.state.password}
         />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </div>
  );
  }
}


export default withRouter(Login);

// export default connect(
//   null,
//   { setCurrentUser }
// )(Login);
//



// .then(res => {
//   if (res.status === 401) {
//     alert("login failed");
//   } else {
//     return res.json();
//   }
// }) ///for some reason this form isn't working
// .then(json => {
//   this.props.updateUser(json.user);
//   localStorage.setItem("token", json.token);
// });
