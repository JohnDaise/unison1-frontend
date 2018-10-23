import React from "react";
import { Link, Route, Switch  } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchPosts, loading } from "../redux/actions/index";

import { Grid, Image, Loader, Button } from 'semantic-ui-react';
import PlayersList from './PlayersList';
// import PostList from './PostList';



class GigDetail extends React.Component {

componentDidMount(){
  this.props.fetchEvents();
  this.props.fetchPosts();
}


  render() {
    console.log(this.props.gig.event)
      return (
        <React.Fragment>
           {this.props.loading ?
              <Loader active inline='centered' />
             :
        <Grid columns={3}>
          <Grid.Column textAlign='center'>
          <h1>{this.props.gig.event.name}</h1>
          <h2>{this.props.gig.event.date}</h2>
          <h2>{this.props.gig.event.location}</h2>
          <h2>{this.props.gig.event.time}</h2>
          <h2>{this.props.gig.event.notes}</h2>
          </Grid.Column>
          <Grid.Column className={"post-col"}>
           make a different/parallel component here to PostList called GigPostList
          </Grid.Column>
          <Grid.Column textAlign='center'>
          make a different/parallel component here to PlayerList called GigPlayerList
          </Grid.Column>
        </Grid>}
        </React.Fragment>
      )
  }
}


  const mapStateToProps = (state, propsFromParent) => {
    console.log(state.events)
    let gig = state.userEvents.find(gig => gig.id === parseInt(propsFromParent.gigId))
    let event =  state.events.find( event => event.id === gig.id)
    return {
      loading: state.loading,
      events: state.events,
      posts: state.posts,
      gig: gig,
      event: event
    };
   };

   export default connect(
     mapStateToProps,
     { fetchEvents, fetchPosts }
   )(GigDetail);


   ///need to make a different/parallel component to PostList called GigPostList so that gig details are rendered for players
