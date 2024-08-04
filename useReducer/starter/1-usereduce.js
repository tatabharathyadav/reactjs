import React,{useReducer} from 'react';

const reducer=(state,action)=>{
    if(action.type==='DELETE_PERSON')
        {
            const newPersons=state.data.filter((eachPerson)=>
            {
                return eachPerson.id!==action.payload;
            })
            return{
                ...state,
                data:newPersons,
                length:state.length-1,

            };
        }
        return state;
};

function Final()
{
    const initialstate={
        data: [
            { id: "23432423", firstName: "srikanth", email: "srikanth@emgail.com" },
            { id: "rer3", firstName: "emma", email: "emma@emgail.com" },
          ],
          length: 2,
        };


   const [state,dispatch]=useReducer(reducer,initialstate);
   function handledelete(id)
   {
     dispatch({
        type:'DELETE_PERSON',
        payload:id,
     })
   }

    return (
        <div>
            <h1>Users list:{state.length}</h1>
    {
       state.data.map((eachitem)=>
       {
        const {id,firstName,email}=eachitem;
        return(
            <div key={id}>
                <h3>{firstName}</h3>
                <p>{email}</p>
                <button onClick={()=>handledelete(id)}>delete</button>
            </div>
        );

          
          
       })
    }
    </div>
    );
};

export default Final;