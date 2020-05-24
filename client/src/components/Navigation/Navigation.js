import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import League from "../Leauge/Leauge";
import Predict from "../PredictComments/Predict";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/league/:leagueID" component={League}></Route>
        <Route exact path="/login" component={SignIn}></Route>
        <Route exact path="/register" component={SignUp}></Route>
        <Route exact path="/comments/:match" component={Predict}></Route>
      </Switch>
    </Router>
  );
};
export default Navigation;
