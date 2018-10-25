import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import UsersContainer from "./components/UsersContainer";
import EventsContainer from "./components/EventsContainer";
import GigsContainer from "./components/GigsContainer";
import EventDetail from "./components/EventDetail";
import GigDetail from "./components/GigDetail";
import SearchBar from "./components/SearchBar";
import PickEvent from "./components/PickEvent";


class ProtectedRoutes extends Component {

  componentDidMount(props) {
      this.props.fetchEvents();
      this.props.fetchUsers();
    }


  render() {
    if(!this.props.currentUser){
    return <Redirect to="/" />
    }
     else {
    return (
       <React.Fragment>
          <Route
             path="/players"
             render={(props) => {
              return (
                <React.Fragment>
                  <br/>
                  <br/>
                  <br/>
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
          <Route
            exact path="/myevents"
            render={(data) => {
              return(
                <EventsContainer {...this.props} currentUser={this.props.currentUser} />
              );
            }}/>
          <Route
            exact path="/myevents/:eventId"
            render={ data => {
              return (
                <EventDetail {...this.props} currentUser={this.props.currentUser} fetchEvents={this.props.fetchEvents} eventId={data.match.params.eventId} />
                );
             }} />
          <Route exact path="/gigs" render={(props) => <GigsContainer {...this.props} currentUser={this.props.currentUser} />}/>
          <Route
            exact path="/gigs/:gigId"
            render={ data => {
              return (
                <GigDetail {...this.props} currentUser={this.props.currentUser} fetchEvents={this.props.fetchEvents} gigId={data.match.params.gigId} />
                );
             }} />
      </React.Fragment>
        )}
    }
}

export default ProtectedRoutes;
