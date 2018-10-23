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
     startDate: moment(),
     notes: ""
   };
 }





   handleSubmit = (e) => {
      e.preventDefault();
      let data = {
        name: this.state.name,
        location: this.state.location,
        datetime: this.state.startDate,
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

      handleDateChange= (date) => {
        this.setState({
          startDate: date
        });
      }



render(){
  console.log(this.state.startDate._d)
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
            <label>Date and Time</label>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
              />
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
