import './App.css';
import { useEffect, useState } from 'react';
import InputHabit from './components/Inputs/InputHabit';
import HabitList from './components/Habits/HabitList';
import { get_date, compare_dates, debugDates } from './functions/utilFunctions';

function App() {

  const [ habits, setHabits ] = useState(JSON.parse(localStorage.getItem('habits')) || [])
  const [ newHabit, setNewHabit ] = useState(initial_state)

  const add_habit = (e) => {
    e.preventDefault()
    let today = get_date()
    let habit = {...newHabit, lastUpdated: new Date(today), prevUpdated: new Date(today)}
    let habits_list = [...habits, habit]
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
      habits_list[key].lastUpdated = get_date()
      habits_list[key].counter += 1
    }
    else{
      habits_list[key].lastUpdated = habits_list[key].prevUpdated
      habits_list[key].counter -= 1
    }
    setHabits(habits_list)
    localStorage.setItem('habits', JSON.stringify(habits_list))
  }

  useEffect(() => {
    let date = get_date()
    console.log(habits)
    habits.forEach((habit, index) => {
      switch(compare_dates(new Date(date), new Date(habit.lastUpdated))){
        case 'done':
          break
        
        case 'expired':
          let change = {
            ...habit, 
            counter:0, 
            completed:false
          }
          setHabits(prevState => {
            let newState = [...prevState]
            newState[index] = change
            localStorage.setItem('habits', JSON.stringify(newState))
            return newState
          })
          break
      
        case 'active':
          let update = {
            ...habit, 
            prevUpdated: habit.lastUpdated,
            completed: false
          }
          setHabits(prevState => {
            let newState = [...prevState]
            newState[index] = update
            localStorage.setItem('habits', JSON.stringify(newState))
            return newState
          })
          break

        default:
          break
      }
    })

  }, [])

  return (
    <div className="App" >

      <h1>Daily Habit Tracker</h1>
      <button onClick={()=>console.log(habits)} >Click</button>
      <button onClick={debugDates} >Debug</button>

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
  prevUpdated:'',
  completed:false
}