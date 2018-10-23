import React from "react";
import { Link, Route, Switch  } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchPosts, loading } from "../redux/actions/index";

import { Grid, Image, Loader, Button } from 'semantic-ui-react';
import PlayersList from './PlayersList';
import PostList from './PostList';



class GigDetail extends React.Component {

componentDidMount(){
  this.props.fetchEvents();
  this.props.fetchPosts();
}


  render() {
    console.log(this.props)
      return (
        <React.Fragment>
           {this.props.loading ?
              <Loader active inline='centered' />
             :
        <Grid columns={3}>
          <Grid.Column textAlign='center'>
            <h1>{}</h1>
            <h2>{}</h2>
            <h2>{}</h2>
            <h2>{}</h2>
            <h2>{}</h2>
          </Grid.Column>
          <Grid.Column className={"post-col"}>
            // <PostList currentUser={this.props.currentUser}  />
          </Grid.Column>
          <Grid.Column textAlign='center'>
            // <PlayersList currentUser={this.props.currentUser}  />
          </Grid.Column>
        </Grid>}
        </React.Fragment>
      )
  }
}

  const mapStateToProps = (state, propsFromParent) => {
    console.log(propsFromParent)
    let gig = state.userEvents.find(gig => gig.id === parseInt(propsFromParent.gigId))
    return {
      loading: state.loading,
      events: state.events,
      posts: state.posts,
      gig: gig
    };
   };

   export default connect(
     mapStateToProps,
     { fetchEvents, fetchPosts }
   )(GigDetail);
