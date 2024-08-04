import React,{useEffect, useReducer,useState} from 'react';
const reducer=(state,action)=>{
    if(action.type === 'UPDATE_USERS_DATA')
    {
        return{
            ...state,
            usersData:action.payload,
        }
    }
    if (action.type === "DELETE_USER") {
        const newUsers = state.usersData.filter(
          (eachUser) => eachUser.id !== action.payload
        );
        return {
          ...state,
          usersData: newUsers,
        };
      }
    if(action.type === 'ONCLICK_EDIT')
    {
        return{
            ...state,
            isEditing:action.payload,
        };
    }
    if (action.type === "UPDATE_USER") {
        const newUsers = state.usersData.map((eachUser) => {
          if (eachUser.id === action.payload.id) {
            return {
              id: action.payload.id,
              name: action.payload.name,
              email: action.payload.email,
            };
          } else {
            return eachUser;
          }
        });
        return {
          ...state,
          usersData: newUsers,
        };
      }
    
    return state;
}
function Final()
{

   const fetchusersdata=async (URL)=>
   {
    try{
        const response=await fetch(URL);
        const data=await response.json();
        dispatch({type:'UPDATE_USERS_DATA',payload:data});
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


    const initialState=
    {
        usersData:[],
        isEditing:{status:false,id:'',name:'',email:''}
    };

    const [state,dispatch] =useReducer(reducer,initialState);
    function handledelete(id)
    {
        dispatch({
            type:'DELETE_USER',
            payload:id
        })
    }

    const updateData = (id, name, email) => {
        dispatch({
          type: "UPDATE_USER",
          payload: {
            id,
            name,
            email,
          },
        });
        dispatch({
          type: "ONCLICK_EDIT",
          payload: { status: false, id: "", name: "", email: "" },
        });
      };
    

   
    return(
        <div>
            <h1>LIST</h1>
        {state.isEditing?.status && (
        <EditFormContainer
          id={state.isEditing.id}
          comingTitle={state.isEditing.name}
          comingEmail={state.isEditing.email}
          updateData={updateData}
        />
      )}
            {
                state.usersData.map((eachuser)=>
                {
                    const {id,name,email}=eachuser;
                    return(
                        <div key={id} style={{ background: "lightblue" }}>
                            <h3>{name}</h3>
                            <p>{email}</p>
                            <button onClick={()=>handledelete(id)}>delete</button>
                            <button onClick={()=>dispatch({type:'ONCLICK_EDIT',payload:{status:true,id:id,name,email}})}>edit</button>
                        </div>
                    );
                })
            }
        </div>
    );
}


const EditFormContainer=({id,comingTitle,comingEmail,updateData})=>
{
    const [title,setTitle]=useState(comingTitle || '');
    const [email,setEmail]=useState(comingEmail || '');
    return(
    <>
    <form>
        <input type='text' name='title' id='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={()=>updateData(id,title,email)}>update data</button>
    </form>
    </>
    );

}

export default Final;