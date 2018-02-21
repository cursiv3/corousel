import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel";
import imageList from "./components/imageList";

var tester = [
  "https://cdn.pixabay.com/photo/2018/01/28/14/41/bird-3113835_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/01/31/16/27/sea-3121435_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/01/19/09/31/kirkjufell-3092048_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/02/07/14/27/pension-3137209_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/11/15/20/17/beach-2952391_960_720.jpg"
];

ReactDOM.render(<Carousel images={tester} />, document.getElementById("root"));
