import React from "react";

import { Form, Button, Modal } from 'semantic-ui-react'



class NewPostForm extends React.Component{
  constructor(){
    super()
    this.state={
      content: "",
      url: ""
    }
  }


   handleSubmit = (e) => {
      e.preventDefault();
      console.log("new post")
      fetch(`http://localhost:3001/posts/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
            content:this.state.content,
            url: this.state.url,
            user_id: this.props.currentUser.id
          })
      })
        .then(r => r.json())
          .then(json => console.log(json))
      //     this.props.dispatch({
      // type:'ADD_EVENT',
      // data});
      this.props.fetchEvents();
    }

    // <h1>"Posts"</h1>
    // <iframe width="380"
    // height="157"
    // src="https://www.youtube.com/embed/Rp8WL621uGM"
    // frameborder="0"
    // allow="autoplay; encrypted-media"
    // allowfullscreen></iframe>




    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }



render(){
  return(
    <Modal trigger={<Button circular float="right" icon='plus'/>}>
      <Modal.Content>
      <Modal.Header>Write New Post</Modal.Header>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Field>
            <label> </label>
            <input name='content' placeholder='' onChange={(e)=> this.handleChange(e)} />
          </Form.Field>
          <Form.Field>
            <label>URL</label>
            <input name='url' placeholder='Video URL' onChange={(e)=> this.handleChange(e)} />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Modal.Content>
  </Modal>
  )
}




}



export default NewPostForm;
