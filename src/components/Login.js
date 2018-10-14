import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const baseUrl =  "http://localhost:3001"
const Login = (props)=> {

  function handleSubmit(e) {
      e.preventDefault();
      let data = JSON.stringify({
        account_name: e.target.querySelector('input[name="account_name"]').value,
        password: e.target.querySelector('input[name="password"]').value
      });
      fetch(baseUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: data
      })
        .then(res => {
          if (res.status === 401) {
            alert("login failed");
          } else {
            return res.json();
          }
        })
        .then(json => {
          props.updateUser(json.user);
          localStorage.setItem("token", json.token);
        });
      props.history.push('/')
    };


  return (
    <div className='ui card login' style={{padding: '12px',
    margin: '0 6px 6px'}}>
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label> Email </label>
        <input name='email' placeholder='email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input name= 'password' placeholder='Password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </div>
  );
}

export default Login;
