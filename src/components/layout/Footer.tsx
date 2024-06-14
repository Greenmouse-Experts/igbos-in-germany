import { NavLink, useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  // console.log(pathname)
  return (
    <footer
      className={`${
        pathname === "/" ? "bg-colorPrimary" : "bg-colorPrimary"
      } pt-3 relative px-0`}
    >
      <div className=" bg-[#150E09] py-16">
        <div
          className={`${
            pathname === "/" ? "bg-colorPrimary" : "bg-colorPrimary"
          } w-[60%] absolute top-0 left-1/2 transform -translate-x-1/2 h-10 clip-path px-[10%] flex justify-between items-center text-white font-normal`}
        ></div>

        <div className="flex justify-between items-center px-[8%]  pb-10">
          {/* <img src="/logo-footer.svg" alt="logo" className=" scale-75" /> */}

          <nav className="flex text-[#ACACAC] justify-center items-center mx-auto gap-[3.5rem] flex-wrap">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/history">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/partners">Partners</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Media</NavLink>
            </li>
            <li>
              <NavLink to="/excos">Leadership</NavLink>
            </li>
            {/* <li>
              <NavLink to="/privacy-policy">Privacy Policies</NavLink>
            </li> */}
            <li>
              <NavLink to="/signup">Become A Member</NavLink>
            </li>
          </nav>
        </div>
        <div className="w-[60%] h-[1.1px] bg-[#ACACAC] mx-auto"></div>
        <div className="flex justify-center items-center px-10 text-[#ACACAC]  mt-8">
          <p>Ndi-Igbo Germany is an umbrella body for all Igbo unions in Germany.<br/> All Igbo unions in Germany are members of Ndi-Igbo Germany (NIG)</p>
        </div>
        <div className="flex justify-center items-center px-10 text-colorPrimary  mt-5">
          <p>Copyright © 2024 .Ndi-Igbo Germany | All Rights Reserved</p>
        </div>
        <p className="text-sm text-[#ACACAC] text-center mt-1">Site Credit to:</p>
      </div>
    </footer>
  );
}

export default Footer;
