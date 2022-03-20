import './App.css';
import { useState } from 'react'

function App() {

  const [ counter, setCounter ] = useState(0)

  const handle_click = () => {
    setCounter(counter + 5)
  }

  return (
    <div className="App" >

    <h1>Times button has been clicked:</h1>
    <h1>{counter}</h1>

    <button onClick={handle_click} >
      Click me
    </button>

    </div>
  );
}

export default App;