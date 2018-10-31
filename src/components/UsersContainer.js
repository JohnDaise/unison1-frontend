import React from "react";

import UsersList from './UsersList'
import WarningModal from './WarningModal'
import PlayerAddedModal  from './PlayerAddedModal'
import { connect } from "react-redux";

import { fetchUsers, fetchEvents } from "../redux/actions/index";


class UsersContainer extends React.Component {
  constructor(){
    super()
    this.state={
      isWarningModalOpen: false,
      isPlayerAddedModalOpen: false
    }
  }

  componentDidMount() {
      this.props.fetchUsers();
      this.props.fetchEvents();
    }

    openWarningModal = () => {
      this.setState({
        isWarningModalOpen: true
      })
    }

    closeWarningModal = () => {
      this.setState({
        isWarningModalOpen: false
      })
    }

    openPlayerAddedModal = () => {
      this.setState({
        isPlayerAddedModalOpen: true
      })
    }

    closePlayerAddedModal = () => {
      this.setState({
        isPlayerAddedModalOpen: false
      })
    }






  render(){
    return (
      <React.Fragment>
        <PlayerAddedModal
          isPlayerAddedModalOpen={this.state.isPlayerAddedModalOpen}
          closePlayerAddedModal={this.closePlayerAddedModal}
          />
        <WarningModal
          isWarningModalOpen={this.state.isWarningModalOpen}
          closeWarningModal={this.closeWarningModal}/>
        <UsersList
          openPlayerAddedModal={this.openPlayerAddedModal}
          openWarningModal={this.openWarningModal}
          currentUser={this.props.currentUser} />
      </React.Fragment>
    );
    }
};



export default connect(
  null,
  { fetchUsers, fetchEvents }
)(UsersContainer);
