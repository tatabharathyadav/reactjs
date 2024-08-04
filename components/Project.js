import React from 'react';
import {Link,Outlet} from 'react-router-dom';
function Project()
{
    return(
        <div>
        <h1>projects</h1>
        <nav>
            <Link to='/project/featured'>Featured projects</Link>
            <Link to='/project/new'>New projects</Link>
        </nav>
        <Outlet />
        </div>

    );
}

export default Project;
