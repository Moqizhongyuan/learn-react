import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);

  // 负责告知react，在执行完当前组件渲染之后要执行的副 作用代码
  useEffect(() => {
    // 1.监听事件
    console.log("监听redux中数据的变化，监听eventBus中why事件");

    // // 返回值：回调函数 => 组件被重新渲染或者组件卸载的时候执行
    return () => {
      console.log("取消监听redux中数据变化，取消监听eventBus中why事件");
    };
  });

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
    </div>
  );
});

export default App;
