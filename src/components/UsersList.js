import React from "react";

import UserCard from './UserCard'
import { connect } from "react-redux";

import { Grid, Loader } from 'semantic-ui-react'


class UsersList extends React.Component {

render(){
  const otherUsers = this.props.users.filter(user => this.props.currentUser.id !== user.id)

  return (
  <React.Fragment>
     {this.props.loading ?
        <Loader active inline='centered' />
       :
  <Grid centered columns={3} >
    { otherUsers.map(user => (
      <UserCard
        key={user.id}
        user={user}
        events={this.props.events}
        currentUser={this.props.currentUser}
        openWarningModal={this.props.openWarningModal}
        openPlayerAddedModal={this.props.openPlayerAddedModal}
        />
    ))}
  </Grid>}
  </React.Fragment>
)}
};



const mapStateToProps = state => {
  return {
    loading: state.loading,
    users: state.users.filter(user =>
      user.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      user.bio.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  };
};


export default connect(mapStateToProps)(UsersList);
