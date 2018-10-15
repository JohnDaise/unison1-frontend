import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const baseUrl = "http://localhost:3001"

class Login extends React.Component {

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
      }) ///for some reason this form isn't working
      .then(json => {
        this.props.updateUser(json.user);
        localStorage.setItem("token", json.token);
      });

    };

render(){
  return (
    <div className='ui card login' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form onSubmit={this.handleSubmit}>
      <Form.Field>
      <label> Email </label>
      <input name='email' placeholder='email' />
      </Form.Field>
      <Form.Field>
      <label>Password</label>
      <input name= 'password' placeholder='Password' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    </div>
  );
  }
}

export default Login;




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
