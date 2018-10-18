import React from "react";

import UsersList from './UsersList'
import { connect } from "react-redux";

import { Grid } from 'semantic-ui-react'
import { fetchUsers } from "../redux/actions/index";


class UsersContainer extends React.Component {
  componentDidMount() {
      this.props.fetchUsers();
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
  { fetchUsers }
)(UsersContainer);
