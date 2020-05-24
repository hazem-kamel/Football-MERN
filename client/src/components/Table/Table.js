import React, { useEffect } from "react";
import { fetchLeagueTableAction } from "../../Redux/actions/Actions";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import "./Table.css";
const Table = (props) => {
  useEffect(() => {
    props.fetchTable(leagueToRender);
  }, []);
  const leagueToRender = useLocation().pathname.slice(8);
  if (typeof props.table.standings === "undefined") {
    return null;
  } else {
    var Table = props.table.standings[0].table;
  }
  return (
    <div className="table">
      <div className="header">
        <p>Season</p>
        <p className="season">2019-2020</p>
      </div>
      <table className="table-content">
        <thead className="columns-names">
          <tr>
            <th>Position</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Win</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>PTs</th>
          </tr>
        </thead>
        <tbody>
          {Table.map((club) => (
            <tr key={Table.key}>
              <td>{club.position}</td>
              <td>
                <img src={club.team.crestUrl} alt="logo"></img>
              </td>
              <td>{club.team.name}</td>
              <td>{club.won}</td>
              <td>{club.draw}</td>
              <td>{club.lost}</td>
              <td>{club.goalsFor}</td>
              <td>{club.goalsAgainst}</td>
              <td>{club.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => ({
  table: state.Table,
});
const mapDispatchToProps = (dispatch) => ({
  fetchTable: (leagueToRender) =>
    dispatch(fetchLeagueTableAction(leagueToRender)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
