import React from "react";
import PictureFrame from "./PictureFrame";
import {
  forwardClick,
  backwardClick,
  moveToStart,
  moveToEnd
} from "./slideActions";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 400,
      width: 600,
      legendType: "dots",
      imageList: typeof this.props.images === "object" ? this.props.images : 0,
      fwdEnter: "corouselQueuedImage",
      backEnter: "corouselQueuedImage",
      exitMove: "corouselImageInit",
      backIdx:
        typeof this.props.images === "object"
          ? this.props.images.length - 1
          : 0,
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
    if (evt.target.className[8] === "R") {
      // check if we're at end of array, if so show 0 again
      if (this.state.currentIdx === this.state.imageList.length - 1) {
        next = 1;
        current = 0;
        back = this.state.imageList.length - 1;

        this.setState(moveToStart(this.state));
      } else {
        back = this.state.currentIdx;
        current = this.state.forwardIdx;

        if (this.state.forwardIdx === this.state.imageList.length - 1) {
          next = 0;
        } else {
          next = this.state.forwardIdx + 1;
        }

        this.setState(forwardClick(this.state));
      }
    } else if (evt.target.className[8] === "L") {
      // check if we're at start of image array, if so show image at arr[n]
      if (this.state.currentIdx === 0) {
        next = 0;
        current = this.state.imageList.length - 1;
        back = this.state.imageList.length - 2;

        this.setState(moveToEnd(this.state));
      } else {
        next = this.state.currentIdx;
        current = this.state.currentIdx - 1;

        if (this.state.backIdx === 0) {
          back = this.state.imageList.length - 1;
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
          backEnter: "corouselQueuedImage",
          fwdEnter: "corouselQueuedImage",
          exitMove: "corouselImageInit",
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
    if (this.state.imageList === 0) {
      return null;
    }

    return (
      <PictureFrame state={this.state} carouselClick={this.carouselClick} />
    );
  }
}

export default Carousel;
