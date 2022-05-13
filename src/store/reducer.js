import { combineReducers } from "redux";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
});

export default cReducer;
