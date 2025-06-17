// Define the Greeting Component (we destructure the `name` prop):

function Greeting({ name }) {
  if (name === "Coach") {
    return <h1>Hello, lovely Coach!</h1>;
  }

  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <h1>
      <Greeting name="Klaus" />
      <Greeting name="Coach" />
      <Greeting name="Joseph" />
    </h1>
  );
}
