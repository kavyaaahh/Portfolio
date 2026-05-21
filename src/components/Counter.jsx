import React, { useEffect,useState } from "react";

function Counter() {
  const [count, setNum] = useState(0);
  useEffect(() => {
    console.log("component mounted")
  },[count]);
  function increment() {
     setNum(count * count);
  };

  function decrement(){
    if (count > 0) setNum(Math.sqrt(count));
  };

  function reset() {
    setNum(0);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <h1 className="text-6xl font-bold mb-6">{count}</h1>
      <input type="number" value={count}
        onChange={(e)=>setNum(Number(e.target.value))}
        placeholder="Enter a number"
        className="px-4 py-2 rounded-lg mb-6 text-black"
        />
      <div className="flex gap-4">
        <button onClick={decrement}className="px-4 py-2 bg-red-500 text-white rounded">
          -
        </button>

        <button onClick={reset}className="px-4 py-2 bg-gray-500 text-white rounded">
          Reset
        </button>

        <button onClick={increment}className="px-4 py-2 bg-green-500 text-white rounded">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;