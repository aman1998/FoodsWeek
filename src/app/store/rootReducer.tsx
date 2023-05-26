import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../../features/Auth/store/reducers";
import userReducer from "../../features/Profile/store/reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
