import './App.css';
import { useEffect, useState } from 'react';
import InputHabit from './components/Inputs/InputHabit';
import HabitList from './components/Habits/HabitList';

function App() {

  const [ habits, setHabits ] = useState(JSON.parse(localStorage.getItem('habits')) || [])
  const [ newHabit, setNewHabit ] = useState(initial_state)

  const add_habit = (e) => {
    e.preventDefault()
    console.log(newHabit)
    let habits_list = [...habits, newHabit]
    setNewHabit(initial_state)
    setHabits(habits_list)
    localStorage.setItem('habits', JSON.stringify(habits_list))
  }

  const handle_change = (e) => {
    setNewHabit(prevState => ({...prevState, name:e.target.value}))
  }

  const handle_click = (key) => {
    let habits_list = [...habits]
    habits_list[key].completed = !habits_list[key].completed
    if (habits_list[key].completed){
      habits_list[key].counter += 1
    }
    else{
      habits_list[key].counter -= 1
    }
    setHabits(habits_list)
    localStorage.setItem('habits', JSON.stringify(habits_list))
  }

  return (
    <div className="App" >

      <h1>Daily Habit Tracker</h1>

      <InputHabit value={newHabit.name} onChange={handle_change} onClick={add_habit} />

      <div className='container' >
        <HabitList list={habits} onClick={handle_click} />
      </div>

    </div>
  );
}

export default App;

const initial_state = {
  name:'',
  counter:0,
  lastUpdated:'',
  completed:false
}