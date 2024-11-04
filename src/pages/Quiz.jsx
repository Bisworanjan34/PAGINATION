import React, {useState } from 'react'
import quizdata from '../components/quiz/quizdata'
import Quizitem from '../components/quiz/Quizitem'
const Quiz = () => {
    let [state]=useState(quizdata)


  return (
    <div>
       {
        state && state.map((s,i)=>{
            return(
                <Quizitem key={i} data={s}/>
            )
        })
       }    
    </div>
  )
}

export default Quiz
