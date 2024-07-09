import React from 'react'

const ButtonComp = ({text , onClick }) => {
  return (
    <button 
    className=' w-auto bg-gradient-to-tr from-blue-600 to-blue-900 text-2xl border-2 rounded-3xl p-2 text-white' 
    onClick={onClick}>
        {text}
    </button>
  )
}

export default ButtonComp