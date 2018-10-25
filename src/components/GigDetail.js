import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchPosts, loading } from "../redux/actions/index";

import { Grid, Image, Loader, Button, Menu } from 'semantic-ui-react';
import "../App.css";

import GigPlayerList from './GigPlayerList';
import GigPostList from './GigPostList';
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


    let gigs = this.props.users.find(user => user.id === this.props.currentUser.id).events

      return (
        <React.Fragment>
           {this.props.loading ?
              <Loader active inline='centered' />
             :
        <Grid columns={1}>
            <div className={"fixedleft"} >
              <h3 name={'name'}>{this.props.gig.name}</h3>
              <h4 name={'date'}> {weekday[moment(this.props.gig.datetime).format('E')]} {moment(this.props.gig.datetime).format('MMMM DD YYYY')}</h4>
              <h4 name={'time'} >{moment(this.props.gig.datetime).format('h:mm a')}</h4>
              <h4 name={'location'} >{this.props.gig.location}</h4>
              <h4>Notes:</h4><p name={'notes'} >{this.props.gig.notes}</p>
          </div>
          <Grid.Column className={"post-col"} textAlign='center'>
             <GigPostList currentUser={this.props.currentUser} gig={this.props.gig} />
          </Grid.Column>
            <div className={"fixedright"}>
            <GigPlayerList currentUser={this.props.currentUser} gig={this.props.gig} />
            </div>
        </Grid>}
        </React.Fragment>
      )
  }
}


  const mapStateToProps = (state, propsFromParent) => {
    let player = state.users.find(user => user.id === propsFromParent.currentUser.id)
    let gig = state.events.find(gig => gig.id === parseInt(propsFromParent.gigId))
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
   )(withRouter(GigDetail));


   ///need to make a different/parallel component to PostList called GigPostList so that gig details are rendered for players
