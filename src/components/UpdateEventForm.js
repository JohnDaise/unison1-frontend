import React from "react";

import { Form, Button, Modal } from 'semantic-ui-react'


//use redux to pass props down to this component
class UpdateEventForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
     name: "",
     location: "",
     time: null,
     notes: ""
    }
  }

   handleSubmit = (e) => {
      // e.preventDefault();
      // fetch(`http://localhost:3001/events/`, {
      // method: "PATCH",
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   'Content-Type': 'application/json',
      //   Accept: "application/json"
      // },
      // body: JSON.stringify({
      //       name: this.state.name,
      //       location: this.state.location,
      //       time: this.state.time,
      //       notes: this.state.notes,
      //       user_id: this.props.currentUser.id
      //     })
      // })
      //   .then(r => r.json())
      //     .then(json => console.log(json))
      // //     this.props.dispatch({
      // // type:'ADD_EVENT',
      // // data});
      // this.props.fetchEvents();
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }



render(){
  return(
    <Modal trigger={<Button> Update Event </Button>}>
      <Modal.Content>
      <Modal.Header>Update Event</Modal.Header>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Field>
            <label> Name </label>
            <input name='name' placeholder='Name' onChange={(e)=> this.handleChange(e)} />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input name='location' placeholder='Location' onChange={(e)=> this.handleChange(e)} />
          </Form.Field>
          <Form.Field>
            <label>Time</label>
            <input name='time' placeholder='Time' onChange={(e)=> this.handleChange(e)} />
          </Form.Field>
          <Form.Field>
            <label>Notes</label>
            <input name='notes' placeholder='Notes' onChange={(e)=> this.handleChange(e)} />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Modal.Content>
  </Modal>
  )
}




}
//
// # Event
// # t.string :name
// # t.date :datetime
// # t.string :location
// # t.string :notes
// # t.integer :user_id


export default UpdateEventForm;
