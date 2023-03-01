import { useEffect } from "react";

const Service = (props) => {
    return ( <div className="border p-2 h-[15rem] w-[80%] rounded-md">
        <div className="text-[#050A30] text-xl font-bold">{props.data.titre}</div>
        <div>{props.data.desc}</div>
        <div className="text-[#050A30] font-bold">Technologies :</div>
        <ol>
            {props.data.skills.map((e,index)=><li key={index}>{e}</li>)}
        </ol>

    </div> );
}
 
export default Service;