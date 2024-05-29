import React, { memo } from "react";
import "./style.css";
import { useScrollPosition } from "./hooks";

// User/Token

const Home = memo(() => {
  // window => document
  // useEffect(() => {
  //   function handleScroll() {
  //     console.log(window.scrollX, window.scrollY);
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [scrollX, scrollY] = useScrollPosition();

  return (
    <h1>
      Home Page: {scrollX}-{scrollY}
    </h1>
  );
});

const About = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();
  return (
    <h1>
      About Page: {scrollX}-{scrollY}
    </h1>
  );
});

const App = memo(() => {
  return (
    <div className="app">
      <h1>App Root Component</h1>
      <Home />
      <About />
    </div>
  );
});

export default App;
