import React from 'react'
import './confirmation.css'

const Confirmation = () => {
  return (
    <div>
      <div className='modal-content'>
        <h2>Confirm Your Age</h2>
        <p>Are you 18 years old or above?</p>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  )
}

export default Confirmation
