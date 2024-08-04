import React from 'react';
import useFetch from './useFetch';
const URL = "https://jsonplaceholder.typicode.com/posts";
function Second()
{
    const [postsdata, loading, isError] = useFetch(URL);
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
            <h1>Posts</h1>
            <ul>
                {postsdata.map((eachuser)=>
                {
                    return <li key={eachuser.id}>{eachuser.title}</li>
                })}
            </ul>
        </div>
    );
}



export default Second;