import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Carousel />, document.getElementById("root"));
registerServiceWorker();
