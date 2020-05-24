import {
  fetchMatches,
  fetchLeagueTable,
  fetchTopScorers,
  registerNewUser,
  loginRequest,
  addComment,
  getComments,
} from "../actions/ActionTypes";
const initialState = {
  Matches: {},
  Table: {},
  Scorers: {},
  Team: {},
  Session: {},
  Comments: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchMatches:
      return {
        ...state,
        Matches: action.payload,
      };
    case fetchLeagueTable:
      return {
        ...state,
        Table: action.payload,
      };
    case fetchTopScorers:
      return {
        ...state,
        Scorers: action.payload,
      };

    case registerNewUser:
      return {
        Session: action.payload,
      };
    case loginRequest:
      return {
        Session: action.payload,
      };
    case addComment:
      return {};
    case getComments:
      return {
        ...state,
        Comments: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
