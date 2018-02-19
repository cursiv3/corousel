import React from "react";
import imageList from "./imageList";
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
      height: 400,
      width: 600,
      legendType: "dots",
      imageList: imageList,
      fwdEnter: "queuedImage",
      backEnter: "queuedImage",
      exitMove: "imageInit",
      backIdx: imageList.length - 1,
      currentIdx: 0,
      forwardIdx: 1,
      activeDot: 0,
      isActive: true
    };

    this.carouselClick = this.carouselClick.bind(this);
    this.carouselApi = this.carouselApi.bind(this);
  }

  carouselClick(evt) {
    // timeout is same length as CSS slide animation
    // so the image sliding out changes it's background
    // AFTER it's out of view
    let next, back, current;
    if (evt.target.className[0] === "r") {
      // check if we're at end of array, if so show 0 again
      if (this.state.currentIdx === this.state.imageList.length - 1) {
        next = 1;
        current = 0;
        back = imageList.length - 1;

        this.setState(moveToStart(this.state));
      } else {
        back = this.state.currentIdx;
        current = this.state.forwardIdx;

        if (this.state.forwardIdx === imageList.length - 1) {
          next = 0;
        } else {
          next = this.state.forwardIdx + 1;
        }

        this.setState(forwardClick(this.state));
      }
    } else if (evt.target.className[0] === "l") {
      // check if we're at start of image array, if so show image at arr[n]
      if (this.state.currentIdx === 0) {
        next = 0;
        current = imageList.length - 1;
        back = imageList.length - 2;

        this.setState(moveToEnd(this.state));
      } else {
        next = this.state.currentIdx;
        current = this.state.currentIdx - 1;

        if (this.state.backIdx === 0) {
          back = imageList.length - 1;
        } else {
          back = this.state.backIdx - 1;
        }

        this.setState(backwardClick(this.state));
      }
    }
    // reset shared properties
    // same length as css transition
    setTimeout(() => {
      this.setState(
        Object.assign({}, this.state, {
          backEnter: "queuedImage",
          fwdEnter: "queuedImage",
          exitMove: "imageInit",
          isActive: true,
          forwardIdx: next,
          currentIdx: current,
          backIdx: back
        })
      );
    }, 1000);
  }

  carouselApi() {
    let height, width, legend;
    this.props.height
      ? (height = this.props.height)
      : (height = this.state.height);

    this.props.width ? (width = this.props.width) : (width = this.state.width);

    this.props.legend
      ? (legend = this.props.legend)
      : (legend = this.state.legendType);

    this.setState(
      Object.assign({}, this.state, {
        height: height,
        width: width,
        legendType: legend
      })
    );
  }

  componentWillMount() {
    this.carouselApi();
  }

  render() {
    return (
      <PictureFrame state={this.state} carouselClick={this.carouselClick} />
    );
  }
}

export default Carousel;
