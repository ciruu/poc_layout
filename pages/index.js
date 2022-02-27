import Head from "next/head";
import styles from "../styles/Home.module.css";
import GridLayout from "../components/GridLayout";
import MainLayout from "../components/MainVoiceLayout";
import Box from "../components/Box";

import { useState } from "react";

const Home = () => {
  const [boxes, setBoxes] = useState([]);
  const [mainLayout, setMainLayout] = useState(false);

  // Handlers
  const mainLayoutHandler = (e) => {
    setMainLayout(e.target.checked);
  };

  const addBoxHandler = () => {
    const voice = Math.round(Math.random(0, 1));
    const number = btoa(Math.random().toString()).substr(10, 2);
    setBoxes((prev) => [...prev, { voice, number }]);
  };

  const clearDataHandler = () => {
    setBoxes([]);
  };

  return (
    <div>
      <Head>
        <title>Layout Cards</title>
        <meta name="description" content="Show your face, in more pixels." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mainLayout ? (
        <MainLayout boxes={boxes} Box={Box} />
      ) : (
        <GridLayout boxes={boxes} Box={Box} />
      )}

      <div className={styles.footer}>
        <div>
          <label style={{ color: "black", paddingRight: "10px" }}>
            <input
              type="checkbox"
              id="mainLayout"
              onChange={mainLayoutHandler}
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
