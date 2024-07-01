import { useState } from "react";
import { AiOutlineAim } from "react-icons/ai";

import { FiPhone } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdKeyboardArrowDown, MdOutlineEmail } from "react-icons/md";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  // const [open2, setOpen2] = useState(false);
  // const [open3, setOpen3] = useState(false);
  // const [open4, setOpen4] = useState(false);
  const [menu, setMenu] = useState(false);

  console.log(open1, menu);
  return (
    <header className=" bg-colorPrimary pt-4  w-full relative text-lg font-montserrat">
      <div className=" bg-white h-[8rem] ">
        <div className="w-[55%] absolute top-0 left-1/2 transform -translate-x-1/2    bg-colorPrimary h-12 clip-path px-[6%] lg:flex hidden justify-between items-center text-white font-normal">
          <NavLink
            to="tel:+49 162 2906722"
            className="flex items-center gap-4 font-light"
          >
            {" "}
            <span>
              <FiPhone size={20} />
            </span>
            +49 162 2906722
          </NavLink>
          <NavLink
            to="mailto:info@ndiigbogermany.org"
            className="flex items-center gap-4 font-light"
          >
            <span>
              <MdOutlineEmail size={20} />
            </span>
            info@ndiigbogermany.org
          </NavLink>
        </div>
        <div className="flex 2xl:px-[7%] px-[1%]  justify-between  items-center md:pt-7 pt-0 font-medium">
          <NavLink to="/" className=" lg:scale-75 scale-50 lg:ml-0 -ml-16 ">
            <img src="/logo.svg" alt="logo" />
          </NavLink>
          <div
            className={`flex md:flex xl:flex-row md:px-0 md:py-0 flex-col  2xl:gap-[53px]  fixed ml-auto z-40 w-[24rem] h-screen  xl:w-fit xl:h-auto md:items-center py-5 bg-white gap-[25px] px-5 ${
              menu ? "left-0 top-[8rem]" : "left-[-1000px] top-[8rem]"
            } left-0 unset transition-all`}
          >
            <nav className="w-full scroll lg:text-[1.05rem] !text-lg  font-medium ">
              <ul className="md:flex xl:flex-row flex-col xl:gap-14  xl:items-center items-start xl:pt-0 xl:pl-0  sm:pl-20 pl-10 pt-3  gap-5 ">
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
                      className=" py-3 px-2 w-full flex items-center  gap-4 text-center group text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300 "
                      onClick={() => {
                        setOpen((prev) => !prev);
                        setMenu(false);
                      }}
                      to="/history"
                    >
                      <span>
                        <PiClockCounterClockwiseBold
                          size={25}
                          className="text-colorPrimary group-hover:text-white"
                        />
                      </span>
                      Our History
                    </NavLink>
                    <NavLink
                      className=" py-3 px-2 w-full flex items-center  gap-4 text-center group text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                      onClick={() => {
                        setOpen((prev) => !prev);
                        setMenu(false);
                      }}
                      to="/objective"
                    >
                      <span>
                        <AiOutlineAim
                          size={25}
                          className="text-colorPrimary group-hover:text-white"
                        />
                      </span>
                      Aims and Objectives
                    </NavLink>
                    <NavLink
                      className=" py-3 px-2 w-full flex items-center  gap-4 text-center group text-lg text-nowrap hover:bg-colorPrimary hover:text-white hover:scale-[.98] transition-all duration-300"
                      onClick={() => {
                        setOpen((prev) => !prev);
                        setMenu(false);
                      }}
                      to="/excos"
                    >
                      <span>
                        <RiTeamLine
                          size={25}
                          className="text-colorPrimary group-hover:text-white"
                        />
                      </span>
                      Excos / Leadership
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
                      to="/history"
                    >
                      Our History
                    </NavLink>
                    <NavLink
                      className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                      onClick={() => {
                        setMenu(false);
                      }}
                      to="/objective"
                    >
                      Aims and Objectives
                    </NavLink>
                    <NavLink
                      className=" py-3 px-1 w-full flex items-center gap-4 text-center text-bluePrimary text-lg font-medium text-nowrap"
                      onClick={() => {
                        setMenu(false);
                      }}
                      to="/excos"
                    >
                      Excos / Leadership
                    </NavLink>
                  </div>
                </li>

                <li className="relative" onMouseLeave={() => setOpen1(false)}>
                  <NavLink
                    onClick={() => setMenu(false)}
                    className="lg:text-[1.05rem] text-lg w-full "
                    to="/partners"
                  >
                    Partners
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    onClick={() => setMenu(false)}
                    className="lg:text-[1.05rem] text-lg w-full text-nowrap "
                    to="/events"
                  >
                    Events / Programs
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    onClick={() => setMenu(false)}
                    className="lg:text-[1.05rem] text-lg w-full "
                    to="/gallery"
                  >
                    Gallery
                  </NavLink>
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
              <NavLink
                to="https://portal.ndiigbogermany.org/login"
                className="text-white bg-colorPrimary rounded-xl py-3 px-8 text-nowrap btn btn-green 2xl:text-lg text-sm"
              >
                Membership Sign In
              </NavLink>
            </div>
          </div>

          <div
            className=" block 2xl:hidden xl:hidden cursor-pointer"
            onClick={() => setMenu((open) => !open)}
          >
            <GiHamburgerMenu size={40} color="#015907" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
