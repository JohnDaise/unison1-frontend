import React from "react";

import EventListItem  from './EventListItem'
import { connect } from "react-redux";

import { Grid, Loader, List } from 'semantic-ui-react'


const EventsList = (props) => (
      <React.Fragment>
        {props.loading ?
        <Loader active inline='centered' />
      :
        <List>
         {props.events.map(event =>
           <List.Item><EventListItem event={event} /></List.Item>
         )}
       </List>}
      </React.Fragment>
);

const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};


export default connect(mapStateToProps)(EventsList);
