import React from 'react';
import {useNavigate} from "react-router-dom";
function Home()
{
    const navigate=useNavigate();
    function navigatetosuccesspage(){
        navigate('/success');
    }
    return(
        <div>
            <h1>Home</h1>
            <button onClick={navigatetosuccesspage}>submit form</button>
        </div>
    );
}

export default Home;