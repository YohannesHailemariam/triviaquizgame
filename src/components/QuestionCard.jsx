import React from 'react'

const QuestionCard = ( questionNumber, question, choices, correctAnswer ) => {
  return (
    <div>
        <h2 className='text-xl'>1. What is the capital city of Kenya?</h2>
        <div className=' grid mt-3 grid-cols-2 gap-y-3 max-w-[500px] '>
            <div><span>A</span>. Nirobi</div>
            <div><span>B</span>. Nirobi</div>
            <div><span>C</span>. Nirobi</div>
            <div><span>D</span>. Nirobi</div>
        </div>
    </div>
  )
}

export default QuestionCard