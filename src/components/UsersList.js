import React from "react";
import { NavLink } from "react-router-dom";


class UsersList extends React.Component {


  render(){
    return (
      <React.Fragment>
      {this.props.allUsers.map(user =>
        <h1> {user.name} </h1>
      )}
      </React.Fragment>
    );
    }
};

export default UsersList;
