import tweetsReducer from "./tweetsReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import jwtReducer from "./jwtReducer";

const allReducers = combineReducers({
  users: userReducer,
  tweets: tweetsReducer,
  jwt: jwtReducer,
});

export default allReducers;
