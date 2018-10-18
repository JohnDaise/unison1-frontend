import React from "react";
import { Link, Route, Switch  } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Image } from 'semantic-ui-react'
import MoreDetails from './MoreDetails'
import CommentsList from './CommentsList'


class EventDetail extends React.Component {

  render() {
      return (
        <Grid columns={2} divided>
          <MoreDetails />
          <CommentsList />
        </Grid>
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
