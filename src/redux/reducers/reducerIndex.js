import tweetsReducer from "./tweetsReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: userReducer,
  tweets: tweetsReducer,
});

export default allReducers;
