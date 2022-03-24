import React from 'react';
import HabitCard from './HabitCard';

function HabitList({ list, onClick }) {

  return( 
    <div className='habitList' >
        {
            list.map((habit, key) => (
                <div key={key} onClick={() => onClick(key)} >
                    <HabitCard habit={habit} key={key} />
                </div>
            ))
        }
    </div>
  )
}

export default HabitList;
