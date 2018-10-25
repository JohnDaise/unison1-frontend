import React from "react";

import UserCard from './UserCard'
import { connect } from "react-redux";

import { Grid, Loader, Container } from 'semantic-ui-react'


class UsersList extends React.Component {

render(){
  const otherUsers = this.props.users.filter(user => this.props.currentUser.id !== user.id)

  return (
  <React.Fragment>
    <Container>
     {this.props.loading ?
        <Loader active inline='centered' />
       :
  <Grid centered columns={4} >
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
</Container>
  </React.Fragment>
)}
};
//
// function(searchTerm){
//   user.bio.toLowerCase().includes(searchTerm.toLowerCase().split(" ").filter(word => user.bio.toLowerCase().includes(word))[0])
//
//   user.bio.toLowerCase().includes(state.searchTerm.toLowerCase())
//     user.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
// }



const mapStateToProps = state => {
  return {
    loading: state.loading,
    users: state.users.filter(user =>
        user.name.toLowerCase().includes(state.searchTerm.toLowerCase().split(" ").filter(word => user.name.toLowerCase().includes(word))[0]) ||
        user.bio.toLowerCase().includes(state.searchTerm.toLowerCase().split(" ").filter(word => user.bio.toLowerCase().includes(word))[0])
    )
  };
};


export default connect(mapStateToProps)(UsersList);
