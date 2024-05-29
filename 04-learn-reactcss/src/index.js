import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

// import App from "./01-内联样式的css/App";
// import App from "./02-普通的CSS写法/App";
// import App from "./03-CSS-Modules/App";
// import App from "./04_Less编写方式/App";
// import App from "./05-CSS-in-js写法/App";
import App from "./06-classname库/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: "purple", size: "50px" }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// // ES6标签模板字符串
// const name = "why";
// const age = 18;
// // 1.模板字符串的基本使用

// // const str = `my name is ${name}, age is ${age}`;
// // console.log(str);

// // 2.标签模板字符串的使用
// function foo(...args) {
//   console.log(args);
// }

// // foo("why", 18, 1.88);
// foo`my name is ${name}, age is ${age}`;
