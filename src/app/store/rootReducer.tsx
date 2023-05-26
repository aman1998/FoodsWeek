import { combineReducers } from "@reduxjs/toolkit";

import singleDayReducer from "../../containers/SingleDayContainer/store/reducers";
import stocksReducer from "../../containers/DaysContainer/store/reducers";
import authReducer from "../../features/Auth/store/reducers";
import userReducer from "../../containers/ProfileContainer/store/reducers";

const rootReducer = combineReducers({
  stocks: stocksReducer,
  singleDay: singleDayReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
