import React from "react";
import NewEventForm from './NewEventForm'
import UpdateEventForm from './UpdateEventForm'
import EventsList from './EventsList'
import EventDetail from './EventDetail'


import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents } from "../redux/actions/index";


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
          <Container>
              <EventsList currentUser={this.props.currentUser} />
          </Container>
          <Container>
              <EventDetail />
          </Container>
      </React.Fragment>
    )}
};

// <React.Fragment>
//   <EventsList />
//   <EventDetail/>
// </React.Fragment>
//

export default connect(
  null,
  { fetchEvents }
)(EventsContainer);
