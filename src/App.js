import './App.css';
import { useState } from 'react';
import InputHabit from './components/Inputs/InputHabit';
import { get_date } from './functions/utilFunctions';

function App() {

  const [ habits, setHabits ] = useState(JSON.parse(localStorage.getItem('habits')) || [])
  const [ newHabit, setNewHabit ] = useState('')

  const add_habit = (e) => {
    e.preventDefault()
    let today = get_date()
    let habit = {
      name:newHabit, 
      lastUpdated: new Date(today), 
      prevUpdated: new Date(today),
      counter:0,
      completed:false
    }
    let habits_list = [...habits, habit]
    setNewHabit('')
    setHabits(habits_list)
    localStorage.setItem('habits', JSON.stringify(habits_list))
    console.log(localStorage.getItem('habits'))
  }

  const handle_change = (e) => {
    setNewHabit(e.target.value)
  }

  return (
    <div className="App" >

      <h1>Daily Habit Tracker</h1>

      <InputHabit value={newHabit} onChange={handle_change} onClick={add_habit} />


    </div>
  );
}

export default App;