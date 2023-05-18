import { combineReducers } from "@reduxjs/toolkit";

import singleDayReducer from "../containers/SingleDayContainer/store/reducers";
import stocksReducer from "../containers/DaysContainer/store/reducers";

const rootReducer = combineReducers({
  stocks: stocksReducer,
  singleDay: singleDayReducer,
});

export default rootReducer;
