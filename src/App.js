import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";


import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Login from "./components/Login";
import UsersContainer from "./components/UsersContainer";
import EventsContainer from "./components/EventsContainer";
import SearchBar from "./components/SearchBar";
import PickEvent from "./components/PickEvent";



import { connect } from "react-redux";
import { getCurrentUser } from "./redux/actions/index";



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
      currentUser: null,
      allUsers: [],
      events: []
    };
  }


  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.fetchUser();
      this.fetchEvents();
      // this.props.getCurrentUser(); //dispatch this function from actions
    }
    this.fetchUsers();
    this.fetchEvents();
  }




  clearUser =()=>{
    this.setState({currentUser: null})
  }

  fetchUsers = () => {
  fetch(`http://localhost:3001/users`)
    .then(response => response.json())
    .then(allUsers => {
      this.setState({ allUsers });
    });
};

fetchEvents = () => {
  fetch(`http://localhost:3001/events`)
    .then(response => response.json())
    .then(events => {
      this.setState({ events });
    });
};


  fetchUser = () => {
   requestHelper("http://localhost:3001/profile").then(this.updateUser);
 };


 updateUser = user => {
   this.setState({
    currentUser: user
    });
 };




  render() {
    return (
      <div className="App">
        <NavBar
          title="Unison"
          color="#282c34"
          subtitle="Users Network Invite Schedule Organize Notes"
          currentUser={this.state.currentUser}
          clearUser={this.clearUser}
         />
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login updateUser={this.updateUser}  />}
          />
        <Route path="/about" component={About} />
        <Route path="/myevents"
          render={(props) => <EventsContainer currentUser={this.state.currentUser} />}
         />
       ///logged in routes
        {this.state.currentUser ?
        <Route
           exact path="/"
            render={(props) => {
              return (
                <React.Fragment>
                  <PickEvent currentUser={this.state.currentUser} />
                  <SearchBar />
                  <UsersContainer
                    currentUser={this.state.currentUser}
                    />
                 </React.Fragment>
               );
             }}
             /> :
         <Route
            exact path="/"
             render={(props) => {
                return (
                  <React.Fragment>
                    <HomePage />
                  </React.Fragment>
                );
              }}
            />
           }
          </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    currentUser: state.currentUser
  };
};


export default App;
// export default connect(
//   mapStateToProps,
//   { getCurrentUser }
// )(App);
