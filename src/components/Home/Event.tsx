import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Event() {
  return (
    <section className=" bg-colorPrimary text-white flex lg:flex-row flex-col items-center lg:gap-32 gap-10 ">
      <div className="lg:w-[55%] w-full sm:mb-0 mb-48">
        <p className=" font-semibold">EVENTS</p>
        <h4 className=" font-semibold ">Up Coming Events</h4>
        <div className="mt-5 flex sm:flex-row flex-col items-center  xl:h-[18rem] lg:h-[20rem] h-[18rem] ">
          <img
            src="/img/event.png"
            alt="event"
            className=" sm:w-[50%] w-full object-cover object-center xl:h-[18rem] lg:h-[20rem] h-[18rem]"
          />
          <div className=" bg-white p-5 text-[#111111]  flex flex-col justify-center gap-2 sm:w-[50%] w-full xl:h-[18rem] lg:h-[20rem] h-[18rem]">
            <p className=" text-lg font-medium">Multicultural Festival</p>
            <p className="">
              Celebrate the rich tapestry of cultures in our community with live
              performances, traditional food stalls, and arts and crafts from
              around the world.
            </p>
            <NavLink
              to="https://portal.ndiigbogermany.org/login"
              className=" text-colorPrimary underline flex items-center "
            >
              Register Now{" "}
              <span>
                <MdArrowOutward size={20} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] w-full">
        <form className=" bg-white p-5">
          <h6 className="text-xl font-semibold text-[#111111]">
            Subscribe For Our Membership Update
          </h6>
          <div className="flex flex-col gap-3 mt-10">
            <input
              className="bg-[#F4F4F4] px-4 h-[4rem]"
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#F4F4F4] px-4 h-[4rem]"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="bg-[#F4F4F4] px-4 h-[4rem]"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="bg-[#F4F4F4] px-4 h-[4rem]"
              type="text"
              placeholder="Email"
            />
          </div>

          <button className=" bg-colorPrimary py-3 px-14 mt-10 font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Event;
