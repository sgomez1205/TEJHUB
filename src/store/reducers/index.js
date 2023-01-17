
import { combineReducers } from "redux";
import playerReducer from "./player";
import uiReducer from "./ui";


const allReducers = combineReducers({
  player: playerReducer,
  ui: uiReducer
});

export default allReducers;