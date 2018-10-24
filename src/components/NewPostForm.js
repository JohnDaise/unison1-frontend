import React from "react";


import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

import { Form, Button, Modal, TextArea } from 'semantic-ui-react'



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
      let data = {
        content:this.state.content,
        url: this.state.url,
        user_id: this.props.currentUser.id,
        event_id: this.props.singleEvent.id
      }
      fetch(`http://localhost:3001/posts/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(data)
      })
        .then(r => r.json())
          .then(json => this.props.createPost(json)) //create post action using json
          this.props.closePostFormModal();
    }


    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }



render(){
  return(
    <Modal
      open={this.props.isNewPostFormModalOpen}
      onOpen={()=> this.props.openPostFormModal()}
      onClose={()=> this.props.closePostFormModal()}
      trigger={
      <Button circular>
        Create New Post
      </Button>}
      >
      <Modal.Content>
      <Modal.Header>Write New Post</Modal.Header>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Field>
            <label>Message</label>
            <input name='content' placeholder='Message...' onChange={(e)=> this.handleChange(e)} />
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


export default connect(
  null ,
  { createPost }
)(withRouter(NewPostForm));
