import createSagaMiddleware from "redux-saga";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/src/getDefaultMiddleware";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
