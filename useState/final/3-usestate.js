import React ,{useState} from 'react'
function Index() {
    const intialArray = [
        {
          id: "sdhaffsdkfjas",
          firstName: "emma",
          lastName: "watson",
          age: 27,
        },
        {
          id: "ksafewyiasere",
          firstName: "srikanth",
          lastName: "racharla",
          age: 24,
        },
        {
          id: "35232fsf",
          firstName: "don",
          lastName: "seenu",
          age: 24,
        },
      ];

function handleDelete(comingid)
{
    const filterdata=data.filter((eachItem)=>
    {
        return eachItem.id!=comingid;
    });
    setData(filterdata);
};
    
  const [data,setData]=useState(intialArray);
  return(
    <div>
        <ul>
            {data.map((eachItem,index)=>{
                    const {firstName,lastName,age,id} = eachItem;
                    return(
                        <li key={index}>
                            <div>
                                my first name is:{firstName}
                            </div>
                            <div>
                                my last name is:{lastName}
                            </div>
                            <div>
                                my age is:{age}
                            </div>
                            <button onClick={()=>handleDelete(id)}>delete me</button>
                        </li>
                    );
                })}
        </ul>
    </div>
  );
    
};

export default Index
