import React from "react";

import EventListItem  from './EventListItem'
import { fetchEvents, loadingEvents } from "../redux/actions/index";

import { connect } from "react-redux";

import { Grid, Loader, List, Button } from 'semantic-ui-react'


class EventsList extends React.Component{

componentDidMount(){
  this.props.fetchEvents()
}

render(){
  return(
      <React.Fragment>
        {this.props.loading ?
        <Loader active inline='centered' />
      :
        <List>
          {this.props.currentUser && this.props.events ?
            this.props.events.filter(event => event.user_id === this.props.currentUser.id ).length === 0 ?
            <h1>No Events Scheduled</h1>:
          this.props.events.filter(event => event.user_id === this.props.currentUser.id ).sort(function(a, b) {
             return a.datetime.localeCompare(b.datetime);
              }).map(event =>
           <List.Item><EventListItem key={event.id} event={event} /></List.Item>
         ) : null}
       </List>}
      </React.Fragment>
    )
  }
};
///sort events by date
const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};


export default connect(mapStateToProps, { fetchEvents, loadingEvents })(EventsList);
