import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchPosts, loading, updateEvent } from "../redux/actions/index";

import { Grid, Image, Loader, Button } from 'semantic-ui-react';
import MoreDetails from './MoreDetails';
import PlayersList from './PlayersList';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import moment from 'moment';



class EventDetail extends React.Component {
  constructor(){
    super()
    this.state={
     name: "",
     location: "",
     startDate: moment(),
     notes: "",
     editable: "false"
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

editable = (e) => {
   e.preventDefault();
  let form = e.target.parentNode
  let name = form.getElementsByClassName("h")[0].innerText
  let date = form.getElementsByClassName("h")[1].innerText
  let time = form.getElementsByClassName("h")[2].innerText
  let location = form.getElementsByClassName("h")[3].innerText
  let notes = form.getElementsByClassName("h")[4].innerText
let payload = {
  name: name,
  datetime: date,
  location: location,
  notes: notes,
  user_id: this.props.currentUser.id
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
//onClick will make all elements editable. use vanilla js and add id's to the editable elements
      return (
        <React.Fragment>
           {this.props.loading ?
              <Loader active inline='centered' />
             :
        <Grid columns={3}>
          <Grid.Column textAlign='center' computer={3}>
            <h1 class="h" contenteditable={this.state.editable} name={'name'} onChange={this.handleEdit}>{this.props.event.name}</h1>
            <h2 class="h" contenteditable={this.state.editable} name={'date'} onChange={this.handleEdit}> {weekday[moment(this.props.event.datetime).format('E')]} {moment(this.props.event.datetime).format('MMMM DD YYYY')}</h2>
            <h2 class="h" contenteditable={this.state.editable} name={'time'} onChange={this.handleEdit}>{moment(this.props.event.datetime).format('h:mm a')}</h2>
            <h2 class="h" contenteditable={this.state.editable} name={'location'} onChange={this.handleEdit}>{this.props.event.location}</h2>
            <h2 class="h" contenteditable={this.state.editable} name={'notes'} onChange={this.handleEdit}>{this.props.event.notes}</h2>
            <Button onClick={(e) => this.editable(e)}> Update Event </Button>
            <Button> Delete Event </Button>
          </Grid.Column>
          <Grid.Column className={"post-col"} textAlign='center' computer={10}>
            <NewPostForm currentUser={this.props.currentUser} singleEvent={this.props.event} fetchEvents={this.props.fetchEvents} />
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
     { fetchEvents, fetchPosts, updateEvent }
   )(withRouter(EventDetail));
