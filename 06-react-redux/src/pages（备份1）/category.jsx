import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { fetchHomeMultidataAction } from "../store/actionCreators";

export class category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata();
  }
  render() {
    return (
      <div>
        <h2>Category Page</h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction());
  },
});

export default connect(null, mapDispatchToProps)(category);
