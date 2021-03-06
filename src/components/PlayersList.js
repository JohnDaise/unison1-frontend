import React from "react";
import PlayerDetail from './PlayerDetail'

import { List, Image } from 'semantic-ui-react'


import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchEvents, fetchUsers, fetchUserEvents, deleteUserEvent, hideModal, showModal } from "../redux/actions/index";


class PlayersList extends React.Component{

  // handleClick = () => {
  //  this.props.showDetail(this.props.instrument) function to render modal
  //  <PlayerDetail/>
  //  console.log("Player")
  // }


//each list item should be a link that renders a simple user details modal
  render(){
  return(
    <List>
      <strong><h1>Users</h1></strong>
      <List.Item>
            <Image avatar src={this.props.organizer.pic_url} />
            <List.Content>
           <List.Header as='a'>{this.props.organizer.name}</List.Header>
           <List.Description>
             'Organizer'
           </List.Description>
         </List.Content>
         <br/>
         <br/>
      </List.Item>
      {this.props.players.map( p =>
        <PlayerDetail
          p={p}
          singlePlayer={this.props.singlePlayer}
          closePlayerDetailModal={this.props.closePlayerDetailModal}
          openPlayerDetailModal={this.props.openPlayerDetailModal}
          isPlayerDetailModalOpen={this.props.isPlayerDetailModalOpen}
          />
        // <List.Item
        //    onClick={(e) => this.handleClick(e) }
        //   >
        //       <Image avatar src={p.pic_url} />
        //       <List.Content>
        //      <List.Header id={p.id} as='a'>{p.name}</List.Header>
        //      <List.Description>
        //        'Player'
        //      </List.Description>
        //    </List.Content>
        // </List.Item>
      )}
      <br/>
    </List>
  )
}

}


// console.log(this.props.userEvents.find(ue => ue.user_id === p.id))
//open modal
// let uEvent = this.props.userEvents.find(ue => ue.user_id === p.id)
// this.props.deleteUserEvent(uEvent.id)
// this.props.fetchUserEvents();
// this.props.history.push(`/myevents/${this.props.event.id}`)


const mapStateToProps = (state, propsFromParent )=> {
  let organizer = state.users.find(user => user.id === parseInt(propsFromParent.currentUser.id))
  let players = state.userEvents.filter( ue => ue.event_id === propsFromParent.event.id).map(ue => ue.user)
  // let player = propsFromParent.players.find
  // let ue = state.userEvents.find(ue => ue.user_id === e.target.id)
  //find the user event where ue.user_id === p.id or e.target.id -  line 37
  return {
    loading: state.loading,
    events: state.events,
    users: state.users,
    userEvents: state.userEvents,
    organizer: organizer,
    players: players
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents:() => dispatch(fetchEvents()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserEvents: () => dispatch(fetchUserEvents()),
  deleteUserEvent: () => dispatch(deleteUserEvent()),
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
  dispatch(showModal({ modalProps, modalType }))
 }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlayersList));
