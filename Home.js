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
  color: "pink"
};

class Home extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1 style={textStyle}>BEYONCE KNOWLES</h1>
        <h2 style={textStyle}>The Queen Bey</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOWH7uDjiF1zXfIvFq4qwleeLSczjW0T5KORJZkR1ZnGJAAbk" />
        <br />
        <Link to="about" style={textStyle}>LEARN MORE</Link>
      </div>
    );
  }
}

export default Home;
