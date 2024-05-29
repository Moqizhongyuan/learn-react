import { thunk } from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

// 正常情况下store.dispatch(object)
// 想要派发函数 store.dispatch(function)

// redux-devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
