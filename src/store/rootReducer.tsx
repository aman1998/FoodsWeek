import { combineReducers } from "@reduxjs/toolkit";

import singleDayReducer from "../containers/SingleDayContainer/store/reducers";
import stocksReducer from "../containers/DaysContainer/store/reducers";
import authReducer from "../containers/AuthContainer/store/reducers";
import userReducer from "../containers/UserInfoContainer/store/reducers";

const rootReducer = combineReducers({
  stocks: stocksReducer,
  singleDay: singleDayReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
