import { useState, useEffect } from "react";

const MainVoiceLayout = (props) => {
  const boxesProps = props.boxes;
  console.log("boxesProps :>> ", boxesProps);
  const voiceBox = boxesProps.find((box) => box.props.voice === 1);
  const noVoiceBoxes = boxesProps.filter((box) => box.props.voice !== 1);

  const [boxes, setBoxes] = useState(boxesProps);

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

  return (
    <div style={mainVoiceLayoutStyle}>
      <div style={mainVoiceStyle}>{voiceBox}</div>
      <div style={userStyle}>{noVoiceBoxes}</div>
    </div>
  );
};

export default MainVoiceLayout;
