import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createEvent } from "../redux/actions";

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

//in the backend make the event date a datetime attribute


import { Form, Button, Modal, TextArea } from 'semantic-ui-react'



class NewEventForm extends React.Component{
  constructor(){
    super()
    this.state={
     name: "",
     location: "",
     date: "",
     time: null,
     notes: ""
    }
  }


   handleSubmit = (e) => {
      e.preventDefault();
      let data = {
        name: this.state.name,
        location: this.state.location,
        date: this.state.date,
        time: this.state.time,
        notes: this.state.notes,
        user_id: this.props.currentUser.id
      };
      fetch(`http://localhost:3001/events/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(data)
      })
        .then(r => r.json())
          .then(json => this.props.createEvent(json))
      this.props.closeEventFormModal();
      //     this.props.dispatch({
      // type:'ADD_EVENT',
      // data});
      // this.props.history.push("/myevents/");
      };

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }



render(){
  return(
    <Modal
      onClose={()=> this.props.closeEventFormModal()}
      onOpen={()=> this.props.openEventFormModal()}
      trigger={
         <Button circular>
           Create New Event
         </Button>}
      >
      <Modal.Content>
      <Modal.Header>Create New Event</Modal.Header>
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
            <label>Date</label>
            <input name='date' placeholder='Date' onChange={(e)=> this.handleChange(e)} />
          </Form.Field>
          <Form.Field>
            <label>Time</label>
            <input name='time' placeholder='Time' onChange={(e)=> this.handleChange(e)} />
          </Form.Field>
          <Form.Field>
            <label>Notes</label>
             <TextArea name='notes' placeholder='Notes' onChange={(e)=> this.handleChange(e)}/>
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
  { createEvent }
)(withRouter(NewEventForm));
