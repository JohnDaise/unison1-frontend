import React from "react";

import UserCard from './UserCard'
import { connect } from "react-redux";

import { Grid, Loader } from 'semantic-ui-react'


const UsersList = props => (
  <React.Fragment>
     {props.loading ?
        <Loader active inline='centered' />
       :
  <Grid centered columns={3} >
    {props.users.map(user => (
      <UserCard
        key={user.id}
        user={user}
        events={props.events}
        currentUser={props.currentUser}
        />
    ))}
  </Grid>}
  </React.Fragment>
);



const mapStateToProps = state => {
  return {
    loading: state.loading,
    users: state.users.filter(user => user.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
  };
};


export default connect(mapStateToProps)(UsersList);
