import React,{ useState } from 'react';

function Index()
{
    const [count,setCount] = useState(0);
    function incrementCount()
    {
        setCount(count+1);
    }
    // function incrementCount()
    // {
    //     setCount((prevcount)=>{
    //         return prevcount+1;
    //     });
    //     setCount((prevcount)=>{
    //         return prevcount+1;
    //     });
    // }


    function decrementCount()
    {
        setCount(count-1);
    }

    return(
        <div>
           <button onClick={decrementCount} >-</button>
           <span>{count}</span>
           <button onClick={incrementCount}>+</button>
        </div>
    );
}

export default Index;