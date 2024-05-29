import React, { PureComponent } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./style.css";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeRanking from "./pages/HomeRanking";
import HomeRecommend from "./pages/HomeRecommend";
import Category from "./pages/Category";
import Order from "./pages/Order";

export class App extends PureComponent {
  navigateTo(path) {
    console.log(path);

    // const navigate = useNavigate();
    // navigate(path);
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>header</span>
          <div className="nav">
            {/* <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "" })}
              to="/home"
            >
              首页
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "" })}
              to="/about"
            >
              关于
            </NavLink> */}
            {/* <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "")}
              to="/home"
            >
              首页
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "")}
              to="/about"
            >
              关于
            </NavLink> */}
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/login">登录</Link>

            <button onClick={(e) => this.navigateTo("/category")}>分类</button>
            <span onClick={(e) => this.navigateTo("/order")}>订单</span>
          </div>
          <hr />
        </div>
        <div className="content">
          {/* 映射关系 ：path => Component */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Navigate to="/home/recommend" />} />
              <Route path="/home/recommend" element={<HomeRecommend />} />
              <Route path="/home/ranking" element={<HomeRanking />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="footer">
          <hr />
          Footer
        </div>
      </div>
    );
  }
}

export default App;
