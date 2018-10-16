import React from "react";

import EventListItem  from './EventListItem'


class EventsList extends React.Component {


  render(){
    return (
      <React.Fragment>
      {this.props.events.map(event =>
        <EventListItem event={event} />
      )
      }
      </React.Fragment>
    );
    }
};

export default EventsList;
