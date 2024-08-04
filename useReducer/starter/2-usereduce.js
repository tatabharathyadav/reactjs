import React,{useReducer,useEffect} from 'react';
const reducer=(state,action)=>{
    if(action.type==='UPDATE_USERS_DATA')
        {
            return{
                ...state,
                usersData:action.payload,
            };
        }
    return state;
};
function Final()
{
    const fetchusersdata=async (url)=>
    {
        try
        {
            const response=await fetch(url);
            const data=await response.json();
            dispatch({type:'UPDATE_USERS_DATA',payload:data})
        }
        catch(error)
        {
            console.log(error);
        }


    }

    useEffect(()=>
    {
        fetchusersdata("https://jsonplaceholder.typicode.com/users")
    },[])
    const initialState={
        usersData:[]
    }
     const [state,dispatch]=useReducer(reducer,initialState)
     return(
        <div>
            <h2>Users info</h2>
            {
                state.usersData.map((eachuser)=>
                {
                    const{id,name,email}=eachuser;
                    return(
                        <div key={id} style={{ background: "lightblue" }}>
                            <h3>{name}</h3>
                            <p>{email}</p>
                            <button>delete</button>
                            <button>edit</button>
                        </div>
                    );

                })
            }
        </div>
     );
}
export default Final;