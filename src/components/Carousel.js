import React from "react";
import { imageList } from "./imageList";
import PictureFrame from "./PictureFrame";
import {
  forwardClick,
  backwardClick,
  moveToStart,
  moveToEnd
} from "./slideActions";

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      imageList: imageList,
      enterMove: "imageInit",
      exitMove: "imageInit",
      currentIdx: 0,
      nextIdx: "",
      activeDot: 0,
      isActive: true
    };

    this.carouselClick = this.carouselClick.bind(this);
  }

  carouselClick(evt) {
    // timeout is same length as CSS slide animation
    // so the image sliding out changes it's background
    // AFTER it's out of view

    if (evt.target.className[0] === "r") {
      // check if we're at end of array, if so show 0 again
      if (this.state.currentIdx === this.state.imageList.length - 1) {
        this.setState(moveToStart(this.state));
      } else {
        this.setState(forwardClick(this.state));
      }
    } else if (evt.target.className[0] === "l") {
      // check if we're at start of image array, if so show image at arr[n]
      if (this.state.currentIdx === 0) {
        this.setState(moveToEnd(this.state));
      } else {
        this.setState(backwardClick(this.state));
      }
    }
    // reset shared properties
    // same length as css transition
    setTimeout(() => {
      this.setState(
        Object.assign({}, this.state, {
          enterMove: "imageInit",
          exitMove: "imageInit",
          isActive: true,
          currentIdx: this.state.nextIdx
        })
      );
    }, 1000);
  }

  render() {
    return (
      <PictureFrame state={this.state} carouselClick={this.carouselClick} />
    );
  }
}

export default Carousel;
