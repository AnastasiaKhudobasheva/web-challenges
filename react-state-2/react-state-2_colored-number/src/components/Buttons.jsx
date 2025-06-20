export function Buttons({ variable }) {
  console.log(variable);
  return (
    <div className="counter__buttons-container">
      <button
        onClick={() => variable("plus")}
        type="button"
        className="counter__button"
        aria-label="increment count"
      >
        +
      </button>
      <button
        onClick={() => variable("minus")}
        type="button"
        className="counter__button"
        aria-label="decrement count"
      >
        -
      </button>
    </div>
  );
}
