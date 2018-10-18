import React from "react";

import UsersList from './UsersList'
import WarningModal from './WarningModal'
import { connect } from "react-redux";

import { Grid } from 'semantic-ui-react'
import { fetchUsers, fetchEvents } from "../redux/actions/index";


class UsersContainer extends React.Component {
  constructor(){
    super()
    this.state={
      isModalOpen: false
    }
  }

  componentDidMount() {
      this.props.fetchUsers();
      this.props.fetchEvents();
    }

    openModal = () => {
      this.setState({
        isModalOpen: true
      })
    }
//
    closeModal = () => {
      this.setState({
        isModalOpen: false
      })
    }


  render(){
    return (
      <React.Fragment>
        <WarningModal closeWarningModal={this.closeWarningModal} isModalOpen={this.state.isModalOpen}/>
        <UsersList openWarningModal={this.openWarningModal} currentUser={this.props.currentUser} />
      </React.Fragment>
    );
    }
};



export default connect(
  null,
  { fetchUsers, fetchEvents }
)(UsersContainer);
