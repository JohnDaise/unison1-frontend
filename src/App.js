import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";


import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Login from "./components/Login";
import UsersContainer from "./components/UsersContainer";
import EventsContainer from "./components/EventsContainer";
import EventDetail from "./components/EventDetail";
import SearchBar from "./components/SearchBar";
import PickEvent from "./components/PickEvent";
import ProtectedRoutes from "./ProtectedRoutes";



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
      <React.Fragment>
        <NavBar
          title="Unison"
          color="#282c34"
          subtitle="Users Network Invite Schedule Organize Notes"
          currentUser={this.state.currentUser}
          clearUser={this.clearUser}
         />
       <Switch>
         <Route
            exact path="/"
             render={(props) => {
                return (
                    <HomePage />
                    );
                  }}
            />
          <Route exact path="/login"
            render={() => <Login updateUser={this.updateUser} /> }
            />
          <Route exact path="/about" component={About} />
          <ProtectedRoutes
            path='/'
            component={ProtectedRoutes}
            fetchUsers={this.fetchUsers}
            fetchEvents={this.fetchEvents}
            currentUser={this.state.currentUser}
            {...this.props}
             />
      </Switch>
  </React.Fragment>
)}


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
