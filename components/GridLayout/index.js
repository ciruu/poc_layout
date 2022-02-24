import { useState, useEffect } from "react";

const GridLayout = (props) => {
  const boxesProps = props.boxes;
  const boxCountProps = props.boxCount;

  const [templateColumns, setTemplateColumns] = useState("100%");
  const [boxCount, setIdBox] = useState(boxCountProps);
  const [boxes, setBoxes] = useState(boxesProps);

  const TEMPLATE_COLUMNS = {
    1: "100%",
    2: "50%",
    3: "50%",
    5: "33.33333333%",
    6: "33.33333333%",
    7: "33.33333333%",
    8: "33.33333333%",
    9: "33.33333333%",
  };

  // Effects
  useEffect(() => {
    console.log("useEffect");
    setTemplateColumns(TEMPLATE_COLUMNS[boxCountProps]);
    setBoxes(boxes);
  });

  // Styles
  const containerStyle = {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "90vh",
    border: "white solid 5px",
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(0, ${templateColumns})`,
  };

  return <div style={containerStyle}>{boxes}</div>;
};

export default GridLayout;
