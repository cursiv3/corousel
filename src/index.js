import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Carousel height={500} width={500} />,
  document.getElementById("root")
);
registerServiceWorker();
