import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { fetchHomeMultidataAction } from "../store/home";

export class category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata();
  }
  render() {
    return (
      <div>
        <h2>Category Page: {this.props.counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(category);
