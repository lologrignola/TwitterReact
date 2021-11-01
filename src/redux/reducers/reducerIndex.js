import tweetsReducer from "./tweetsReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: usersReducer,
  tweets: tweetsReducer,
});

export default allReducers;
