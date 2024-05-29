import React from "react";
import ReactDOM from "react-dom/client";
// import {
//   UserContext,
//   ThemeContext,
// } from "./05-useContext的使用/context/user-context";
import { UserContext, TokenContext } from "./12-自定义Hooks/context";
import { Provider } from "react-redux";
import store from "./13-redux中的hooks/store";

// import App from "./01-不使用Hook/App";
// import App from "./02-计数器实现对比/App";
// import App from "./03-useState的使用/App";
// import App from "./04-useEffect的使用/05-执行时机-控制回调执行";
// import App from "./05-useContext的使用/App";
// import App from "./06-useReducer的使用（了解）/App";
// import App from "./07-useCallback的使用/App";
// import App from "./08-useMemo的使用/App";
// import App from "./09-useRef的使用/02-useRef绑定值解决闭包陷阱";
// import App from "./10-useImperativeHandle/App";
// import App from "./11-useLayoutEffect的使用/03-切换数字-uselayoutEffect";
// import App from "./12-自定义Hooks/App";
// import App from "./13-redux中的hooks/App";
// import App from "./14-useId的使用/App";
import App from "./15-useTransition使用/02-useDeferredValue的使用";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <UserContext.Provider value={{ name: "why", level: 99 }}>
//     <ThemeContext.Provider value={{ color: "red", size: 30 }}>
//       <App />
//     </ThemeContext.Provider>
//   </UserContext.Provider>
//   // </React.StrictMode>
// );
root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{ name: "why", level: 99 }}>
    <TokenContext.Provider value={"coderwhy"}>
      <Provider store={store}>
        <App />
      </Provider>
    </TokenContext.Provider>
  </UserContext.Provider>
  // </React.StrictMode>
);
