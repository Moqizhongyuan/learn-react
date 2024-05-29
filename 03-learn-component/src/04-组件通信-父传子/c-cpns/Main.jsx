import React, { Component } from "react";
import axios from "axios";

import MainBanner from "./MainBanner";
import MainProductList from "./MainProductList";

export class Main extends Component {
  constructor() {
    super();

    this.state = {
      // banners: ["新歌曲", "新MV", "新歌单"],
      // productList: ["推荐商品", "热门商品", "流行商品"],
      banners: [],
      productList: [],
    };
  }

  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      // console.log(res);
      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      this.setState({
        banners,
        productList: recommend,
      });
    });
  }

  render() {
    const { banners, productList } = this.state;

    return (
      <div className="main">
        <div>Main</div>
        <MainBanner banners={banners} title="轮播图" />
        <MainBanner />
        <MainProductList productList={productList} />
      </div>
    );
  }
}

export default Main;
