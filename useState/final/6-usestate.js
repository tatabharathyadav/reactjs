import React,{useState} from 'react';

function Index()
{
    const [list,setlist]=useState([]);
    const [message,setmessage]=useState({
        text:"",
        id:'',
    })
    function changemessage(e)
    {
        setmessage({
            ...message,
            text:e.target.value
        })
    }
    function handlesubmit(e)
    {
        e.preventDefault();
        let newtodo={
            text:message.text,
            id:new Date().getTime().toString()
        }
        setlist([...list,newtodo])
    }

function handledelete(id)
{
    let newtodos=list.filter((eachitem)=>
    {
        return eachitem.id!=id;
    })
    return setlist(newtodos);
}

    return(
        <div>
            <form>
                <input type='text' id='message' name='message' placeholder='enter some text' value={message.text} onChange={changemessage}/>
                <button onClick={handlesubmit}>add</button>
            </form>
            <hr/>
            {list.length === 0 && <h4>There is no items in the list</h4>}
            <ul>
                {
                    list.map((eachitem)=>
                    {
                        const {text,id}=eachitem;
                        return (<li key={id}>
                        <span>{text}</span>
                        <button>edit</button>
                        <button onClick={()=>handledelete(id)}>delete</button>
                        </li>);
                    })
                }
            </ul>
        </div>
    );

}

export default Index;