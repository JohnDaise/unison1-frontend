import React from "react";

import GigListItem  from './GigListItem'
import { connect } from "react-redux";

import { Grid, Loader, List, Button } from 'semantic-ui-react'

//map thru all userEvents that include currentUser id. those userEvents will have event ids
const GigsList = (props) => (
  console.log(props.userEvents.filter(gig => gig.user_id === props.currentUser.id).map(gig => gig.event)),
    // console.log(props.events.filter(event => event.users.filter( user => user === props.currentUser))),
      <React.Fragment>
        {props.loading ?
        <Loader active inline='centered' />
      :
        <List>
          {props.currentUser ?
          props.userEvents.filter(gig => gig.user_id === props.currentUser.id).map(gig =>
           <List.Item><GigListItem gig={gig.event} /></List.Item>
         ) : null }
       </List>}
      </React.Fragment>
);

const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events,
    users: state.users,
    userEvents: state.userEvents
  };
};


export default connect(mapStateToProps)(GigsList);
