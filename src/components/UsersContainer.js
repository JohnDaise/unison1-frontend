import React from "react";

import UserCard from './UserCard'

import { Grid } from 'semantic-ui-react'


//rename UsersContainer
class UsersContainer extends React.Component {


  render(){
    return (
      <React.Fragment>
      <Grid centered columns={3} >
      {this.props.allUsers.map(user =>
        <UserCard
            key={user.id}
            user={user}
            /> )
      }
      </Grid>
      </React.Fragment>
    );
    }
};

export default UsersContainer;
