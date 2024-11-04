import React, { useEffect, useState } from 'react'
import './Quizitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
const Quizitem = ({data}) => {
    let {quastion,answer,options}=data
    let [show,setShow]=useState(false)
    let [selectedOption,setSelectedoption]=useState(null)
    let [result,setResult]=useState(null)
    let [ans,setAns]=useState(false)

    useEffect(()=>{
       showfun
    },[])
    let showfun=()=>{
        setShow(!show)
      
    }
    let checkfun=(e,option)=>{
     if(e.target.checked){
      setSelectedoption(option)
     }
     else{
      setSelectedoption(null)
     }
       }
    
    let submitfun=()=>{
     if(selectedOption==answer){
      setResult('Correct Answer! 🎉')
      setAns(false)
     }
     else{
      setResult('Wrong Answer! 😢')
      setAns(true)
     }
   
      
    }

  
  return (
    <div>
       <div className="quiz-item">
       <div className="question-div "  onClick={showfun}>
       <div className="question d-flex gap-5 align-items-center justify-content-around border">
        <h5 className=''>{quastion}</h5>
        <h5 className=''>
        <FontAwesomeIcon icon={faAngleDown} className={`down-icon ${show?'icon':''}`}/>
        </h5>
        </div>
       </div>
         
           <div className={`answer-div ${show?'show':''}`}>
            <div className={`answer `}><h5 className=''>Ans::- {ans?answer:''}</h5>
            <div className='options'>

           {
            options && options.map((o,i)=>{
             return(
              <div key={i} className='d-flex gap-2'>
                <input type="checkbox" onChange={(e)=>checkfun(e,o)}   checked={selectedOption === o}/>
              <p >{o}</p>
              </div>
             )
              })
            }

            </div>
               <button onClick={submitfun} className='text-bg-primary'>click here</button>
             <p className={ans?'text-danger fw-bold':'text-success fw-bold'}>result :: {result}</p>
            </div>
            </div>
         
       </div>
    </div>
  )
}

export default Quizitem
