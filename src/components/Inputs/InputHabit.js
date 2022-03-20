import React from 'react';

function InputHabit({ value, onChange, onClick }) {
  return (
      <div className='inputHabit'>
        <form onSubmit={onClick} >
          <input 
              placeholder='Add Habit' 
              value={value} 
              onChange={onChange}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
  )
}

export default InputHabit;
