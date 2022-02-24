import { useState, useEffect } from "react";

const Box = (props) => {
  const numberProps = props.number;
  const voiceProps = props.voice;
  const [voice, setVoice] = useState(voiceProps);

  // Styles
  const boxStyle = {
    border: `${voice ? "blue" : "red"} solid 3px`,
    minWidth: 0,
    minHeight: 0,
    fontSize: "15rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
  };

  return (
    <div style={boxStyle}>
      <div>{numberProps + 1}</div>
    </div>
  );
};

export default Box;
