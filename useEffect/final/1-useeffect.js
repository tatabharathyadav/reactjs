import React,{useState,useEffect} from 'react';
function Final()
{
   const [count,setcount]=useState(0)
   useEffect(()=>
   {
      console.log('hello useeffect',count)
   },[])
   return(
    <div>
        <h1>learn useeffect</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
    </div>

   );
}

export default Final;