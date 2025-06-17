export default function App() {
  return (
    <h1>
      <Smile />
    </h1>
  );
}

function Smile({ isHappy }) {
  if (isHappy) {
    return <h1>{"😜"}</h1>;
  }
  return <h1>{"😭"}</h1>;
}
