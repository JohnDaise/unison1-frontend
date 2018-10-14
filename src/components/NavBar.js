import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = {}

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render(){
    const { activeItem } = this.state

    return (
      <div class="ui inverted menu">
          <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              >
              <NavLink exact to="/" className="ui item" activeClassName="ui active item">
              Home
              </NavLink>
          </Menu.Item>
          <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              <NavLink activeClassName="ui active item" className="ui item" to="/about">
              About
              </NavLink>
            </Menu.Item>
          <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            >
            {this.props.user ? (
              <span className="ui item">Logged in as: {this.props.user.name}</span>
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
            </Menu.Item>
      </div>
      );
  }
};

export default NavBar;
