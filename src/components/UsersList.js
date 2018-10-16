import React from "react";

import UserCard from './UserCard'
import { connect } from "react-redux";

import { Grid } from 'semantic-ui-react'


const UsersList = props => (
  <Grid centered columns={3} >
    {props.users.map(user => (
      <UserCard user={user} />
    ))}
  </Grid>
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
