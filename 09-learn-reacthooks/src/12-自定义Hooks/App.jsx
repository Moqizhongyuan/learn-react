import React, { memo } from "react";
import { useLocalStorage } from "./hooks";

const App = memo(() => {
  // 通过key，直接从LocalStorage中获取一个数据

  // const [token, setToken] = useState(localStorage.getItem("token"));

  // useEffect(() => {
  //   localStorage.setItem("token", token);
  // }, [token]);

  const [token, setToken] = useLocalStorage("token");
  function setTokenHandle() {
    setToken("kobe");
  }

  // const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem("avatarUrl"));
  // useEffect(() => {
  //   localStorage.setItem("avatarUrl", avatarUrl);
  // }, [avatarUrl]);
  const [avatarUrl, setAvatarUrl] = useLocalStorage("avatarUrl");

  function setAvatarUrlHandle() {
    setAvatarUrl("http://www.coderwhy.com/abc.png");
  }

  return (
    <div className="app">
      <h1>App Root Component: {token}</h1>
      <button onClick={setTokenHandle}>设置token</button>
      <h1>avatarURL: {avatarUrl}</h1>
      <button onClick={setAvatarUrlHandle}>设置新头像地址</button>
    </div>
  );
});

export default App;
