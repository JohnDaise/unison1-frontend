import React from "react";

import EventListItem  from './EventListItem'
import { connect } from "react-redux";

import { Grid, Loader, List, Button } from 'semantic-ui-react'


const EventsList = (props) => (
      <React.Fragment>
        {props.loading ?
        <Loader active inline='centered' />
      :
        <List>
          {props.currentUser ?
          props.events.filter(event => event.user_id === props.currentUser.id ).map(event =>
           <List.Item><EventListItem key={event.id} event={event} /></List.Item>
         ) : null}
       </List>}
      </React.Fragment>
);

const mapStateToProps = state => {
  console.log(state.events)
  return {
    loading: state.loading,
    events: state.events
  };
};


export default connect(mapStateToProps)(EventsList);
