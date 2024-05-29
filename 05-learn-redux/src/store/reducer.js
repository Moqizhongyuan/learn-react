const { ADD_NUMBER, CHANGE_NAME } = require("./constants");

// 初始化数据
const initialState = {
  name: "why",
  counter: 100,
};

// 定义reducer函数：纯函数
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    default:
      return state;
  }
}

module.exports = reducer;
