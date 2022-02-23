import Head from "next/head";
import styles from "../styles/Home.module.css";
import Box from "../components/Box";

import { useState, useEffect } from "react";

const Home = () => {
  const [idBox, setIdBox] = useState(0);
  const [Boxes, setBoxes] = useState([]);
  const boxes = [];

  const addBoxHandler = () => {
    setIdBox(idBox + 1);
    Boxes.push(<Box key={idBox}></Box>);
    setBoxes(Boxes);
  };

  const clearDataHandler = () => {
    setIdBox(0);
    setBoxes([]);
  };

  return (
    <div>
      <Head>
        <title>Layout Cards</title>
        <meta name="description" content="Show your face, in more pixels." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>{Boxes}</div>
      <div className={styles.footer}>
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
