import React,{useState} from 'react';
import usePagetitle from './usepagetitle';
function Two()
{

   const [count,setCount]=useState(0);
   usePagetitle(count);
   return(
    <div>
          <button onClick={()=>setCount(count+1)}>count-{count}</button>
    </div>
   )
}

export default Two;
