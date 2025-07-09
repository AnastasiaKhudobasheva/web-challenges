import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Counter />;
      <Counter />
      <Counter />;
      <Counter />;
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  // let count = 0;

  function handleIncreaseCount() {
    // count++;
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    console.log("count before", count);
    setCount((a) => a + 1);
    // setCount((b) => b + 1);
    // setCount((c) => c + 1);
    console.log("count after", count);
  }

  function handleToggleTheme() {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  }

  const cssClass = `counter ${isDarkModeEnabled ? "dark" : ""}`;

  return (
    <div className={cssClass}>
      <p>You have clicked {count} times</p>
      <button onClick={handleIncreaseCount}>Click me</button>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
}
