import React from 'react'

const ButtonComp = ({text , onClick }) => {
  return (
    <button 
    className=' w-auto bg-gradient-to-tr from-blue-500 to-blue-950 text-2xl border-2 rounded-3xl p-3 text-white' 
    onClick={onClick}>
        {text}
    </button>
  )
}

export default ButtonComp