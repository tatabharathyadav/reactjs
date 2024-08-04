import React from 'react';
import useCounter from './useCounter';
function Two()
{
    const [count,increment,decrement,reset] = useCounter();
    return(
        <div>
           <h1> <button>count=={count}</button></h1>
            <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default Two;