import "./App.css";
import Nav from "./Nav";

function App() {
  const msg = "This is from a variable.";
  const num = 0;

  return (
    <>
      <Nav />
      <div className="wrapper">
        <div>{msg}</div>
        <div>Calculation: {num + 1}</div>
        <div>Call function: {sum(1, 2)}</div>
        <div className="header">Test CSS</div>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
}

export default App;

function sum(a: number, b: number) {
  return a + b;
}

function handleClick() {
  alert("Hello!");
}
