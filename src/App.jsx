import { useState } from 'react'
import ButtonComp from './components/ButtonComp'
import Questions from './components/Questions'
import QuestionCard from './components/QuestionCard'

function App() {

  return (
    <div>
      {/*<div 
      className=' clickme grid place-items-center mt-[350px] '>
        <ButtonComp text='Attemp Quiz'/></div>*/}
        <Questions />
    </div>
    
  )
}

export default App
