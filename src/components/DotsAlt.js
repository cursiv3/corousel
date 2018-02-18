import React from "react";
import imageList from "./imageList";

const DotsAlt = props => {
  return (
    <div className="dotsAltRow">
      <p className="dotsAltP">{props.activeDot + 1}</p>
      <hr
        style={{
          width: "20px",
          left: "calc(100% - 30px)",
          position: "absolute"
        }}
      />
      <br />
      <p className="dotsAltP">{imageList.length}</p>
    </div>
  );
};

export default DotsAlt;
