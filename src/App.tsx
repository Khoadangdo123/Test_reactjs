import { useReducer } from 'react';
import './App.css';

function reducer(state : any, action : any) {
  console.log(state)
  switch (action.type) {
    case "increment":
      return {age: state.age + 1};
    case "descrement":
      return {age: state.age - 1};
    case "reset":
      return {age: 0};
    default:
      return {age: state.age};
  }
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, { age: 0 })

  return (
    <div>
      <button onClick={() => { dispatch({ type: "increment" }) }}>increment</button>
      <button onClick={() => { dispatch({ type: "descrement" }) }}>descrement</button>
      <button onClick={() => { dispatch({ type: "reset" }) }}>reset</button>
      <h1>{state.age}</h1>
    </div>
  );
}

export default App
