import { combineReducers } from "@reduxjs/toolkit";

import singleDayReducer from "../../pages/SingleDayPage/SingleDayContainer/store/reducers";
import stocksReducer from "../../pages/DaysPage/DaysContainer/store/reducers";
import authReducer from "../../features/Auth/store/reducers";
import userReducer from "../../pages/ProfilePage/ProfileContainer/store/reducers";

const rootReducer = combineReducers({
  stocks: stocksReducer,
  singleDay: singleDayReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
