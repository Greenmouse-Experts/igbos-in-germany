import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

function BtnWhite({color}:{color?:string}) {
  return (
    <NavLink to="/signin" className={`${color === "green" ?"bg-colorPrimary btn-green text-white": "btn-white bg-white"}  text-colorPrimary w-fit mt-10 px-8 py-3 w-fit font-medium btn  rounded-xl transition-all text-lg flex items-center gap-3`}>
      Join Us Today{" "}
      <span>
        <MdArrowOutward size={20} />
      </span>
    </NavLink>
  );
}

export default BtnWhite;
