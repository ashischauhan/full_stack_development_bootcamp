import { useState } from "react";

export default function Counter() {
  const [index, setIndex] = useState(1);

  function increment() {
    setIndex(index + 1);
  }

  function decrement() {
    setIndex(index - 1);
  }

  function reset() {
    setIndex(0);
  }

  console.log("Counter component rendered with index:", index);

  return (
    <div>
      <h2>Counter: {index}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
