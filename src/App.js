import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Login from "./components/Login";

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
      data: [],
      user: null
    };
  }

// change this to fetch user events
  // fetchPaintings = () => {
  //   fetch(`http://localhost:3000/paintings`)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ data });
  //     });
  // };

  fetchUser = () => {
    requestHelper("http://localhost:3001/api/v1/users").then(console.log(this.updateUser));
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.fetchUser();
    }
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
          icon="paint brush"
          color="#282c34"
          subtitle="Users Network Invite Schedule Organize Notes"
          user={this.state.user}
        />
        <Switch>
          <Route
            path="/login"
            render={() => <Login updateUser={this.updateUser} />}
          />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
