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

import { Container, Divider, Grid, Loader } from 'semantic-ui-react'


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
    return (
      <Grid columns={2} divided>
        <Grid.Column textAlign='center'>
          <GigsList currentUser={this.props.currentUser} fetchEvents={this.props.fetchEvents}  />
        </Grid.Column>
        <Grid.Column>
          <Container textAlign='left'>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
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
  { fetchEvents, fetchUsers, fetchPosts, fetchUserEvents  }
)(GigsContainer);
