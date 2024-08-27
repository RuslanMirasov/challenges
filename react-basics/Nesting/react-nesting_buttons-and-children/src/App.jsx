import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>Click me!</Button>
      <Button>Click me!</Button>
      <Button>Click me!</Button>
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
