import { BsInstagram, BsFacebook } from "react-icons/bs";
import { MdEmail} from "react-icons/md";
const Footer = () => {
  return (
    <div className="h-[25%] w-[100%] bg-gray-200 flex flex-col p-1 items-center justify-between">
      <div className="h-[25%] text-center text-xl font-bold italic tracking-widest pb-2 border-b border-b-2 border-b-[#050A30] w-[70%]">
      KREIFEUR IBRAHIM
      </div>
      <div className="flex w-[100%] sm:w-[70%] h-[50%] flex-row-reverse justify-between">
        <div className="flex flex-col justify-between  w-[60%] sm:w-[30%] text-right items-start">
          <h1 className="font-bold ">Social media accounts</h1>
          <a href="https://web.facebook.com/brahim.kreifeur.1" className="flex items-center gap-2 hover:text-green-700">
            <BsFacebook />
            IBrahim kreifeur
          </a>
          <a href="https://www.instagram.com/kreifeur.svg" className="flex items-center gap-2 hover:text-green-700">
            <BsInstagram />
            kreifeur.svg
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-green-700">
            <MdEmail />
            kreifeur669@gmail.com
          </a>
        </div>
        <ul className="flex flex-col justify-between text-right w-[35%] sm:w-[30%]">
          <li className="font-bold">Liens du site</li>
          <li>
            <a href="#home" className="hover:text-[#050A30]">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#050A30]">Projects</a>
          </li>
          <li>
            <a href="services" className="hover:text-[#050A30]">Services</a>
          </li>
        </ul>
      </div>
      <h1 className="h-[5%]flex items-center">Copyright<span className="mx-1">&#9400;</span> 2023 KREIFEUR . All Rights Reserved</h1>
    </div>
  );
};

export default Footer;
