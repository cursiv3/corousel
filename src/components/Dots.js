import React from "react";

const Dots = props => {
  var data = props.state;
  return (
    <div className="dotsRow">
      <div
        className="dotsCenterer"
        style={{ width: `${data.imageList.length * 20}px` }}
      >
        {data.imageList.map((val, idx) => {
          return idx === data.activeDot ? (
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
