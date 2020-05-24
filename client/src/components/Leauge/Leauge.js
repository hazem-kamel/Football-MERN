import React, { useEffect } from "react";
import { connect } from "react-redux";
import Matches from "../matches/Matches";
import Table from "../Table/Table";
import TopScorer from "../TopScorer/TopScorer";
import { useLocation } from "react-router-dom";
import "./League.css";
const League = (props) => {
  const leagueToRender = useLocation().pathname.slice(8);
  const leaguesNames = [
    {
      name: "English Premier League",
      ID: "PL",
      info:
        "The Premier League, often referred to as the English Premier League or the EPL outside England, is the top level of the English football league system. Contested by 20 clubs. Seasons run from August to May with each team playing 38 matches (playing all 19 other teams both home and away).Most games are played on Saturday and Sunday afternoons.The competition was founded as the FA Premier League on 20 February 1992 following the decision of clubs in the Football League First Division to break away from the Football League, founded in 1888",
      img:
        "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    },
    {
      name: "Spanish LaLiga",
      ID: "PD",
      info:
        "The Campeonato Nacional de Liga de Primera División,commonly known as La Liga,is the men's top professional football division of the Spanish football league system, and is contested by 20 teams.La Liga is one of the most popular professional sports leagues in the world, with an average attendance of 26,933 for league matches in the 2018–19 season.According to UEFA's league coefficient, La Liga has been the top league in Europe over the last five years and has led Europe for more years (22) than any other country",
      img: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    },
    {
      name: "German Bundesliga",
      ID: "BL1",
      info:
        "The Bundesliga 'Federal League', sometimes referred to as die Fußball-Bundesliga. Bundesliga is a professional association football league in Germany and the football league with the highest average stadium attendance worldwide. At the top of the German football league system, the Bundesliga is Germany's primary football competition. The Bundesliga comprises 18 teams. Bundesliga. Seasons run from August to May. Most games are played on Saturdays and Sundays, with a few games played on weekdays.The Bundesliga was founded in 1962 in Dortmund",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    },
    {
      name: "Italian Serie A",
      ID: "SA",
      info:
        "Serie A , is a professional league competition for football clubs located at the top of the Italian football league system and the winner is awarded the Scudetto and the Coppa Campioni d'Italia. It has been operating as a round-robin tournament for over ninety years since the 1929–30 season.Serie A is regarded as one of the best football leagues in the world and it is often depicted as the most tactical national league.Serie A was the world's second-strongest national league in 2014 according to IFFHS.Serie A led the UEFA ranking from 1986 to 1988 and from 1990 to 1999.",
      img: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
  ];

  let info = leaguesNames.find((league) => league.ID === leagueToRender);
  return (
    <div className="league">
      <div className="league-header">
        <div className="info">
          <h2 className="Name">{info.name}</h2>
          <h4 className="info-parag">{info.info}</h4>
        </div>
        <img className="flag" src={info.img} alt="flag"></img>
      </div>
      <h5>Check Matches Dates and Results</h5>
      <Matches />
      <h5 className="table-title">Check League Table and points</h5>
      <Table />
      <h5>Check Top Scorers</h5>
      <TopScorer />
    </div>
  );
};
export default connect()(League);
