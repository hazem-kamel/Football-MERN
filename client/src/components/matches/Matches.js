import React, { useState, useEffect } from "react";
import { fetchMatchesAction } from "../../Redux/actions/Actions";
import { useLocation } from "react-router-dom";
import "./Matches.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Matches = (props) => {
  const [matches, matchesDate] = useState();
  const history = useHistory();

  useEffect(() => {
    props.getLeagueTable(leagueToRender);
  }, []);
  var d = new Date();
  const leagueToRender = useLocation().pathname.slice(8);
  if (typeof props.leagueMatches[0] === "undefined") {
    return null;
  } else {
    var allMatches = props.leagueMatches;
  }
  return (
    <div className="matches">
      <div className="nav-dates">
        <button onClick={() => matchesDate(("0" + d.getDate()).slice(-2))}>
          Today
        </button>
        <button
          onClick={() => matchesDate(("0" + (d.getDate() + 1)).slice(-2))}
        >
          {d.getDate() + 1} - {d.getMonth() + 1} -{d.getUTCFullYear()}
        </button>
        <button
          onClick={() => matchesDate(("0" + (d.getDate() + 2)).slice(-2))}
        >
          {d.getDate() + 2} - {d.getMonth() + 1} -{d.getUTCFullYear()}
        </button>
        <button
          onClick={() => matchesDate(("0" + (d.getDate() + 3)).slice(-2))}
        >
          {d.getDate() + 3} - {d.getMonth() + 1} -{d.getUTCFullYear()}
        </button>
        <button
          onClick={() => matchesDate(("0" + (d.getDate() + 4)).slice(-2))}
        >
          {d.getDate() + 4} - {d.getMonth() + 1} -{d.getUTCFullYear()}
        </button>
        <button
          onClick={() => matchesDate(("0" + (d.getDate() + 5)).slice(-2))}
        >
          {d.getDate() + 5} - {d.getMonth() + 1} -{d.getUTCFullYear()}
        </button>
        <button
          onClick={() => matchesDate(("0" + (d.getDate() + 6)).slice(-2))}
        >
          {d.getDate() + 6} - {d.getMonth() + 1} -{d.getUTCFullYear()}
        </button>
      </div>
      {allMatches
        .filter((match) => match.utcDate.slice(8, 10) === matches)
        .map((match) => (
          <div key={match.id} className="matches-cards">
            <div className="teams">
              <p className="team-one">{match.homeTeam.name}</p>
              <p className="team-two">{match.awayTeam.name}</p>
            </div>
            <p className="status">{match.status}</p>
            <p className="score">{match.score.fulltime}</p>
            <p className="time">{match.utcDate}</p>
            <button
              className="predict"
              onClick={() => {
                history.push(`/comments/${match.id}`);
              }}
            >
              Predict
            </button>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  leagueMatches: state.Matches,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getLeagueTable: (leagueToRender) =>
      dispatch(fetchMatchesAction(leagueToRender)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Matches);
