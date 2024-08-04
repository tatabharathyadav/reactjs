import React from 'react';
import usersData from  './usersData';
import {Link} from 'react-router-dom';
function Users()
{
    return(
        <div>
        <h1>Users</h1>   
        <div className='card-container'>
        {usersData.map((eachuser)=>
        {
            const {id,name,email}=eachuser;
            return(
                <Link  to={`/users/${id}`} key={id}>
                <article className='card'>
                <h3>{name}</h3>
                <h3>{email}</h3>
                </article>
                </Link>
            );
        })

        }
        </div>
        </div>
    );

}


export default Users;