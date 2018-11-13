import React from "react";

import UsersList from '../components/UsersList'
import WarningModal from '../components/WarningModal'
import PlayerAddedModal  from '../components/PlayerAddedModal'
import { connect } from "react-redux";

import { fetchUsers, fetchEvents, fetchUserEvents } from "../redux/actions/index";


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
      this.props.fetchUserEvents();
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
  { fetchUsers, fetchEvents, fetchUserEvents }
)(UsersContainer);
