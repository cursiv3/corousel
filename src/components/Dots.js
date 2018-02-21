import React from "react";
import imageList from "./imageList";

const Dots = props => {
  return (
    <div className="dots">
      {imageList.map((val, idx) => {
        return idx === props.data ? (
          <div
            key={idx}
            style={{
              width: "10px",
              height: "10px",
              margin: "0 5px 0 5px",
              borderRadius: "100%",
              display: "inline-block",
              backgroundColor: "red",
              boxShadow: "0 0 5px 2px rgba(255,0,0, 0.6)"
            }}
          />
        ) : (
            <div
              key={idx}
              style={{
                width: "10px",
                height: "10px",
                margin: "0 5px 0 5px",
                borderRadius: "100%",
                display: "inline-block",
                backgroundColor: "white"
              }}
            />
          );
      })}
    </div>
  );
};

export default Dots;
