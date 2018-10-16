import React from "react";

import EventListItem  from './EventListItem'
import { connect } from "react-redux";

import { Grid, Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const EventsList = (props) => (
      <React.Fragment>
        {props.loading ?
           <Segment>
           <Dimmer active>
             <Loader size='huge'>Loading</Loader>
           </Dimmer>
           <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
           <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
           <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
         </Segment> : null }
         {props.events.map(event =>
           <EventListItem event={event} />
         )}
      </React.Fragment>
);

const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};


export default connect(mapStateToProps)(EventsList);
