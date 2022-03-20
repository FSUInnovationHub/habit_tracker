import React from 'react';
import { compare_dates, get_date } from '../../functions/utilFunctions';

function HabitCard({ habit }) {

    const { name, counter } = habit

  return (
    <div className='habitCard' style={{
        backgroundColor: compare_dates(get_date(), habit.lastUpdated) === 'done' && counter !== 0 ? '#B593FF': 'inherit', 
        color: compare_dates(get_date(), habit.lastUpdated) === 'done' && counter !== 0 ? 'white' : 'black'
    }} >

        <div className='habitName'>
            <h3>{name}</h3>
        </div>
        
        <div className='habitCounter'>
            <p>
                {
                    counter === 0 ? `${counter}` : `${counter} 🔥`
                }
            </p>
        </div>

    </div>
)
}

export default HabitCard;