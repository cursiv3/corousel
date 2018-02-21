import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel";

var tester = [
  "https://kids.nationalgeographic.com/content/dam/kids/photos/States/A-I/hawaii-beach.ngsversion.1486588699914.adapt.1900.1.png",
  "https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2017/07/20170730/oregon-road-trip-1.jpg",
  "http://cdn.akamai.steamstatic.com/steam/apps/730/ss_ccc4ce6edd4c454b6ce7b0757e633b63aa93921d.1920x1080.jpg?t=1513742714",
  "https://i.ytimg.com/vi/XPJC7A6Gqtk/maxresdefault.jpg"
];

ReactDOM.render(<Carousel images={tester} />, document.getElementById("root"));
