import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
      <div className="ui inverted menu navbar">
              <NavLink exact to="/" className="ui item" activeClassName="ui active item">
                Home
              </NavLink>
              {!!this.props.currentUser ?
              <NavLink exact to="/players" className="ui item" activeClassName="ui active item">
                Players
              </NavLink>: null}
              {!!this.props.currentUser ?
              <NavLink activeClassName="ui active item" className="ui item" to="/myevents">
                My Events
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
          <div className="logout" >
            <span className="ui item">Logged in as: {this.props.currentUser.name}</span>
            <Button attached='top' onClick={this.clickHandler}>Logout</Button>
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

const mapStateToProps = state => {
  return {
    loading: state.loading,
    currentUser: state.currentUser
  };
};

export default NavBar;
// export default withRouter(connect(
// mapStateToProps,
// { logOutCurrentUser }
// )(NavBar));





// <NavLink activeClassName="ui active item" className="ui item" exact to="/">
// <Menu.Item
//     name='home'
//     active={activeItem === 'home'}
//     onClick={this.handleItemClick}
//     >
// </Menu.Item>

// <Menu.Item
//     name='login'
//     active={activeItem === 'login'}
//     onClick={this.handleItemClick}
//   >
// </Menu.Item>


// <Menu.Item
//     name='about'
//     active={activeItem === 'about'}
//     onClick={this.handleItemClick}
//   >
//   </Menu.Item>
