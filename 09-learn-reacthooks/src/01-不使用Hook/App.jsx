import React, { PureComponent } from "react";

class HelloWorld extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
    };
  }
  changeText() {
    this.setState({ message: "你好啊，李银河！" });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>内容：{message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }
}

function HelloWrold2(props) {
  let message = "Hello World";

  // 函数式组件存在的最大的缺陷
  // 1.组件不会被重新渲染：修改message之后，组件知道自己要进行重新渲染吗？
  // 2.假如会重新渲染：函数会被重新执行，第二次重新执行时，会重新给message赋值为Hello World
  // 3.类似于生命周期的回调函数：也是没有的

  return (
    <div>
      <h2>内容2：{message}</h2>
      <button onClick={(e) => (message = "你好啊，李银河！")}>修改文本</button>
    </div>
  );
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld />
        <hr />
        <HelloWrold2 />
      </div>
    );
  }
}

export default App;
