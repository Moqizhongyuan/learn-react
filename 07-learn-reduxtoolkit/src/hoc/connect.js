// connect的参数：
// 参数一：函数
// 参数二：函数
// 返回值：函数

import { PureComponent } from "react";
// import store from "../store";
import { StoreContext } from "./StoreContext";

export function connect(mapStateToProps, mapDispatchToProps) {
  // 高阶组件：函数
  return function (WrapperComponent) {
    class NewComponent extends PureComponent {
      constructor(props, context) {
        super(props);
        this.state = mapStateToProps(context.getState());
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          // this.forceUpdate();
          this.setState(mapStateToProps(this.context.getState()));
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const stateObj = mapStateToProps(this.context.getState());
        const dispatchObj = mapDispatchToProps(this.context.dispatch);

        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        );
      }
    }

    NewComponent.contextType = StoreContext;
    return NewComponent;
  };
}
