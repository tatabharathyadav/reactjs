import React from 'react';
import {useNavigate} from "react-router-dom";
function Success()
{
    const navigate = useNavigate();
    return(
        <div>
            <h1>successfully submited</h1>
            <button onClick={()=>navigate('/')}>back to home</button>
        </div>
    );
}

export default Success;