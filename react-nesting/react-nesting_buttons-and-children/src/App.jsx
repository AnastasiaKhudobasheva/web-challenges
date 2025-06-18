import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>text</Button>
      <Button>text2</Button>
      <Button>text3</Button>
      <Button>text4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
