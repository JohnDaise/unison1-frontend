import React from "react";
import { Link, Route, Switch  } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Image, Loader } from 'semantic-ui-react';
import MoreDetails from './MoreDetails';
import CommentsList from './CommentsList';


class EventDetail extends React.Component {



  render() {
    console.log("props", this.props)
      return (
        <React.Fragment>
           {this.props.loading ?
              <Loader active inline='centered' />
             :
        <div>
          "Here it is"
        </div>}
        </React.Fragment>
      )
  }
}

  const mapStateToProps = (state, propsFromParent) => {
    console.log("propsFromParent", propsFromParent)
    let event = state.events.find(event => event.id === parseInt(propsFromParent.eventId))
    return {
      event: event,
      loading: state.loading

    };
   };

  export default connect(mapStateToProps)(EventDetail);
  //
  // <React.Fragment>>
  //   <h1>{this.props.event.name}</h1>
  //   <h3>{this.props.event.location}</h3>
  //   <h3>{this.props.event.time}</h3>
  //   <h3>{this.props.event.notes}</h3>
  // </React.Fragment>
