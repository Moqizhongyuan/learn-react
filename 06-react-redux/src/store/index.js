// import { thunk } from "redux-thunk";
// import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { log, thunk, applyMiddleware } from "./middleware";
import counterReducer from "./counter";
import homeReducer from "./home";
import userReducer from "./user";

// 正常情况下store.dispatch(object)
// 想要派发函数 store.dispatch(function)

// 将我们两个reducer合并到一起
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer,
});

// combineReducer实现原理（了解）
// function reducer(state = {}, action) {
//   // 返回一个对象，store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action),
//   };
// }

// redux-devtools
// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(reducer);

// 对每次派发的action进行拦截，进行日志打印

applyMiddleware(store, log, thunk);

// store.dispatch(function () {});

export default store;
