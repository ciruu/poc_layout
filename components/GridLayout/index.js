const GridLayout = ({ boxes, Box }) => {
  const TEMPLATE_COLUMNS = [
    "100%",
    "100%",
    "50%",
    "50%",
    "50%",
    "33.33333333%",
  ];

  // Styles
  const containerStyle = {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "90vh",
    border: "white solid 5px",
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(0, ${
      TEMPLATE_COLUMNS[boxes.length] ||
      TEMPLATE_COLUMNS[TEMPLATE_COLUMNS.length - 1]
    }))`,
  };

  return (
    <div style={containerStyle}>
      {boxes.map((box, i) => (
        <Box key={i} number={box.number} voice={box.voice} />
      ))}
    </div>
  );
};

export default GridLayout;
