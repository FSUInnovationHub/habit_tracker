import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [ counter, setCounter ] = useState(0)

  useEffect(() => {
    console.log('Hello world!')
    console.log(`Current state: ${counter}`)
  }, [counter])

  const handle_click = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="App" >

      <h1>Times the button has been clicked:</h1>
      <h1>{counter}</h1>

      <button onClick={handle_click} >
        Click me!
      </button>

    </div>
  );
}

export default App;
