import React from "react";
import NewEventForm from './NewEventForm'
import UpdateEventForm from './UpdateEventForm'
import EventsList from './EventsList'
import EventDetail from './EventDetail'


import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchUsers, fetchUserEvents, fetchPosts, fetchedEvents, loading } from "../redux/actions/index";


import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { Container, Divider, Grid, Loader } from 'semantic-ui-react'


class EventsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      isNewEventFormModalOpen: false,
      isUpdateEventFormModalOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
      this.props.fetchEvents();
      this.props.fetchUsers();
      this.props.fetchPosts();
      this.props.fetchUserEvents();
    }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }




closeEventFormModal = () => {
  this.setState({
    isNewEventFormModalOpen: false
  })
}

openEventFormModal = () => {
  this.setState({
    isNewEventFormModalOpen: true
  })
}


  handleClick= (e) => {
     e.preventDefault();
   }

  render(){
    return (
      <Grid columns={2} divided>
        <Grid.Column textAlign='center' computer={12}>
          <NewEventForm
            currentUser={this.props.currentUser}
            fetchEvents={this.props.fetchEvents}
            closeEventFormModal={this.closeEventFormModal}
            openEventFormModal={this.openEventFormModal}
            isNewEventFormModalOpen={this.state.isNewEventFormModalOpen}
             />
          <EventsList currentUser={this.props.currentUser} fetchEvents={this.props.fetchEvents}  />
        </Grid.Column>
        <Grid.Column computer={4}>
          <Container textAlign='left'>
              <DatePicker
                selected={this.state.startDate}
                highlightDates={this.props.events.map(event => moment(event.datetime))}
              />
          </Container>
        </Grid.Column>
      </Grid>
    )}
};


const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchEvents, fetchUsers, fetchPosts, fetchUserEvents }
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
