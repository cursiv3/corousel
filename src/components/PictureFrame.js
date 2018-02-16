import React from "react";
import Dots from "./Dots";
import "./App.css";

const PictureFrame = props => {
  let data = props.state;
  return (
    <div className="carouselContainer">
      <img
        data-id={"entering-image"}
        className={data.enterMove}
        src={data.imageList[data.nextIdx]}
        alt="carousel entering"
      />
      <img
        data-id={"exiting-image"}
        className={data.exitMove}
        src={data.imageList[data.currentIdx]}
        alt="carousel exiting"
      />
      <Dots data={data.activeDot} />

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
