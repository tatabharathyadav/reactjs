import React from 'react';
import useFetch from './useFetch';
const URL = "https://jsonplaceholder.typicode.com/users";
function One()
{
    const [userData, loading, isError] = useFetch(URL);
    if(loading)
    {
        return <h3>loading...</h3>
    }
    if(isError)
    {
        return <h3>something went wrong</h3>
    }
    return(
        <div>
            <h1>Users</h1>
            <ul>
                {userData.map((eachuser)=>
                {
                    return <li key={eachuser.id}>{eachuser.username}</li>
                })}
            </ul>
        </div>
    );
}



export default One;