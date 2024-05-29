import React from "react";

class HelloWorld extends React.Component {
  // 1.构造方法
  constructor() {
    console.log("Hello World constructor");
    super();

    this.state = {
      message: "Hello World",
    };
  }

  changeText() {
    this.setState({
      message: "你好啊，李银河",
    });
  }

  // 2.执行render方法
  render() {
    console.log("Hello World render");
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <p>{message}是程序员的第一个代码</p>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }

  // 3.组件被渲染到DOM：被挂载到DOM
  componentDidMount() {
    console.log("Hello World componentDidMount");
  }

  // 4.组件的DOM被更新完成：DOM发生更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "Hello World componentDidUpdate:",
      prevProps,
      prevState,
      snapshot
    );
  }

  // 5.组件从DOM中卸载掉，从DOM移除掉
  componentWillUnmount() {
    console.log("Hello World componentWillUnmount");
  }

  // 不常用的生命周期补充
  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate() {
    return {
      scrollPosition: 1000,
    };
  }
}

export default HelloWorld;
