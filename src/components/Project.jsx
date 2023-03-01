import { useEffect } from "react"
const Project = (props) => {
  return (
    <div className="shadow rounded border py-2 h-[15rem] w-[100%] sm:w-[100%] flex flex-col justify-between">
    <div className="p-1">{props.data.nom} - {props.data.desc} -</div>
      <div
        style={{ backgroundImage: `url(${props.data.imges})` }}
        className="h-[80%] w-[100%] bg-center  bg-cover"
      >

      </div>
      <a href={props.data.adrss} className="p-1 text-right text-sm text-blue-700 underline" >
        See more details
      </a>
    </div>
  );
};

export default Project;
