import React from "react";
import NewEventForm from './NewEventForm'
import UpdateEventForm from './UpdateEventForm'
import GigsList from './GigsList'
import GigDetail from './GigDetail'


import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvents, fetchUsers, fetchPosts, fetchedEvents, fetchUserEvents, loading } from "../redux/actions/index";


import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { Container, Divider, Grid, Loader, Sticky } from 'semantic-ui-react'


class GigsContainer extends React.Component {
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

  let player =  this.props.users.find(user => user.id === this.props.currentUser.id);
     return (
      <Grid columns={2} divided >
        <Grid.Column textAlign='center' computer={12}>
          <br/>
          <br/>
          <GigsList currentUser={this.props.currentUser} fetchEvents={this.props.fetchEvents}  />
        </Grid.Column>
        <Grid.Column computer={4}>
          <Container textAlign='left' >
            <br/>
            <br/>
            { player ?
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                highlightDates={ player.events.map(event => moment(event.datetime))}
              /> : null }
          </Container>
        </Grid.Column>
      </Grid>
    )}
};

// player.events.map(event => moment(event.datetime))


const mapStateToProps = state => {
  return {
    loading: state.loading,
    events: state.events,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchEvents, fetchUsers, fetchPosts, fetchUserEvents  }
)(GigsContainer);
