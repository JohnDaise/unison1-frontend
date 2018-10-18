import React from "react";

import UsersList from './UsersList'
import { connect } from "react-redux";

import { Grid } from 'semantic-ui-react'
import { fetchUsers, fetchEvents } from "../redux/actions/index";


class UsersContainer extends React.Component {
  componentDidMount() {
      this.props.fetchUsers();
      this.props.fetchEvents();
    }


  render(){
    return (
      <React.Fragment>
        <UsersList  currentUser={this.props.currentUser} />
      </React.Fragment>
    );
    }
};



export default connect(
  null,
  { fetchUsers, fetchEvents }
)(UsersContainer);
