import React from "react";

const DotsAlt = props => {
  return (
    <div className="dotsAltRow">
      <p className="dotsAltP">{props.activeDot + 1}</p>
      <hr
        style={{
          width: "20px",
          left: "calc(100% - 25px)",
          position: "absolute"
        }}
      />
      <br />
      <p className="dotsAltP">{props.imageList.length}</p>
    </div>
  );
};

export default DotsAlt;
