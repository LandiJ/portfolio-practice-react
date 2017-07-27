import React, { Component } from "react";
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
let imageStyle = {};
class Portfolio extends Component {
  render() {
    return (
      <div>

        <h1>Portfolio</h1>
        <img
          style={imageStyle}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEILOD-FhV6HNmyH_aF3QlX4GOZTqetRGghWFOlia4oJ6ZyG3"
        />
        <img
          style={imageStyle}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScf6Q9Q7woPr8TRZp4FoldjzdYXbffOgYj2K25NAiifReaYMPT"
        />
        <img
          style={imageStyle}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJFwqq6bmZtlg3zYigEs54EdaxoYmDdpOX48L7W0YZTxCE4wI"
        />
        <img
          style={imageStyle}
          src="http://i2.cdn.cnn.com/cnnnext/dam/assets/150219090223-01-beyonce-0219-exlarge-169.jpg"
        />
        <img
          style={imageStyle}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEILOD-FhV6HNmyH_aF3QlX4GOZTqetRGghWFOlia4oJ6ZyG3"
        />

      </div>
    );
  }
}

export default Portfolio;
