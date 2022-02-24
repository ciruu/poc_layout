import Head from "next/head";
import styles from "../styles/Home.module.css";
import GridLayout from "../components/GridLayout";
import MainLayout from "../components/MainVoiceLayout";
import Box from "../components/Box";

import { useState, useEffect } from "react";

/*
  Secretos
  
*/
export const getServerSideProps = (ctx) => {
  return {
    props: {
      p1: "hola",
      p2: "chao",
    },
  };
};

const Home = ({ p1, p2 }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "80%", height: "90vh" }}>{p1}</div>
      <div style={{ width: "20%", height: "90vh" }}>{p2}</div>
    </div>
  );
};

export default Home;
