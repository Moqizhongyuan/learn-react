import React, { PureComponent } from "react";

export class Recommend extends PureComponent {
  // shouldComponentUpdate(newProps) {
  //   if (this.props.counter !== newProps.counter) return true;
  //   return false;
  // }
  render() {
    console.log("Recommend render");
    return (
      <div>
        <h2>Recommend Page: {this.props.counter}</h2>
      </div>
    );
  }
}

export default Recommend;
