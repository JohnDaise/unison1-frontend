import React from "react";
import { Grid, List, Image, Icon } from 'semantic-ui-react'

import { connect } from "react-redux";
import { fetchEvents, fetchUsers, fetchedEvents, loading } from "../redux/actions/index";

const GigPlayerList = (props) => {



//each list item should be a link that renders a simple user details modal
  return(
    console.log(props),
    <List>
      <strong><h1>Users</h1></strong>
      <List.Item>
            <Image avatar src={props.gig.user.pic_url} />
            <List.Content>
           <List.Header as='a'>{props.gig.user.name}</List.Header>
           <List.Description>
             'Organizer'
           </List.Description>
         </List.Content>
         <br/>
         <br/>
      </List.Item>
      {props.gig.users.map( p=>
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
)(GigPlayerList);










// <List.Item>
//       <Image avatar src={props.organizer.pic_url} />
//       <List.Content>
//      <List.Header as='a'>{props.organizer.name}</List.Header>
//      <List.Description>
//        'Organizer'
//      </List.Description>
//    </List.Content>
//    <br/>
//    <br/>
// </List.Item>
// {props.players.map( p=>
//   <List.Item>
//         <Image avatar src={p.pic_url} />
//         <List.Content>
//        <List.Header as='a'>{p.name}</List.Header>
//        <List.Description>
//          'Player'
//        </List.Description>
//      </List.Content>
//   </List.Item>
// )}
