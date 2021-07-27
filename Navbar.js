import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        {/*<a as={NavLink} to="/list" className="active item">*/}
        {/*  Abbrev*/}
        {/*</a>*/}
        {/*<a className="item">Reviews</a>*/}
        <Menu>
          <Menu.Item as={NavLink} to="/list" name="Abbreviation List" />
          <Menu.Item as={NavLink} to="/create" name="Create An Abbreviation" />
        </Menu>
      </div>
    );
  }
}
