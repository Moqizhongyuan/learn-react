import React, { PureComponent } from "react";
import { connect } from "../hoc/connect";
import { addNumber } from "../store/features/counter";
// import { connect } from 'react-redux'

export class About extends PureComponent {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>About Counter: {counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
