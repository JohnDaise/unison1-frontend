import React from "react";

import UsersList from './UsersList'
import { connect } from "react-redux";

import { Grid } from 'semantic-ui-react'
import { fetchUsers } from "../redux/actions/index";


//rename UsersContainer
class UsersContainer extends React.Component {
  componentDidMount() {
      this.props.fetchUsers();
    }


  render(){
    return (
      <React.Fragment>
        <UsersList />
      </React.Fragment>
    );
    }
};



export default connect(
  null,
  { fetchUsers }
)(UsersContainer);
