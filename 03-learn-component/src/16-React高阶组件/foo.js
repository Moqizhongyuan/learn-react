// 回顾函数
function foo() {
  console.log("foo function");
}

foo();

function foo2(fn) {
  console.log("foo function");
  setTimeout(() => {
    fn();
  }, 2000);
}

foo2(function () {});

// [].map().filter.reduce().forEach

function foo3() {
  function bar() {}
  return bar;
}

const fn = foo3();
