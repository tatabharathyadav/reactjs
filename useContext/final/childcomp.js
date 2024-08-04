import SubChildComponent  from "./subchildcomp";

const ChildComponent=()=>
{
    return(
        <div>
        <h2>child component</h2>
        <SubChildComponent/>
        </div>
    );
}

export default ChildComponent;