import React,{useState,useEffect} from 'react';
const URL='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
function Final()
{
    const [drinksdata,setdrinksdata]=useState([])
    const [searchterm,setsearchterm]=useState("")
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({ status: false, msg: "" });

    const fetchdrink=async (apiurl)=>
    {
        setLoading(true);
        setIsError({ status: false, msg: "" });

       try{
        const response=await fetch(apiurl);
        const {drinks}=await response.json();
        setdrinksdata(drinks);
        setLoading(false);
        setIsError({ status: false, msg: "" });
        if(!drinks)
            {
                throw new Error('data not found')
            }
       }
       catch(error) {
        setLoading(false);
        setIsError({
          status: true,
          msg: error.message || "something went wrong...",
        });

       }
    }

    useEffect(()=>
    {
        const correcturl=`${URL}${searchterm}`;
        fetchdrink(correcturl);
    },[searchterm])

    return(
        <div>
           <form>
            <input type='text' id='search' name='search' placeholder='search' value={searchterm} onChange={(e)=> setsearchterm(e.target.value)}/>
           </form>
           <hr/>
           {loading && !isError?.status && <h3>Loading...</h3>}
           {isError?.status && <h3 style={{ color: "red" }}>{isError.msg}</h3>}
           {!loading && !isError?.status && (
           <ul>
              {
                drinksdata.map((eachdrink)=>
                {
                    const { idDrink,strDrink,strDrinkThumb}=eachdrink;
                    return(
                        <li key={idDrink}>
                            <div>
                                <img src={strDrinkThumb} alt={strDrink}/>
                            </div>
                            <div>
                                <h1>{strDrink}</h1>
                            </div>

                        </li>
                    );

                })
              }
           </ul>
           )}

        </div>

    );

}

export default Final;