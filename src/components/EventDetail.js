import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table } from 'semantic-ui-react'

class EventDetail extends React.Component {
  render() {
    return (
      <div>

      <h4>

      </h4>
      //Event Details Table

      //Comments Box
      </div>
    )
  }
}

  const mapStateToProps = (state, propsFromParent) => {
    console.log(state, propsFromParent)
    return {
      event: state.events.find(event => event.id === propsFromParent.eventId)
    };
   };

  export default connect(mapStateToProps)(EventDetail);
