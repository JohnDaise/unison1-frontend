import React from "react";
import NewEventForm from './NewEventForm'
import EventsList from './EventsList'
import { connect } from "react-redux";
import { fetchEvents } from "../redux/actions/index";


class EventsPage extends React.Component {
  componentDidMount() {
      this.props.fetchEvents();
    }

  handleClick= (e) => {
     e.preventDefault();
     console.log("Create NEW Event Form")
   }

  render(){
    return (
      <div>
        <NewEventForm />
        <EventsList />
      </div>
    )}
};

export default connect(
  null,
  { fetchEvents }
)(EventsPage);
