import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Login from "./components/Login";
import UsersList from "./components/UsersList";

const requestHelper = url =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(res => {
    if (res.status === 401) {
      alert("login failed");
    } else {
      return res.json();
    }
  });

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      allUsers: [],
      events: []
    };
  }


  clearUser =()=>{
    this.setState({user: null})
  }


  fetchUsers = () => {
    fetch(`http://localhost:3001/users`)
      .then(response => response.json())
      .then(allUsers => {
        this.setState({ allUsers });
      });
  };

// Event Fetch // make sure to include state for events data
  // fetchEvents = () => {
  //   fetch(`http://localhost:3001/events`)
  //     .then(response => response.json())
  //     .then(events => {
  //       this.setState({ events });
  //     });
  // };

  fetchUser = () => {
   requestHelper("http://localhost:3001/profile").then(this.updateUser);
 };

 componentDidMount() {
   if (localStorage.getItem("token")) {
     this.fetchUser();
   }
   this.fetchUsers();
 }

 updateUser = user => {
   this.setState({ user });
 };


  onSearchHandler = event => {
    this.setState({ searchTerm: event.target.value });
  };



  render() {
    return (
      <div className="App">
        <NavBar
          title="Unison"
          color="#282c34"
          subtitle="Users Network Invite Schedule Organize Notes"
          clearUser= {this.clearUser}
          user={this.state.user} />
        <Switch>
          <Route
            path="/login"
            render={() => <Login updateUser={this.updateUser} />}
          />
        <Route path="/about" component={About} />

        <Route
            path="/"
            render={() => {
              return (
                <React.Fragment>
                <UsersList
                  allUsers={this.state.allUsers}
                  />
                 </React.Fragment>
               );
             }}
             />
           </Switch>
      </div>
    );
  }
}

export default App;

// <Route
//   path="/"
//   render={() =>  render the events page}
// />
