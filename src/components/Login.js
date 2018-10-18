import React from 'react';
import { Button, Form } from 'semantic-ui-react'

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

    onChange = (e) => {
      this.setState({
      [e.target.name]: e.target.value
      })
    }



    handleSubmit = (e) => {
      e.preventDefault();
      let data = JSON.stringify({
        email: e.target[0].value,
        password: e.target[1].value
      });
      fetch(baseUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: data
      }).then(res => {
        if (res.status === 401) {
          alert("login failed");
        } else {
          return res.json();
        }
      })
      .then(json => {
        // this.props.setCurrentUser(json.user);
        this.props.updateUser(json.user);
        localStorage.setItem("token", json.token);
      }); ///this works got a user and a token but did not reroute
      this.setState({
        email: "",
        password: ""
      })
    };


render(){
  return (
    <div className='ui card login' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form
      onSubmit={this.handleSubmit} onClick={this.handleClick}>
      <Form.Field>
      <label> Email </label>
      <input name='email' placeholder='email' onChange={(e)=> this.onChange(e)} />
      </Form.Field>
      <Form.Field>
      <label>Password</label>
      <input name= 'password' placeholder='Password' onChange={(e)=>this.onChange(e)} />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </div>
  );
  }
}


export default Login;
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
