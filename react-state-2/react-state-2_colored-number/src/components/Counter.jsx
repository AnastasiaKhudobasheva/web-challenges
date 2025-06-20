import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
import { Buttons } from "./Buttons";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleCount(arg) {
    if (arg === "plus") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <Buttons variable={handleCount} />
    </div>
  );
}
