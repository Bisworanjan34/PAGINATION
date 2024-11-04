import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pagination2 = () => {
   let [data,setData]=useState([])
   let [curp,setCurp]=useState(1)
   let [rowp,setRowp]=useState(8)
   let indexLast=curp*rowp;
   let indexFist=indexLast - rowp;
   let total=100;
   let curItem=data.slice(indexFist,indexLast);
   let totalPage=Math.ceil(total/rowp);

   useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setData(res.data)
        })
   },[])

   let prevfun=()=>{
        setCurp((prev)=>Math.max(prev-1,1))
   }
   let nextfun=()=>{
        setCurp((next)=>Math.min(next+1,totalPage))
   }
   let pagemovefun=(page)=>{
     setCurp(page)

   }

  
  
    return (

    <div>
         <h1 className="text-bg-success text-center">PAGINATION-CONCEPT</h1>
         <div className="container d-flex flex-wrap justify-content-around gap-4">
            {
                curItem.length>0? curItem.map((p,i)=>{
                    return(
                        <div className="row w-25 border  bg-success text-white mb-3 p-3 flex-wrap" key={i}>
                            <div className="col">
                               
                                <p>id:{p.id}</p>
                               
                                <h5>{p.title}</h5>
                               
                                <p>{p.body}</p>
                            </div>
                           
                        </div>
                    )
                }):
                <h3 className='text-center text-danger'>data fatching error.......</h3>
            }
         </div>
           <div className="pagination border w-75 mx-auto justify-content-center gap-3 my-4 py-3">
             <button onClick={prevfun}
             disabled={curp === 1}
             >PreV</button>
           {
             Array.from({length:totalPage},(_, index)=>(
                <button onClick={()=>pagemovefun(index+1)}
                className={curp === index+1?'text-bg-success':''}
                >{index+1}</button>
             ))
           }
             <button onClick={nextfun} 
             disabled={curp === totalPage}
             >NexT</button>
           </div>
    </div>
  )
}

export default Pagination2
