import Navbar from "../components/Navbar";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { Typewriter, handleDone, handleType } from "react-simple-typewriter";
const Home = () => {
  return (
    <div id="home" className="w-[100%] h-screen bg-gray-100 text-black">
      <div className="w-[100%] h-[93%] flex flex-col items-center  p-3 justify-center gap-[3rem] sm:gap-[2rem]  text-2xl">
        <div className="text-center">
          welcome to my Portfolio , i'm{" "}
          <span className="border-b-2 border-b-[#fff200]">kreifeur ibrahim</span> , a{" "}
        </div>
        <div className="sm:text-7xl text-3xl ">
          <Typewriter
            words={[
              "Full stack web developer",
              "Data scientist",
              "Big data analyst",
              "BI specialist",
            ]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          
        </div>
        <div className="text-sm w-[70%]">
            with a passion for building amazing projects that combine
            cutting-edge technology with data-driven insights. My portfolio
            includes a wide range of projects, from beautiful and responsive
            websites to complex data analytics dashboards.
          </div>
        <div className="text-lg  flex gap-[20px] mt-10">
          <a
            href="#projects"
            className="text-center border-2 border font-bold bg-[#fff200]  text-[#050A30] border border-[#050A30]  rounded py-1 w-[40vw] sm:w-[20vw]"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="text-center bg-[#050A30] text-[#fff200] border border-[#050A30] rounded py-1 w-[40vw] sm:w-[20vw]"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="text-3xl gap-4  absolute right-[35vw] top-[60vh] sm:top-[25vh] h-[50vh] w-[30vw] sm:w-[10vw]  sm:right-[1vw] flex sm:flex-col items-center justify-around">
        <a className="hover:text-[#fff200] " href="">
          <BsGithub />
        </a>
        <a className="hover:text-[#fff200] " href="">
          <BsLinkedin />
        </a>
        <a className="hover:text-[#fff200] " href="">
          <BsFacebook />
        </a>
        <a className="hover:text-[#fff200] " href="">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Home;
