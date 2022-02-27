import { useState, useEffect } from "react";

const MainVoiceLayout = ({ boxes, Box }) => {
  const mainVoiceLayoutStyle = {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "90vh",
    //border: "purple solid 5px",
    display: "flex",
  };

  const mainVoiceStyle = {
    width: "80%",
    border: "purple solid 5px",
    display: "grid",
  };

  const userStyle = {
    width: "20%",
    border: "purple solid 5px",
    display: "grid",
  };

  console.log(boxes);
  console.log("In main layout: ", boxes);
  return (
    <div style={mainVoiceLayoutStyle}>
      <div style={mainVoiceStyle}>
        {boxes
          .filter((box) => box.voice)
          .map((box, i) => (
            <Box key={i} number={box.number} voice={box.voice} />
          ))}
      </div>
      <div style={userStyle}>
        {boxes
          .filter((box) => !box.voice)
          .map((box, i) => (
            <Box key={i} number={box.number} voice={box.voice} />
          ))}
      </div>
    </div>
  );
};

export default MainVoiceLayout;
