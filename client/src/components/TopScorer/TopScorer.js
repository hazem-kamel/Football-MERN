import React, { useState, useEffect } from "react";
import { fetchTopScorersAction } from "../../Redux/actions/Actions";
import "./TopScorer.css";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const TopScorer = (props) => {
  const [teamID, setTeamID] = useState("");

  console.log(teamID);
  useEffect(() => {
    props.getTopScorers(leagueToRender);
  }, []);
  const leagueToRender = useLocation().pathname.slice(8);
  if (typeof props.topScorers.scorers === "undefined") {
    return null;
  } else {
    var TopScorers = props.topScorers.scorers;
  }
  return (
    <div className="section">
      <div className="top-players">
        {TopScorers.map((player) => {
          return (
            <div className="player-card" key={player.key}>
              <div className="info">
                <h3>Name:{player.player.name}</h3>
                <p>Nationality:{player.player.nationality}</p>
                <p>Position:{player.player.position}</p>
                <p>Team:{player.team.name}</p>
                <p>Goals:{player.numberOfGoals}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  topScorers: state.Scorers,
  team: state.Team,
});
const mapDispatchToProps = (dispatch) => ({
  getTopScorers: (leagueToRender) =>
    dispatch(fetchTopScorersAction(leagueToRender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopScorer);
