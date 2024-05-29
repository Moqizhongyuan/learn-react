import React, { PureComponent } from "react";
import Home from "./Home";
import Recommend from "./Recommend";
import Profile from "./Profile";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      message: "Hello World",
      counter: 0,
    };
  }
  // shouldComponentUpdate(newProps, nextState) {
  //   // App进行性能优化
  //   if (
  //     this.state.message !== nextState.message ||
  //     this.state.counter !== nextState.counter
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }
  changeText() {
    this.setState({ message: "你好啊，李银河" });
    // this.setState({ message: "Hello World" });
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    const { message, counter } = this.state;
    console.log("App render");
    return (
      <div>
        <h2>
          App-{message}-{counter}
        </h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
        <button onClick={(e) => this.increment()}>counter+1</button>
        <Home message={message} />
        <Recommend counter={counter} />
        <Profile message={message} />
      </div>
    );
  }
}

export default App;
