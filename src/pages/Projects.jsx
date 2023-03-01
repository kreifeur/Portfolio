import Project from "../components/Project";;
const Projects = () => {
  const projects = {
    project1: {
      nom: "Baleghni",
      desc: "React js website",
      imges: "/src/assets/project1.png",
      adrss: "https://kreifeur.github.io/baleghni/",
    },
    project2: {
      nom: "Gestion de stock",
      desc: "React js / Firebase web site",
      imges: "/src/assets/proj2.png",
    },
    project3: {
      nom: "Full Business inteligence project",
      desc: "ETL TABLEAU DASHBOARD Talend ",
      imges: "/src/assets/dashboard.png",
    },
    project4: {
      nom: "Gestion de stock",
      desc: "customers products suppliers ",
      imges: "/src/assets/gestion.png",
    },
  
  };
  
  return (
    <div
      id="projects"
      className="w-[100%] min-h-screen flex flex-col py-[7%] items-center gap-[20px] p-3"
    >
      <div className="text-3xl font-bold tracking-wider tit relative">
        Our Projects
      </div>
      <div className="w-[100%] sm:w-[80%] border p-2 flex justify-end">
        <select
          id="underline_select"
          className="sm:w-[20%]  w-[100%] block px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0"
        >
          <option value="all">All projects</option>
          <option value="front">Front end projects</option>
          <option value="full">Full stack projects</option>
          <option value="ds">Data science projects</option>
          <option value="bi">BI projects</option>
        </select>
      </div>
      <div className="sm:w-[80%] w-[100%] border h-fit grid grid-cols-1  sm:grid-cols-2 gap-4 place-items-center sm:p-3 p-1 ">
        <Project data={projects.project3} />
        <Project data={projects.project1} />
        <Project data={projects.project2} />
        <Project data={projects.project4} />
      </div>
    </div>
  );
};

export default Projects;
