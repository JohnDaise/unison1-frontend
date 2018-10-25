import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchPosts, loading, updateEvent, deleteEvent } from "../redux/actions/index";

import { Grid, Image, Loader, Button, Icon } from 'semantic-ui-react';
import PlayersList from './PlayersList';
import PostList from './PostList';
import NewPostForm from './NewPostForm';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';



class EventDetail extends React.Component {
  constructor(){
    super()
    this.state={
     name: "",
     location: "",
     startDate: moment(),
     notes: "",
     editable: "false",
     isNewPostFormModalOpen: false,
   };
 }
componentDidMount(){
  this.props.fetchEvents();
  this.props.fetchPosts();
}

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

  closePostFormModal = () => {
    this.setState({
      isNewPostFormModalOpen: false
    })
  }

  openPostFormModal = () => {
    this.setState({
      isNewPostFormModalOpen: true
    })
  }



editable = (e) => {
   e.preventDefault();
  let form = e.target.parentNode
  let name = form.getElementsByClassName("h")[0].innerText
  //maybe render a calender to select new date
  let location = form.getElementsByClassName("h")[3].innerText
  let notes = form.getElementsByClassName("h")[4].innerText
let payload = {
  name: name,
  location: location,
  datetime: this.state.startDate,
  notes: notes
}
console.log(payload)
if (this.state.editable === "false") {
  e.target.innerText = "Save"
  this.setState({
    editable: "true"
  })

} else {
  e.target.innerText = "Update Event"
  this.setState({
    editable: "false"
  })
  console.log("sent update")
  this.props.updateEvent({
    eventId: this.props.event.id,
    payload
  });
  this.props.history.push("/myevents/"+this.props.event.id);
  }
}


  render() {

    let weekday = {
     0: "Sunday",
     1: "Monday",
     2: "Tuesday",
     3: "Wednesday",
     4: "Thursday",
     5: "Friday",
     6: "Saturday",
  }


      return (
        <React.Fragment>
           {this.props.loading ?
              <Loader active inline='centered' />
             :
        <Grid columns={3}>
          <Grid.Column textAlign='center' computer={3}>
            <h3 class="h" contenteditable={this.state.editable} name={'name'} onChange={this.handleEdit}>{this.props.event.name}</h3>
            <h4 class="h"  name={'date'} onChange={this.handleEdit}> {weekday[moment(this.props.event.datetime).format('E')]} {moment(this.props.event.datetime).format('MMMM DD YYYY')}</h4>
            <h4 class="h"  name={'time'} onChange={this.handleEdit}>{moment(this.props.event.datetime).format('h:mm a')}</h4>
            <h4 class="h" contenteditable={this.state.editable} name={'location'} onChange={this.handleEdit}>{this.props.event.location}</h4>
            Notes: <h4 class="h" contenteditable={this.state.editable} name={'notes'} onChange={this.handleEdit}>{this.props.event.notes}</h4>
            <Button onClick={(e) => this.editable(e)}> Update Event </Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Button secondary id={this.props.event.id} onClick={(e)=> {
                console.log(e.target.id)
                this.props.deleteEvent(e.target.id);
                this.props.fetchEvents();
                this.props.history.push("/myevents")
              }}>
              <Icon name='delete' />
              Delete Event
            </Button>
          </Grid.Column>
          <Grid.Column className={"post-col"} textAlign='center' computer={10}>
            <NewPostForm
              currentUser={this.props.currentUser}
              singleEvent={this.props.event}
              closePostFormModal={this.closePostFormModal}
              openPostFormModal={this.openPostFormModal}
              isNewPostFormModalOpen={this.state.isNewPostFormModalOpen}
              fetchEvents={this.props.fetchEvents} />
            <br/>
            <br/>
            <br/>
            <PostList currentUser={this.props.currentUser} singleEvent={this.props.event} fetchEvents={this.props.fetchEvents} />
          </Grid.Column >
          <Grid.Column textAlign='center' computer={3}>
            <PlayersList currentUser={this.props.currentUser} players={this.props.event.users} />
          </Grid.Column>
        </Grid>}
        </React.Fragment>
      )
  }
}

  const mapStateToProps = (state, propsFromParent) => {
    let event = state.events.find(event => event.id === parseInt(propsFromParent.eventId))
    return {
      loading: state.loading,
      events: state.events,
      posts: state.posts,
      event: event

    };
   };

   export default connect(
     mapStateToProps,
     { fetchEvents, fetchPosts, updateEvent, deleteEvent }
   )(withRouter(EventDetail));
