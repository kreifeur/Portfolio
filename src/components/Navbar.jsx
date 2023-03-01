import { useState } from "react";
import {HiMenuAlt1} from 'react-icons/hi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
const Navbar = () => {
    const [brgr,setBrgr]=useState('hidden')
    const Fbrgr =()=>{
        brgr=='hidden'?setBrgr('w-[50%] block absolute top-[100%] right-0 p-5 bg-[rgb(0,0,0,0.7)] '):setBrgr('hidden')
    }
  return (
    <div className="border-b border-b-2 border-b-[#fff200] h-[7vh] z-10 text-white w-[100%] flex justify-center fixed top-0  bg-[#050A30]">
      <div className="w-[90%] flex items-center justify-between p-2 absolute relative">
        <a href="#home" className="text-xl font-bold italic">KREI<span className="font-light">FEUR</span> Tech</a>
        <ul className={` gap-[40px] ${brgr}   sm:flex`}>
          <li className="rounded p-2 hover:bg-green-500 sm:hover:bg-[rgba(0,0,0,0)]">
            <a href="#home">Home</a>
          </li>
          <li className="rounded  p-2 hover:bg-green-500 sm:hover:bg-[rgba(0,0,0,0)]">
            <a href="#projects">Projects</a>
          </li>
          <li className="rounded  p-2 hover:bg-green-500 sm:hover:bg-[rgba(0,0,0,0)]">
            <a href="#services">Services</a>
          </li>
          <li className="rounded p-2 hover:bg-green-500 sm:hover:bg-[rgba(0,0,0,0)]">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {brgr=='hidden'?
        <div className="sm:hidden cursor-pointer  text-2xl" onClick={Fbrgr}><HiMenuAlt1/></div>:
        <div className="sm:hidden cursor-pointer  text-2xl" onClick={Fbrgr}><MdOutlineRestaurantMenu/></div>
        }
      </div>
    </div>
  );
};

export default Navbar;
