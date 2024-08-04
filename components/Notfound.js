import React from 'react';
import { useNavigate } from 'react-router-dom';
function Notfound()
{
    const navigate=useNavigate();
    return(
        <div>
        <h1>404 NOT FOUND</h1>
        <button onClick={()=>navigate('/')}>Back to home</button>
        </div>
    );
}


export default Notfound;