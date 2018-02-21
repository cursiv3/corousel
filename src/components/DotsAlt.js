import React from "react";

const DotsAlt = props => {
  return (
    <div className="dotsAltRow">
      <p className="dotsAltP">{props.data.activeDot + 1}</p>
      <hr
        style={{
          width: "20px",
          left: "calc(100% - 25px)",
          position: "absolute"
        }}
      />
      <br />
      <p className="dotsAltP">{props.data.imageList.length}</p>
    </div>
  );
};

export default DotsAlt;
