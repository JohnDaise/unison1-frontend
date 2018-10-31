import React from "react";
import { List, Image } from 'semantic-ui-react'

import { connect } from "react-redux";
import { fetchEvents, fetchUsers } from "../redux/actions/index";


class PlayersList extends React.Component{

  handleClick = () => {
   console.log("hi")
  }
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
          onClick={(e) => this.handleClick(e) }
          >
              <Image avatar src={p.pic_url} />
              <List.Content>
             <List.Header as='a'>{p.name}</List.Header>
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
  return {
    loading: state.loading,
    events: state.events,
    users: state.users,
    organizer: organizer
  };
};

export default connect(
  mapStateToProps,
  { fetchEvents, fetchUsers }
)(PlayersList);
