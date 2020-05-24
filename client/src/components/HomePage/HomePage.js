import React from "react";
import "./HomePage.css";
import Carousel from "../Carousel/Carousel";
import LeaguesDivision from "../LeaguesDivison/leaguesDivison";
const HomePage = () => {
  return (
    <div>
      <div className="Upper-home">
        <Carousel />
        <h2>KINGFUT YOUR BEST SOCCER WEBSITE</h2>
      </div>
      <LeaguesDivision />
    </div>
  );
};
export default HomePage;
