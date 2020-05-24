import Axios from "axios";
import {
  fetchMatches,
  fetchLeagueTable,
  fetchTopScorers,
  registerNewUser,
  loginRequest,
  addComment,
  getComments,
} from "./ActionTypes";

export function fetchMatchesAction(league) {
  var date = new Date();
  var day = ("0" + date.getDate()).slice(-2);
  var nextDays = ("0" + (date.getDate() + 6)).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var url = `https://api.football-data.org/v2/competitions/${league}/matches?dateFrom=2020-${month}-${day}&dateTo=2020-${month}-${nextDays}`;
  var token = "52c8d88969d84ac9b17edb956eea33af";
  var obj = {
    headers: { "X-Auth-Token": token },
  };
  return (dispatch) => {
    Axios.get(url, obj)
      .then((res) => {
        dispatch({
          type: fetchMatches,
          payload: res.data.matches,
        });
      })
      .catch((e) => {
        console.log("Cant fetch ", e);
      });
  };
}

export function fetchLeagueTableAction(league) {
  var url = `https://api.football-data.org/v2/competitions/${league}/standings`;
  var token = "52c8d88969d84ac9b17edb956eea33af";
  var obj = {
    headers: { "X-Auth-Token": token },
  };
  return (dispatch) => {
    Axios.get(url, obj)
      .then((res) => {
        dispatch({
          type: fetchLeagueTable,
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log("Cant fetch ", e);
      });
  };
}

export function fetchTopScorersAction(league) {
  var url = `https://api.football-data.org/v2/competitions/${league}/scorers?limit=6`;
  var token = "52c8d88969d84ac9b17edb956eea33af";
  var obj = {
    headers: { "X-Auth-Token": token },
  };
  return (dispatch) => {
    Axios.get(url, obj)
      .then((res) => {
        dispatch({
          type: fetchTopScorers,
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log("Cant fetch ", e);
      });
  };
}
export function registerNewUserAction(user) {
  return (dispatch) => {
    Axios.post(
      "/api/register",
      {
        username: user.username,
        email: user.email,
        password: user.password,
        gender: user.gender,
      },
      {
        withCredentials: true,
        crossdomain: true,
      }
    )
      .then((res) => {
        dispatch({
          type: registerNewUser,
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log("Cant Register ", e);
      });
  };
}

export function loginUserAction(user) {
  return (dispatch) => {
    Axios.post(
      "/api/login",

      {
        username: user.email,
        password: user.password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
        mode: "cors",
      }
    )
      .then((res) => {
        dispatch({
          type: loginRequest,
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log("Cant Login ", e);
      });
  };
}
export function addCommentAction(comment) {
  return (dispatch) => {
    Axios.post(
      "/api/comment",

      {
        match: comment.match,
        username: comment.username,
        comment: comment.comment,
      },
      {
        headers: {
          "Access-Control-Allow-Origin":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
        mode: "cors",
      }
    )
      .then((res) => {
        dispatch({
          type: addComment,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("Can't post comment", err);
      });
  };
}
export function getCommentsAction(match) {
  return (dispatch) => {
    Axios.post(
      "/api/comments",
      {
        match: match,
      },
      {
        headers: {
          "Access-Control-Allow-Origin":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
        mode: "cors",
      }
    )
      .then((res) => {
        dispatch({
          type: getComments,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("Can't post comment", err);
      });
  };
}
