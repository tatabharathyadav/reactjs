import React,{useContext} from 'react';
import {UserContext} from '../../context/userContext';

const SubChildComponent=()=>
{
    const data=useContext(UserContext);

    const {firstName, lastName, email}=data;

    return(
        <div>
            <h3>subchildcomponent</h3>
            <div>firstname:{firstName}</div>
            <div>lastname:{lastName}</div>
            <div>email:{email}</div>
        </div>
    );
}
 
export default SubChildComponent;