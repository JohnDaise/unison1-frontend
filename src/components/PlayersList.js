import React from "react";
import { Grid, List, Image } from 'semantic-ui-react'

import { connect } from "react-redux";
import { fetchEvents, fetchUsers, fetchedEvents, loading } from "../redux/actions/index";

const PlayersList = (props) => {




  return(
    console.log(props),
    <List>
      <strong><h1>Users</h1></strong>
      <List.Item>
            <Image avatar src={props.organizer.pic_url} />
            <List.Content>
           <List.Header as='a'>{props.organizer.name}</List.Header>
           <List.Description>
             'Organizer'
           </List.Description>
         </List.Content>
      </List.Item>
      {props.players.map( p=>
        <List.Item>
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


const mapStateToProps = (state, propsFromParent )=> {
  console.log(propsFromParent)
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
