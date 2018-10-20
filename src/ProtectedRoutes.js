import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import UsersContainer from "./components/UsersContainer";
import EventsContainer from "./components/EventsContainer";
import EventDetail from "./components/EventDetail";
import SearchBar from "./components/SearchBar";
import PickEvent from "./components/PickEvent";


class ProtectedRoutes extends Component {

  componentDidMount(props) {
      this.props.fetchEvents();
      this.props.fetchUsers();
    }


  render() {
    if(!this.props.currentUser){
    return <Redirect to="/login" />
    }
     else {
    return (
       <React.Fragment>
          <Route
             path="/players"
             render={(props) => {
              return (
                <React.Fragment>
                  <PickEvent {...this.props} currentUser={this.props.currentUser} />
                  <SearchBar />
                  <UsersContainer
                    {...this.props}
                    currentUser={this.props.currentUser}
                    />
                 </React.Fragment>
               );
             }}
             />
          <Route exact path="/myevents" render={(props) => <EventsContainer {...this.props} currentUser={this.props.currentUser} />}/>
          <Route
            exact path="/myevents/:eventId"
            render={ data => {
              return (
                <EventDetail {...this.props} currentUser={this.props.currentUser} fetchEvents={this.props.fetchEvents} eventId={data.match.params.eventId} />
                );
             }} />
      </React.Fragment>
        )}
    }
}

export default ProtectedRoutes;
