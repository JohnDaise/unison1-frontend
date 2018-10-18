import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Login from "./components/Login";
import UsersContainer from "./components/UsersContainer";
import EventsPage from "./components/EventsPage";
import SearchBar from "./components/SearchBar";

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
    console.log(this.state)
    return (
      <div className="App">
        <Route path='/' render={(props)=><NavBar
          title="Unison"
          color="#282c34"
          subtitle="Users Network Invite Schedule Organize Notes"
          currentUser={this.state.currentUser}
          clearUser={this.clearUser}
         /> } />
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login updateUser={this.updateUser}  />}
          />
        <Route path="/about" component={About} />
        <Route path="/myevents"
          render={(props) => <EventsPage currentUser={this.state.currentUser} />}
         />
        {!!this.state.currentUser ?
        <Route
           exact path="/"
            render={(props) => {
              return (
                <React.Fragment>
                  <SearchBar />
                  <UsersContainer/>
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
  console.log(state)
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
