import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { connect } from "react-redux";
// import { logOutCurrentUser } from "../redux/actions/index";


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
      <div className="ui inverted menu">
              <NavLink exact to="/" className="ui item" activeClassName="ui active item">
                Home
              </NavLink>
              {!!this.props.currentUser ?
              <NavLink activeClassName="ui active item" className="ui item" to="/myevents">
                My Events
              </NavLink>: null}
              <NavLink activeClassName="ui active item" className="ui item" to="/about">
                About
              </NavLink>
        {this.props.currentUser ? (
        <React.Fragment>
          <span className="ui item">Logged in as: {this.props.currentUser.name}</span>
          <Button onClick={this.clickHandler}>Logout</Button>
          </React.Fragment>
      ) : (
        <NavLink
            exact
            to="/login"
            className="ui item"
            activeClassName="ui active item"
            >
            Login
        </NavLink>
      )}
      </div>
      );
  }
};

const mapStateToProps = state => {
  console.log(state)
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
