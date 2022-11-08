import React from 'react'
import './Toggle.css'
import { FiSun } from 'react-icons/fi'
import {BsFillMoonFill} from 'react-icons/bs'
const Toggle = () => {
  return (
      <div className='toggle'>
          <FiSun /> 
          <BsFillMoonFill />
          <div className="t-button">
              
          </div>
      </div>
  )
}

export default Toggle