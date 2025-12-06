import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
      const handler = setTimeout(async () => {
    const res = await fetch(
      `https://dummyjson.com/recipes/search?q=${input}`
    );
    const json = await res.json();
    setResult(json.recipes);
  }, 700); // wait 500ms after user stops typing

  return () => clearTimeout(handler); // cancel if input changes quickly
}, [input]);
  return (
    <div className="container">
      <h2>Auto complete Search Bar</h2>
      <input type="search" value={input} onChange={(e)=>setInput(e.target.value)} />
      <div className="result-container">
      {result?.map((r)=><span key={r.id}>{r.name}</span> )}

      </div>
    </div>
  );
}

export default App;
