import React from "react";

import NewEventForm from './NewEventForm'


class EventsPage extends React.Component {


  handleClick= (e) => {
     e.preventDefault();
     console.log("Create NEW Event Form")
   }

  render(){
    return (
      <React.Fragment>
        <NewEventForm user={this.props.user} />
      </React.Fragment>
    );
    }
};

export default EventsPage;
