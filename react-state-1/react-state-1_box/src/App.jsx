import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;

  // INITIAL STATE is not active (pink color):
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    // Check that the value changes correctly.
    // setIsActive(!isActive);
    setIsActive((prev) => !prev);

    console.log(isActive);
  }

  return (
    // HOW TO READ IT: !isActive means "not isActive"
    // So if isActive is false, then !isActive is true (pink color)
    <main>
      <div className={`box ${!isActive ? "box--active" : ""}`}>
        {isActive ? "Box inactive" : "Box active"}
      </div>

      <button onClick={handleClick}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

// Step-by-step behavior:

// Initial render: isActive=false
// Box shows inactive style
// Box text: "I'm inactive"
// Button text: "Activate"

// Click button → handleClick flips state:

// isActive=true
// Box now has active style
// Box text: "I'm active!"
// Button text: "Deactivate"

// Click again flips back to false, and UI returns to step 1.
//
//
//
//

// React lifecycle in action:

// Component renders with isActive = false.
// User clicks → handleClick runs:
// Calls setIsActive(true) (queue update).
// Logs isActive (still false, old value).
// React notices state changed → re-renders with isActive = true.
// Next click repeats the same cycle.

// setState is asynchronous
// When you call:

// setIsActive(prev => !prev);
// console.log(isActive);

// setIsActive(...) queues a change
// React won’t update isActive right away.

// The log after it still reads the old value because the component hasn’t re-rendered yet.
//
//
//

// How to see the updated state when it actually changes
// Option A: Use useEffect to detect changes:

// useEffect(() => {
//   console.log("isActive after update:", isActive);
// }, [isActive]);

// This runs after the component re-renders, giving you the actual updated state.

// Option B: Log inside JSX (render time):

// return (
//   <main>
//     {console.log("Rendering with isActive =", isActive)}
//     {/* ... */}
//   </main>
// );
