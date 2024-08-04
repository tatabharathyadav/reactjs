import React ,{useState} from 'react'

const Index = () => {

    // const initialobj={
    //     firstName:'bharath',
    //     lastName:'yadav',
    //     age:20
    // }
    // const [data,setData]=useState(initialobj);

    // function changefirstname()
    // {
    //     setData({
    //         ...data,
    //         firstName:'TATA'

    //     })
    // }

    // function changelastname()
    // {
    //     setData({
    //         ...data,
    //         lastName:'DAS'
    //     })
    // }
//   return (
//     <div>
//        <h1>firstname is:{data.firstName}</h1>
//        <button onClick={changefirstname}>change firstname</button>
//        <h1>lastname is:{data.lastName}</h1>
//        <button onClick={changelastname}>change lastname</button>
//        <h1>age is:{data.age}</h1>
//     </div>
//   )


//or

const [firstName,setfirstName]=useState('bharath');
const [lastName,setlastName]=useState('yadav');
function changefirstname()
    {
       setfirstName('TATA')
    }

    function changelastname()
    {
        setlastName('DAS')
    }
return (
        <div>
           <h1>firstname is:{firstName}</h1>
           <button onClick={changefirstname}>change firstname</button>
           <h1>lastname is:{lastName}</h1>
           <button onClick={changelastname}>change lastname</button>
        </div>
      )
}

export default Index
