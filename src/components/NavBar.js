import React from "react";
import { NavLink } from "react-router-dom";
// import { logOutCurrentUser } from "../redux/actions/index";
import { Button } from 'semantic-ui-react';
import "../App.css";


class NavBar extends React.Component {
    state = {}

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })


   clickHandler = () => {
    localStorage.clear()
    this.props.clearUser()
    // this.props.logOutCurrentUser();
  }


  render(){

    return (
      <React.Fragment>
      <div className="ui inverted four item menu navbar" size='small'>
              {!this.props.currentUser ?
              <NavLink exact to="/" className="ui item" activeClassName="ui active item">
                Home
              </NavLink>: null}
              {!!this.props.currentUser ?
                <NavLink activeClassName="ui active item" className="ui item" to="/myevents">
                  My Events
                </NavLink>: null}
              {!!this.props.currentUser ?
              <NavLink exact to="/players" className="ui item" activeClassName="ui active item">
                Players
              </NavLink>: null}
              {!!this.props.currentUser ?
              <NavLink activeClassName="ui active item" className="ui item" to="/gigs">
                Gigs
              </NavLink>: null}
              {!this.props.currentUser ?
              <NavLink activeClassName="ui active item" className="ui item" to="/about">
                About
              </NavLink>: null}
        {this.props.currentUser ? (
          <div className= "ui item" >
            <Button.Group basic inverted vertical>
              <Button onClick={()=> window.alert(`Hi ${this.props.currentUser.name.split(" ")[0]}!`)}>Logged in as: {this.props.currentUser.name}</Button>
              <Button onClick={this.clickHandler}>Logout</Button>
            </Button.Group>
        </div>
      ) : (
        <NavLink
            to="/login"
            className="ui item"
            activeClassName="ui active item"
            >
            Login
        </NavLink>
      )}
      </div>
      </React.Fragment>
      );
  }
};



export default NavBar;
// export default withRouter(connect(
// mapStateToProps,
// { logOutCurrentUser }
// )(NavBar));
