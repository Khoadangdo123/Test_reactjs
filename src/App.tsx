import './App.css'
import { memo, useCallback, useState } from "react";
import Header from './components/Header';

const ChildButton = memo(({ onClick } : any) => {
  console.log("Child Render");
  return <button onClick={onClick}>Child Button</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleChildClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(c => c + 1)}>
        Parent Re-render
      </button>

      <ChildButton onClick={handleChildClick} />
    </div>
  );
}
export default App
