import "./App.css";

const Sum = ({ valueA, valueB }) => {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
};

export default function App() {
  return <Sum valueA={10} valueB={5} />;
}
