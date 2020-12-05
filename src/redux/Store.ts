import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/root";
import rootSaga from "./saga/saga";
import IState from "./types/IState";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export function makeStore(context: Context) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  (store as any).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export const wrapper = createWrapper<IState>(makeStore, { debug: true });
