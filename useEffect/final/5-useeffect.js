import React,{useState,useEffect} from 'react';

const URL='https://jsonplaceholder.typicode.com/users';
function Final()
{

   const [userdata,setuserdata]=useState([])
   const [loading,setloading]=useState(false);
   const [iserror,setiserror]=useState(false);
   const [notfound,setnotfound]=useState(false);
   const fetchUsersData = async (apiURL) => {
    setloading(true);
    setiserror(false);
    setnotfound(false);
    try {
      const response = await fetch(apiURL);
      if(response.status === 404)
        {
            setnotfound(true);
        }
      const data = await response.json();
      setuserdata(data);
      setloading(false);
      setiserror(false);
    } catch (error) {
        setloading(false);
        setiserror(true);
    }
  };
    useEffect(()=>
    {
        fetchUsersData(URL);
    },[])

    if(loading)
        {
            return(
                <div>
                    <h4>Loading.....</h4>
                </div>
            );
        }
    if(iserror)
        {
            return(
                <div>
                    <h4>smt went wrong</h4>
                </div>
            );
        }
    if (notfound) {
            return (
              <div>
                <h4>Data not found</h4>
              </div>
            );
          }

    return (
        <div>
          <h1>hi</h1>
          <ul>
            {userdata.map((eachuser) => {
              const { id, name, email } = eachuser;
              return (
                <li key={id}>
                  <div>{name}</div>
                  <div>{email}</div>
                </li>
              );
            })}
          </ul>
        </div>
      );
}

export default Final;
