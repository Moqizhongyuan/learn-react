import React, { PureComponent } from "react";
import { AppWrapper, SectionWrapper } from "./style";
import Home from "./home/index";
// import { HYButtonWrapper } from "./home/style";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      size: 30,
      color: "yellow",
    };
  }
  render() {
    const { size, color } = this.state;
    return (
      <AppWrapper>
        <SectionWrapper size={size} color={color}>
          <h1 className="title">我是标题</h1>
          <p className="content">我是内容，哈哈哈</p>
          <button onClick={(e) => this.setState({ color: "skyblue" })}>
            修改颜色
          </button>
        </SectionWrapper>

        <Home />
        <div className="footer">
          <p>免责声名</p>
          <p>版权声名</p>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
