import React from "react";

import UserCard from './UserCard'
import { connect } from "react-redux";

import { Grid, Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const UsersList = props => (
  <React.Fragment>
     {props.loading ?
        <Segment>
        <Dimmer active>
          <Loader size='huge'>Loading</Loader>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment> : null }
  <Grid centered columns={3} >
    {props.users.map(user => (
      <UserCard user={user} />
    ))}
  </Grid>
  </React.Fragment>
);



const mapStateToProps = state => {
  return {
    loading: state.loading,
    users: state.users.filter(
      user =>
        user.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  };
};


export default connect(mapStateToProps)(UsersList);
