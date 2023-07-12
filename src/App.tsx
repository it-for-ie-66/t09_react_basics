import "./App.css";

function App() {
  const msg = "This is from a variable.";
  const num = 0;
  return (
    <div>
      <div>This is just like HTML.</div>
      <div>{msg}</div>
      <div>Calculation: {num + 1}</div>
      <div>Call function: {sum(1, 2)}</div>
      <button onClick={alert}>Alert</button>
    </div>
  );
}

export default App;

function alert() {
  console.log("Alert");
}

function sum(a: number, b: number) {
  return a + b;
}
