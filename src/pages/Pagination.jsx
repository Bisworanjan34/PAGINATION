import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pagination = () => {
let [data,setData]=useState([])
let [curpage,setCurpage]=useState(1)
let [rowpage,setRowpage]=useState(7)
let total=100;
let indexLast=curpage*rowpage;
let indexFirst=indexLast - rowpage;
let curItem=data?.slice(indexFirst,indexLast)
let totalPages=Math.ceil(total/rowpage)
useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res=>{
            setData(res.data) 
        }))
    },[])
    let prevfun=()=>{
        setCurpage((prev)=>Math.max(prev-1,1))
    }
    let nextfun=()=>{
        setCurpage((prev)=>Math.min(prev+1,totalPages))
    }
   let pagemove=(page)=>{
        setCurpage(page)
   }
  return (
    <div>
       <h2>pagination</h2>

       <table>
         <thead>
         <tr>
            <th>user-id</th>
            <th>user-title</th>
            <th>user-body</th>
          </tr>
         </thead>
          {
             curItem.length?curItem.map((r,i)=>{
                return(
                   <tbody key={i}>
                     <tr className='border-1'>
                        <td>{r.id}</td>
                        <td>{r.title}</td>
                        <td>{r.body}</td>
                    </tr>
                   </tbody>
                )
            }):''
          }
       </table>
      

           <div className="pagi-main d-flex gap-2">
               
           <button onClick={prevfun} disabled={curpage ===1} >prev</button>
           <div className="div pagination ">
           {
    Array.from({length:totalPages},(_,ind)=>(

       <div className="div" key={ind}>
           <button onClick={()=>pagemove(ind+1)}
        className={curpage === ind+1 ? 'bg-primary':''}
        >{ind+1}</button>
       </div>
    )
             )
            }
           </div>
            <button onClick={nextfun} disabled={curpage === totalPages}>Next</button>
           

           </div>

    </div>
  )
}

export default Pagination
