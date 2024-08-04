import React,{useState} from 'react';

//conditional rendering
function Index()
{
    const [showdata,setshowdata]=useState(true);
    function handledata()
    {
        setshowdata(!showdata);
    }

    return(
        <div>
            <button onClick={handledata}>{showdata?'hide':'show'}</button>
            {/* {showdata &&
            <p>The issue arises because the Profile component is not 
                receiving the props correctly, so the thumbnailUrl, 
                title, and url variables are not defined within the Profile
                 component's scope. You need to extract these properties from props.</p>} */}
            {
                showdata?<div>he issue arises because the Profile component is not 
                receiving the props correctly, so the thumbnailUrl, 
                title, and url variables are not defined within the Profile
                 component's scope. You need to extract these properties from props.</div>:<h1>click on show</h1>
            }
        </div>
    );
}

export default Index;