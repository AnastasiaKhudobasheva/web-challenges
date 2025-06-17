import "./styles.css";

import { HelloWorld } from "./components/Header";

export default function App() {
  const name = "Anabel";
  return (
    <div>
      <HelloWorld />
      <p> helllooooo {name}</p>
    </div>
  );
}

// export function HelloWorld() {
//   return <h1>Hello World 2!</h1>;
// }
