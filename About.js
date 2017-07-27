import React, { Component } from "react";
import { Link } from "react-router-dom";
let headerStyle = {
  textAlign: "center",
  height: "600px",
  backgroundImage: "url(./images/header2.jpeg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
  textShadow: "1px 1px 2px black",
  fontFamily: "decorative"
};

let textStyle = {
  color: "pink",
  fontFamily: "Arizonia",
  fontSize: 20
};

let listItem = {
  color: "Pink"
};
let container = {
  marginRight: 300,
  marginLeft: 300
};

class About extends Component {
  render() {
    return (
      <div style={container}>
        <h1 style={textStyle}> Beyonce Knowles</h1>
        <img src="http://www.hellomagazine.com/imagenes/profiles/beyonce-knowles/5783-Beyonce-Knowles.jpg" />
        <p style={textStyle}>
          Beyonce is arguably the most talented artist in the world. She has won numerous awards and is revered as the greatest performer of all time. Dont believe me? Click
          {" "}
          <Link style={listItem} to="/portfolio">Here</Link>
          {" "}
          to see her in action.
        </p>

      </div>
    );
  }
}

export default About;
