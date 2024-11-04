import axios from "axios"
import { useEffect, useState } from "react"

let Pagination3=()=>{

    let [data,setData]=useState([])
    let [curpage,setCurpage]=useState(1)
    let [rowpage,setRowpage]=useState(10)
    let indexLast= curpage*rowpage;
    let indexFirst=indexLast - rowpage;
    let total=100;
    let currentitem=data.slice(indexFirst,indexLast);
    let totalPages= Math.ceil(total/rowpage) 

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>setData(res.data))
    },[])

    let prevfun=()=>{setCurpage((prev)=>Math.max(prev-1,1))}
    let nextfun=()=>{setCurpage((next)=>Math.min(next+1,totalPages))}
    let pageMovefun=(page)=>{setCurpage(page)}
    return(
            <div className="div">
                <h1 className="text-bg-success text-center">PAGINATION-CONCEPT</h1>
                <div className="container">
                    {
                        currentitem.length>0 && currentitem.map((p,i)=>{
                            return(
                                <div className="row" key={i}>
                                    <p>{p.id}</p>
                                    <p>{p.title}</p>
                                    <p>{p.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
                  <div className="pagination justify-content-center gap-3">
                     <button onClick={prevfun} disabled={curpage === 1}>prev</button>
                        {
                          Array.from({length:totalPages},(_,index)=>(
                            <button onClick={()=>pageMovefun(index+1)}
                            className={curpage === index+1?'text-bg-success':''}
                            >{index+1}</button>
                          ))
                        }
                     <button onClick={nextfun} disabled={curpage === totalPages}>next</button>
                  </div>
            </div>
    )
}
export default Pagination3