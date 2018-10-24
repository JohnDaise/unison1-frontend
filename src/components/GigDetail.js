import React from "react";
import { Link, Route, Switch  } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchPosts, loading } from "../redux/actions/index";

import { Grid, Image, Loader, Button } from 'semantic-ui-react';
import PlayersList from './PlayersList';
// import PostList from './PostList';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';





class GigDetail extends React.Component {

componentDidMount(){
  this.props.fetchEvents();
  this.props.fetchPosts();
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


  console.log(this.props)
      return (
        <React.Fragment>
           {this.props.loading ?
              <Loader active inline='centered' />
             :
        <Grid columns={3}>
          <Grid.Column textAlign='center' computer={4}>
            <h1 name={'name'}>{this.props.gig.event.name}</h1>
            <h2 name={'date'}> {weekday[moment(this.props.gig.event.datetime).format('E')]} {moment(this.props.gig.event.datetime).format('MMMM DD YYYY')}</h2>
            <h2 name={'time'} >{moment(this.props.gig.event.datetime).format('h:mm a')}</h2>
            <h2 name={'location'} >{this.props.gig.event.location}</h2>
            Notes: <h2 name={'notes'} >{this.props.gig.event.notes}</h2>
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
    let player = state.users.find(user => user.id === propsFromParent.currentUser.id)
    let gig = state.userEvents.find(gig => gig.id === parseInt(propsFromParent.gigId))
    let event =  state.events.find( event => event.id === gig.id)
    /// this array is a player's gigs console.log(player.events)
    return {
      loading: state.loading,
      events: state.events,
      posts: state.posts,
      users: state.users,
      gig: gig,
      event: event
    };
   };

   export default connect(
     mapStateToProps,
     { fetchEvents, fetchPosts }
   )(GigDetail);


   ///need to make a different/parallel component to PostList called GigPostList so that gig details are rendered for players
