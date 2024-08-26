import "./App.css";
import Box from "./components/Box";

const Boxes = () => {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
};

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}
