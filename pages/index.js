import Head from "next/head";
import styles from "../styles/Home.module.css";
import GridLayout from "../components/GridLayout";
import MainLayout from "../components/MainVoiceLayout";
import Box from "../components/Box";

import { useState, useEffect } from "react";

const Home = () => {
  const [boxCount, setBoxCount] = useState(0);
  const [boxes, setBoxes] = useState([]);
  const [mainLayout, setMainLayout] = useState(false);

  // Handlers
  const mainLayoutHandler = () => {
    const checkMainLayout = document.getElementById("mainLayout");
    setMainLayout(checkMainLayout.checked);
  };

  const addBoxHandler = () => {
    const voice = Math.round(Math.random(0, 1));
    //const voice = 1;
    boxes.push(<Box key={boxCount} number={boxCount} voice={voice}></Box>);
    setBoxes(boxes);
    setBoxCount(boxCount + 1);
    console.log("boxes :>> ", boxes);
    console.log("boxCount :>> ", boxCount);
  };

  const clearDataHandler = () => {
    setBoxes([]); // ???
    setBoxCount(0);
    console.clear();
  };

  return (
    <div>
      <Head>
        <title>Layout Cards</title>
        <meta name="description" content="Show your face, in more pixels." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mainLayout ? (
        <MainLayout boxes={boxes} />
      ) : (
        <GridLayout boxes={boxes} boxCount={boxCount} />
      )}

      <div className={styles.footer}>
        <div>
          <label style={{ color: "black", paddingRight: "10px" }}>
            <input
              type="checkbox"
              id="mainLayout"
              onClick={mainLayoutHandler}
            />
            Main Voice Layout
          </label>
        </div>
        <button type="button" onClick={addBoxHandler}>
          Add Box
        </button>
        <button type="button" onClick={clearDataHandler}>
          Clear Data
        </button>
      </div>
    </div>
  );
};

export default Home;
