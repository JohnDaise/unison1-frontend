import React from "react";
import NewEventForm from './NewEventForm'
import EventsList from './EventsList'


class EventsPage extends React.Component {


  handleClick= (e) => {
     e.preventDefault();
     console.log("Create NEW Event Form")
   }

  render(){
    return (
      <div>
        <NewEventForm
          user={this.props.user}
          fetchEvents={this.props.fetchEvents}
          />
        <EventsList events={this.props.events}/>
      </div>
    )}
};

export default EventsPage;
