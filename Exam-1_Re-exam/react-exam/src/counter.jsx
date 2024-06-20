import { useState } from "react";

function Composite(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0){ 
        return true;
    }
  }
  return false;
}

function Prime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -1
      </button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Count: {count}</p>
      <div>Composite: {Composite(count) ? "True" : "False"}</div>
      <div>Prime: {Prime(count) ? "True" : "False"}</div>
    </div>
  );
}

export default Counter;
