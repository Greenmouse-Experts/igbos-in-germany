
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdKeyboardArrowDown, MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Header() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    // const [open4, setOpen4] = useState(false);
    const [menu, setMenu] = useState(false);

    console.log(open1, open2, menu)
  return (
    <header className=" bg-colorPrimary pt-4  w-full relative text-lg font-montserrat">
      <div className=" bg-white h-[8rem] ">
        <div className="w-[55%] absolute top-0 left-1/2 transform -translate-x-1/2   bg-colorPrimary h-12 clip-path px-[6%] flex justify-between items-center text-white font-normal">
          <NavLink to="#" className="flex items-center gap-4 font-light"> <span><FiPhone size={20} /></span>Phone number</NavLink>
          <NavLink to="mailto:info@ndiigbogermany.org" className="flex items-center gap-4 font-light">
            <span><MdOutlineEmail size={20} /></span>
            info@ndiigbogermany.org
          </NavLink>
        </div>
        <div className="flex 2xl:px-[7%] px-[2%]  justify-between  items-center pt-7 font-medium">
          <img src="/logo.svg" alt="logo" className=" scale-75" />
        <div className="flex items-center gap-20">
        <nav className="w-full scroll lg:text-[1.05rem] !text-lg  font-medium ">
            <ul className="md:flex xl:flex-row flex-col xl:gap-14 xl:items-center items-start xl:pt-0 xl:pl-0  sm:pl-20 pl-10 pt-3  gap-5 ">
              <li className="">
                <NavLink
                  onClick={() => setMenu(false)}
                  className="lg:text-[1.05rem] text-lg w-full "
                  to=""
                >
                  Home
                </NavLink>
              </li>
              <li
                className="relative flex flex-col justify-center items-start"
                onMouseLeave={() => setOpen(false)}
              >
                <p
                  className="2xl:text-[1.05rem] text-lg  py-2  cursor-pointer flex items-center gap-2 text-nowrap"
                  onMouseEnter={() => setOpen(true)}
                >
                  About Us{" "}
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </p>
                <div
                  className={` py-3 absolute w-[18rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all   ${
                    open ? "top-10" : "-top-96"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center  gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300 "
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/history"
                  >
                   
                    Our History
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center  gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/"
                  >
                   
                   Aims and Objectives
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center  gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/"
                  >
                    
                    Excos / Leadership
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center  gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="#"
                  >
                    
                    Our Constitution
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center  gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setMenu(false);
                    }}
                    to="#"
                  >
                    
                    How to be a Member
                  </NavLink>
                </div>
                <div
                  className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all ${
                    open ? "flex" : "hidden"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap "
                    onClick={() => {
                      setMenu(false);
                    }}
                    to="/about"
                  >
                    Our History
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setMenu(false);
                    }}
                    to="#"
                  >
                Aims and Objectives
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setMenu(false);
                    }}
                    to="/"
                  >
                    Excos / Leadership
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setMenu(false);
                    }}
                    to="#"
                  >
                    Our Constitution
                  </NavLink>
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setMenu(false);
                    }}
                    to="#"
                  >
                    How to be a Member
                  </NavLink>
                </div>
              </li>

              <li className="relative" onMouseLeave={() => setOpen1(false)}>
                <p
                  className="lg:text-[1.05rem] text-lg  py-2  cursor-pointer flex items-center gap-2"
                  onMouseEnter={() => setOpen1(true)}
                >
                  Partners
                </p>
               
              </li>
              <li className="relative" onMouseLeave={() => setOpen2(false)}>
                <p
                  className="lg:text-[1.05rem] text-lg  py-2  cursor-pointer flex items-center gap-2"
                  onMouseEnter={() => setOpen2(true)}
                >
                 Programs
                </p>
              
              </li>
              <li className="relative" onMouseLeave={() => setOpen3(false)}>
                <p
                  className="lg:text-[1.05rem] text-lg  py-2  cursor-pointer flex items-center gap-2"
                  onMouseEnter={() => setOpen3(true)}
                >
                  Resources{" "}
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </p>
                <div
                  className={` py-3 absolute w-[15rem] -left-14 xl:flex hidden flex-col justify-center items-center z-50 bg-white rounded-2xl p-5 transition-all  ${
                    open3 ? "top-10" : "-top-[30rem]"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-2 w-full flex  items-center gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/"
                  >
                    
                    Gallery
                  </NavLink>
                  <NavLink
                    className=" py-3 px-2 w-full flex items-center   gap-4 text-center text-bluePrimary text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/"
                  >
                    
                    Events
                  </NavLink>
                
                </div>
                <div
                  className={` py-1  -left-14 xl:hidden flex-col justify-center items-center z-5  rounded-2xl p-5 transition-all ${
                    open3 ? "flex" : "hidden"
                  }`}
                >
                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/"
                  >
                   Gallery
                  </NavLink>

                  <NavLink
                    className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                    onClick={() => {
                      setOpen3((prev) => !prev);
                      setMenu(false);
                    }}
                    to="/forms"
                  >
                    Events
                  </NavLink>
                
                </div>
              </li>

              <li>
                <NavLink
                  onClick={() => setMenu(false)}
                  className="lg:text-[1.05rem] text-lg w-full md:hover:bg-white md:hover:text-bluePrimary transition-all text-nowrap"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <NavLink to="#" className="text-white bg-colorPrimary rounded-xl py-3 px-8 text-nowrap btn">
            Sign In
            </NavLink>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
