import "./App.css";

const Button = ({ color = "blue", disabled, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default function App() {
  const handleClick = () => {
    console.log("button was clicked");
  };

  return (
    <>
      <Button color="#25b849" text="Submit button" onClick={handleClick} />
      <Button color="#ce5454" text="Close button" onClick={handleClick} />
      <Button color="#8f8f8f" disabled text="Disabled" onClick={handleClick} />
    </>
  );
}
