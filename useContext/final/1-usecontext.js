import React ,{useState} from 'react';
import ChildComponent from './childcomp';

const ParentComponent=()=>
{
    return(
        <div>
        <h1>useContext parent component </h1>
        <ChildComponent/>
        </div>
    );

}

export default ParentComponent;