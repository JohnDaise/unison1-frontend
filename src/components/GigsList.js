import React from "react";
import { connect } from "react-redux";

import GigListItem  from './GigListItem';

import { Loader, List, Button } from 'semantic-ui-react';
import { addPlayerToEvent, fetchEvents, deleteUserEvent, fetchUserEvents, userEventDeleted } from "../redux/actions/index";



//map thru all userEvents that include currentUser id. those userEvents will have event ids
class GigsList extends React.Component {


render(){
  let player =  this.props.users.find(user => user.id === this.props.currentUser.id);
return(
      <React.Fragment>
        {this.props.loading ?
        <Loader active inline='centered' />
      :
        <List>
          {player ?
            player.events.length === 0 ?
            <h1>No Gigs Scheduled</h1>:
          player.events.reverse().map(gig =>
           <List.Item><GigListItem gig={gig} />
           <Button onClick={(e)=> console.log("Event Accepted")}
             >Accept</Button>
           <Button onClick={(e)=> console.log("Event Declined")}
             >Decline</Button></List.Item>
           //Accept button should simply cause both buttons to no longer render
           //Decline button should call on deleteUserEvent function and cause both buttons to no longer render
         )

         : null }
       </List>}
      </React.Fragment>
    )
  }
};

const mapStateToProps = (state, propsFromParent) => {
  return {
    loading: state.loading,
    events: state.events,
    users: state.users,
    userEvents: state.userEvents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserEvents: value => dispatch(fetchUserEvents(value)),
    deleteUserEvent: value => dispatch(deleteUserEvent(value)),
    addPlayerToEvent: value => dispatch(addPlayerToEvent(value)),
    fetchEvents: value => dispatch(fetchEvents(value)),
    userEventDeleted: value => dispatch(userEventDeleted(value))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(GigsList);
