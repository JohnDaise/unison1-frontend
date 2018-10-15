import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = {}

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })


   clickHandler = () => {
    localStorage.clear()
    this.props.clearUser()
    // this.props.history.push('/')
  }


  render(){

    return (
      <div className="ui inverted menu">
              <NavLink exact to="/" className="ui item" activeClassName="ui active item">
              Home
              </NavLink>
              <NavLink activeClassName="ui active item" className="ui item" to="/myevents">
              My Events
              </NavLink>
              <NavLink activeClassName="ui active item" className="ui item" to="/about">
              About
              </NavLink>
            {this.props.user ? (
              <React.Fragment>
                <span className="ui item">Logged in as: {this.props.user.name}</span>
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

export default NavBar;



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
