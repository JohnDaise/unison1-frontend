import React from "react";
import NewEventForm from './NewEventForm'
import EventsList from './EventsList'
import EventDetail from './EventDetail'
import { Route, Switch } from "react-router-dom";
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

        <Switch>
          <Route
              path="/myevents/"
              render={() => {
                return (
                  <EventsList />
                  )
                }}
            />
          <Route
            exact path="/myevents/:eventId"
            render={(data) => {
              return (
                <EventDetail eventId={data.match.params.eventId} />
              )
            }}
          />
        </Switch>



      </div>
    )}
};

export default connect(
  null,
  { fetchEvents }
)(EventsPage);
