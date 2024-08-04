import React,{useReducer} from 'react';
const reducer=(state,action)=>{
    if(action.type === 'DELETE_PERSON')
    {
        const newPersons=state.data.filter((eachperson)=>
        {
            return eachperson.id !== action.payload;
        });
        return{
            ...state,
            data:newPersons,
            length:state.length-1,
        }

    }
    return state;
};
function Final()
{

    const initialState={
        data:[
            {id:'121',name:'bharath',email:'t@gmail.com'},
            {id:'122',name:'yadav',email:'y@gmail.com'}
        ],
        length:2
    }
    const [state,dispatch]=useReducer(reducer,initialState);
    function handledelete(id)
    {
        dispatch({
            type:'DELETE_PERSON',
            payload:id,
        })

    }
    function handleedit(id)
    {
        dispatch({
            type:'UPDATE_PERSON',
            payload:id,
        })
        
    }

    return(
        <div>
            <h2>List</h2>
            <h1>current users length:{state.length}</h1>
            {
                state.data.map((eachitem)=>
                {
                    const {id,name,email}=eachitem;
                    return(
                        <div key={id}>
                        
                            <h3>{name}</h3>
                            <h3>{email}</h3>
                            <button onClick={()=>handledelete(id)}>delete</button>
                            <button onClick={()=>handleedit(id)}>edit</button>
                        </div>

                    );
                })
            }
           
        </div>
    );
}

export default Final;