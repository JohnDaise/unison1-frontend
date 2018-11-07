import React from "react";
import { List, Image } from 'semantic-ui-react'

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchEvents, fetchUsers, fetchUserEvents, deleteUserEvent } from "../redux/actions/index";


class PlayersList extends React.Component{


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
      {this.props.players.map( p=>
        <List.Item
          onClick={(e) => {
            // console.log(this.props.userEvents.find(ue => ue.user_id === p.id))
            let uEvent = this.props.userEvents.find(ue => ue.user_id === p.id)
            this.props.deleteUserEvent(uEvent.id)
            this.props.fetchUserEvents();
            this.props.history.push(`/myevents/${this.props.event.id}`)
          }}
          >
              <Image avatar src={p.pic_url} />
              <List.Content>
             <List.Header id={p.id} as='a'>{p.name}</List.Header>
             <List.Description>
               'Player'
             </List.Description>
           </List.Content>
        </List.Item>
      )}

    </List>
  )
}

}


const mapStateToProps = (state, propsFromParent )=> {
  let organizer = state.users.find(user => user.id === parseInt(propsFromParent.currentUser.id))
  // let player = propsFromParent.players.find
  // let ue = state.userEvents.find(ue => ue.user_id === e.target.id)
  //find the user event where ue.user_id === p.id or e.target.id -  line 37
  return {
    loading: state.loading,
    events: state.events,
    users: state.users,
    userEvents: state.userEvents,
    organizer: organizer
  };
};

export default connect(
  mapStateToProps,
  { fetchEvents, fetchUsers, fetchUserEvents, deleteUserEvent }
)(withRouter(PlayersList));
