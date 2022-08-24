import React from "react";
import DailyInfoCard from "../Components/DailyInfoCard";
import Header from "../Components/Header";
import style from '../Style/home.module.css'

function Home() {
  return (
    <>
      <Header />

      <DailyInfoCard/>
    </>
  );
}

export default Home;
