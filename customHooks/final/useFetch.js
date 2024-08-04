import {useState,useEffect} from 'react';

function useFetch(URL)
{
    const [data,setData]=useState([]);
    const [loading,setLoading] =useState(false);
    const [isError,setIsError] = useState(false);
    const functionAPI=async ()=>
    {
        setLoading(true);
        setIsError(false);
        try{
            const response=await fetch(URL);
            const commingdata=await response.json();
            setData(commingdata);
            setLoading(false);
        }
        catch(error)
        {
            setLoading(false);
            setIsError(true);  
        }
        
    }

    useEffect(()=>
    {
        functionAPI(URL);

    },[])
   return [data,loading,isError];
}

export default useFetch;