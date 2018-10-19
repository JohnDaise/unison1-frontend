import React from "react";
import NewEventForm from './NewEventForm'
import UpdateEventForm from './UpdateEventForm'
import EventsList from './EventsList'
import EventDetail from './EventDetail'


import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchedEvents } from "../redux/actions/index";


import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { Container, Divider } from 'semantic-ui-react'


class EventsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  componentDidMount() {
      this.props.fetchEvents();
    }

  handleClick= (e) => {
     e.preventDefault();
     console.log("Create NEW Event Form")
   }
///need a switch below for each event routes for events should be restful so they are shareable also add scroll
  render(){
    return (
      <React.Fragment>
          <Container textAlign='left'>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
          </Container>
          <Container textAlign='right'>
              <NewEventForm currentUser={this.props.currentUser} />
          </Container>
          <Switch>
            <Route
               path="/myevents/:eventId"
               render={(data) => {
                 console.log(data)
                 let singleEvent = this.props.events.find(
                   event => event.id === data.match.params.eventId
                 )
                return <EventDetail singleEvent={singleEvent} eventId={data.match.params.eventId} />
               }}
               />
               <Route
              path="/"
              render={() => (
                <div className="ui narrow container segment">
                  <EventsList currentUser={this.props.currentUser} />
                </div>
              )}
            />

          </Switch>

      </React.Fragment>
    )}
};

// <Container>
//     <EventsList currentUser={this.props.currentUser} />
// </Container>
// <Container>
//     <EventDetail />
// </Container>
//

const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events
  };
};

export default connect(
  mapStateToProps,
  { fetchEvents }
)(EventsContainer);

// <Switch>
// <Route
//   path="/myevents/:eventId"
//   render={data => {
//     let singleEvent = this.state.events.find(
//       event => event.id === data.match.params.eventId
//     );
//     return <EventDetail singleEvent={singleEvent}/>;
//     }}
//     />
//   <Route
//     path="/"
//     render={() => (
//       <EventsList />
//     )}
//     />
// </Switch>
