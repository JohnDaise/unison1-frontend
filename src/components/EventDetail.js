import React from "react";
import { Link, Route, Switch  } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchPosts, loading } from "../redux/actions/index";

import { Grid, Image, Loader, Button } from 'semantic-ui-react';
import MoreDetails from './MoreDetails';
import PlayersList from './PlayersList';
import PostList from './PostList';
import NewPostForm from './NewPostForm';


class EventDetail extends React.Component {

componentDidMount(){
  this.props.fetchEvents();
  this.props.fetchPosts();
}


  render() {
      return (
        <React.Fragment>
           {this.props.loading ?
              <Loader active inline='centered' />
             :
        <Grid columns={3}>
          <Grid.Column textAlign='center'>
            <h1>{this.props.event.name}</h1>
            <h2>{this.props.event.datetime}</h2>
            <h2>{this.props.event.datetime}</h2>
            <h2>{this.props.event.location}</h2>
            <h2>{this.props.event.notes}</h2>
            <Button> Update Event </Button>
            <Button> Delete Event </Button>
          </Grid.Column>
          <Grid.Column className={"post-col"}>
            <NewPostForm currentUser={this.props.currentUser} singleEvent={this.props.event} fetchEvents={this.props.fetchEvents} />
            <PostList currentUser={this.props.currentUser} singleEvent={this.props.event} fetchEvents={this.props.fetchEvents} />
          </Grid.Column>
          <Grid.Column textAlign='center'>
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
