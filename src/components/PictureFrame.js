import React from "react";
import Dots from "./Dots";
import DotsAlt from "./DotsAlt";
import "./carousel.css";

const PictureFrame = props => {
  let data = props.state;

  const legendHandler = () => {
    if (data.legendType === "numbers") {
      return <DotsAlt state={data} />;
    } else if (data.imageList.length > 15) {
      return <DotsAlt state={data} />;
    } else {
      return <Dots state={data} />;
    }
  };

  return (
    <div
      className="carouselContainer"
      style={{ width: `${data.width}px`, height: `${data.height}px` }}
    >
      <img
        data-id={"backward-image"}
        className={data.backEnter}
        src={data.imageList[data.backIdx]}
        alt="carousel entering"
      />
      <img
        data-id={"current-image"}
        className={data.exitMove}
        src={data.imageList[data.currentIdx]}
        alt="carousel exiting"
      />
      <img
        data-id={"forward-image"}
        className={data.fwdEnter}
        src={data.imageList[data.forwardIdx]}
        alt="carousel exiting"
      />

      {legendHandler()}

      <div
        className="left"
        onClick={evt => {
          if (data.isActive) {
            props.carouselClick(evt);
          }
        }}
      >
        <div className="leftButton">
          <div className="leftIcon1" />
          <div className="leftIcon2" />
        </div>
      </div>

      <div
        className="right"
        onClick={evt => {
          if (data.isActive) {
            props.carouselClick(evt);
          }
        }}
      >
        <div className="rightButton">
          <div className="rightIcon1" />
          <div className="rightIcon2" />
        </div>
      </div>
    </div>
  );
};

export default PictureFrame;
