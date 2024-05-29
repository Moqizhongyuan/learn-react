import React, { Component } from "react";
import PropTypes from "prop-types";

export class MainBanner extends Component {
  static defaultProps = {
    banners: [],
    title: "默认标题",
  };

  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    console.log(this.props);
    const { title, banners } = this.props;

    return (
      <div className="banner">
        <h2>封装一个轮播图：{title}</h2>
        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// MainBanner传入的参数进行验证
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string,
};

// MainBanner传入的props类型进行验证
// MainBanner.defaultProps = {
//   banners: [],
//   title: "默认标题",
// };

export default MainBanner;
