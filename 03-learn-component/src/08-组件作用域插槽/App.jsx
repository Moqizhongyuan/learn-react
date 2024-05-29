import React, { Component } from "react";
import TabControl from "./TabControl/index";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      titles: ["流行", "新款", "精选"],
      tabIndex: 0,
    };
  }

  tabClick(index) {
    this.setState({
      tabIndex: index,
    });
  }

  getTabItem(item) {
    if (item === "流行") {
      return <span>流行</span>;
    } else if (item === "新款") {
      return <button>{item}</button>;
    } else {
      return <i>{item}</i>;
    }
  }

  render() {
    const { titles, tabIndex } = this.state;
    return (
      <div className="app">
        <TabControl
          titles={titles}
          tabClick={(i) => this.tabClick(i)}
          // itemType={(item) => <button>{item}</button>}
          itemType={(item) => this.getTabItem(item)}
        />
        <h1>{titles[tabIndex]}</h1>
      </div>
    );
  }
}

export default App;
