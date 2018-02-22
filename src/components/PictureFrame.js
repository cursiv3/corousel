import React from "react";
import Dots from "./Dots";
import DotsAlt from "./DotsAlt";
import "./carousel.css";

const PictureFrame = props => {
  let data = props.state;

  const legendHandler = () => {
    if (data.legendType === "numbers") {
      return <DotsAlt data={data} />;
    } else if (data.imageList.length > 15) {
      return <DotsAlt data={data} />;
    } else {
      return <Dots data={data} />;
    }
  };

  return (
    <div
      className="corouselContainer"
      style={{ width: data.width, height: data.height }}
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
        className="corouselLeft"
        onClick={evt => {
          if (data.isActive) {
            props.carouselClick(evt);
          }
        }}
      >
        <div className="corouselLeftButton">
          <div className="corouselLeftIcon1" />
          <div className="corouselLeftIcon2" />
        </div>
      </div>

      <div
        className="corouselRight"
        onClick={evt => {
          if (data.isActive) {
            props.carouselClick(evt);
          }
        }}
      >
        <div className="corouselRightButton">
          <div className="corouselRightIcon1" />
          <div className="corouselRightIcon2" />
        </div>
      </div>
    </div>
  );
};

export default PictureFrame;
