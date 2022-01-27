import React from 'react';

function HabitCard({ habit }) {

    const { name, counter, completed } = habit

  return (
    <div className='habitCard' style={{
        backgroundColor:completed ? '#B593FF': 'inherit', 
        color:completed ? 'white' : 'black'
    }} >

        <div className='habitName'>
            <h3>{name}</h3>
        </div>
        
        <div className='habitCounter'>
            <p>{
                counter === 0 ? `${counter}` : `${counter} 🔥`
            }</p>
        </div>

    </div>
)
}

export default HabitCard;