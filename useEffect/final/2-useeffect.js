import React,{useState,useEffect} from 'react';
function Final()
{
   const [count,setcount]=useState(0)
   const [toggle,settoggle]=useState(true);
   useEffect(()=>
   {
      console.log('hello useeffect',count)
   },[count,toggle])
   return(
    <div>
        <h1>learn useeffect</h1>
        <h1 onClick={()=> settoggle(!toggle)}>{toggle?'open':'close'}</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
    </div>

   );
}

export default Final;