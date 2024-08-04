import React,{useState} from 'react';

function Index()
{
    const [firstname,setfirstname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');

    function changefirstname(e)
    {
        setfirstname(e.target.value);
    }
    function changeemail(e)
    {
        setemail(e.target.value);
    }
    function changepassword(e)
    {
        setpassword(e.target.value);
    }
    function handlesubmit(e)
    {
        e.preventDefault();
        let userobj={
            firstname:firstname,
            email:email,
            password:password
        };
        console.log(userobj);
    }
    return(
        <form onSubmit={handlesubmit}>
        <div>
            <input type='text' input='firstname' id='firstname' value={firstname} placeholder='enter name' onChange={changefirstname}/>
        </div>
        <div>
            <input type='text' input='email' id='email' value={email} placeholder='enter email'  onChange={changeemail}/>
        </div>
        <div>
            <input type='password' input='password' id='password' value={password} placeholder='enter password'  onChange={changepassword}/>
        </div>
        <div>
            <button type='submit'>submit</button>
        </div>
        </form>
    );

}

export default Index;
