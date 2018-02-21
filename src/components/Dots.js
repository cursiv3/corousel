import React from "react";
import imageList from "./imageList";

const Dots = props => {
  return (
    <div className="dotsRow">
      <div
        className="dotsCenterer"
        style={{ width: imageList.length * 20 + "px" }}
      >
        {imageList.map((val, idx) => {
          return idx === props.activeDot ? (
            <div
              key={idx}
              className="dots"
              style={{
                border: "none",
                backgroundColor: "red",
                boxShadow: "0 0 5px 2px rgba(255,0,0, 0.6)"
              }}
            />
          ) : (
            <div
              key={idx}
              className="dots"
              style={{
                backgroundColor: "white"
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dots;
