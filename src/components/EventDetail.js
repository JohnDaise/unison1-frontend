import React from "react";
import { Link, Route, Switch  } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchPosts, loading } from "../redux/actions/index";

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
     notes: ""
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
            <h1 contenteditable={"false"} name={'name'} onChange={this.handleEdit}>{this.props.event.name}</h1>
            <h2 contenteditable={"false"} name={'date'} onChange={this.handleEdit}> {weekday[moment(this.props.event.datetime).format('E')]} {moment(this.props.event.datetime).format('MMMM DD YYYY')}</h2>
            <h2 contenteditable={"false"} name={'time'} onChange={this.handleEdit}>{moment(this.props.event.datetime).format('h:mm a')}</h2>
            <h2 contenteditable={"false"} name={'location'} onChange={this.handleEdit}>{this.props.event.location}</h2>
            <h2 contenteditable={"false"} name={'notes'} onChange={this.handleEdit}>{this.props.event.notes}</h2>
            <Button> Update Event </Button>
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
     { fetchEvents, fetchPosts }
   )(EventDetail);


  //
  // <React.Fragment>>
  //   <h1>{this.props.event.name}</h1>
  //   <h3>{this.props.event.location}</h3>
  //   <h3>{this.props.event.time}</h3>
  //   <h3>{this.props.event.notes}</h3>
  // </React.Fragment>
