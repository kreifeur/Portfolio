import Service from "../components/Service";

const Services = () => {
  const services={
    Service1:{
      titre:'DATA SCIENCE',
      desc:'google analysis ,data cleaning, machine learning , data visualisation',
      skills:['python','tableau','excel']
    },
    Service2:{
      titre:'Front end web developement',
      desc:'We offer you a beautiful , modern and responsive design for your website',
      skills:['React js','Next js','tailwind','html','css']
    },
    Service3:{
      titre:'Data bases & Data warehouses',
      desc:'Expert in data bases , data warehouses , ETL ',
      skills:['Mongo db','My Sql','SQLite','Oracle','Cassandra']
    }
  }
  return (
    <div
      id="services"
      className="w-[100%] min-h-[100vh] flex flex-col items-center justify-center gap-[20px] py-3 px-1 sm:p-3 bg-gray-100"
    >
      <div className="text-3xl font-bold tracking-widerm tit relative">Our Services</div>
      <div className="sm:w-[80%] w-[100%]  h-fit grid sm:grid-cols-3 grid-cols-1 gap-4 place-items-center  p-1 sm:p-3 ">
        <Service data={services.Service1}/>
        <Service data={services.Service2}/>
        <Service data={services.Service3}/>
      </div>
    </div>
  );
};

export default Services;
