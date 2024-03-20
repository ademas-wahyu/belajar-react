import React from "react";

function App() {
  const [angka, setAngka] = React.useState(0);

  function Minus() {
    setAngka(angka - 1);
  }

  function Plus() {
    setAngka(angka + 1);
  }

  function reset() {
    setAngka(0);
  }

  return (
    <div>
      <div>
        <button onClick={Minus}>-</button>
        <span>{angka}</span>
        <button onClick={Plus}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
