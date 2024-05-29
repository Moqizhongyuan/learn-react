import React, { memo, useRef, forwardRef, useImperativeHandle } from "react";

const HelloWrold = memo(
  forwardRef((props, ref) => {
    const inputRef = useRef();
    // 子组件对父组件出入的ref进行处理
    useImperativeHandle(ref, () => {
      return {
        focus() {
          console.log("focus");
          inputRef.current.focus();
        },
        setValue(value) {
          inputRef.current.value = value;
        },
      };
    });

    return <input type="text" ref={inputRef} />;
  })
);

const App = memo(() => {
  const titleRef = useRef();
  const inputRef = useRef();

  function handleDOM() {
    // console.log(titleRef.current);
    // console.log(inputRef.current);
    inputRef.current.focus();
    // inputRef.current.value = "";
    inputRef.current.setValue("哈哈哈");
  }

  return (
    <div>
      <h2 ref={titleRef}>哈哈哈</h2>
      <button onClick={handleDOM}>DOM操作</button>
      <HelloWrold ref={inputRef} />
    </div>
  );
});

export default App;
