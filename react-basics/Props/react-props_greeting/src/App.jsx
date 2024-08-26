import "./App.css";

const Greeting = ({ name }) => {
  const сoaches = ["Jan", "Sven", "Klaus", "Gimena"];
  const isCoach = сoaches.includes(name);
  return <h1>{isCoach ? "Hello, Coach!" : `Hello, ${name}`}</h1>;
};

export default function App() {
  return <Greeting name="Klaus" />;
}
