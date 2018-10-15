import React from "react";
import { NavLink } from "react-router-dom";
import UserCard from './UserCard'

import { Grid } from 'semantic-ui-react'



class UsersList extends React.Component {


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

export default UsersList;
