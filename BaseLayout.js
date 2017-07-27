import React, { Component } from "react";
import { Link } from "react-router-dom";

let linkStyle = {
  listStyle: "none",
  display: "flex",
  marginLeft: 100
};
let list = {
  marginRight: 100,
  fontFamily: "Arizonia",
  fontSize: "180%"
};
let listItem = {
  color: "Pink",
  textDecoration: "none"
};
let background = {
  backgroundColor: "black"
};

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <ul style={linkStyle} className="nav navbar-nav">
            <li style={list}>
              <Link style={listItem} to="/">Home</Link>
            </li>
            <li style={list}>
              <Link style={listItem} to="/about">About</Link>
            </li>
            <li style={list}>
              <Link style={listItem} to="/portfolio">Portfolio</Link>
            </li>
            <li style={list}>
              <Link style={listItem} activeClassName="selected" to="">
                <i className="fa fa-facebook" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
        {this.props.children}

      </div>
    );
  }
}

export default BaseLayout;
