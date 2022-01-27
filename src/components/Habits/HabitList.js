import React from 'react';
import HabitCard from './HabitCard';

function HabitList({ list, onClick }) {

    const handle_click = (key) => onClick(key)

  return( 
    <div className='habitList' >
        {
            list.map((habit, key) => (
                <div key={key} onClick={() => handle_click(key)} >
                    <HabitCard habit={habit} key={key} />
                </div>
            ))
        }
    </div>
  )
}

export default HabitList;
