import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import BtnWhite from "../components/Buttons/BtnWhite";
import { IoLocationOutline } from "react-icons/io5";

function Event() {
  return (
    <>
      <Banner page="Events / Programs" img="/img/event-banner.png" />
      <section className=" grid lg:grid-cols-3  grid-cols-1 gap-x-20">
        <div className="event-shadow">
          <img src="/img/event-1.png" alt="" />

          <div className=" bg-white p-3 pt-5 px-4">
            <div className="flex items-center gap-5 ">
              <div className="flex flex-col bg-black text-base text-white divide-y divide-white justify-center items-center p-1">
                <span>10</span>
                <span>Mar</span>
              </div>
              <div>
                <p className="font-semibold">First Delegates meeting</p>
                <p className="flex items-center text-base gap-3">
                  {" "}
                  <span>
                    <IoLocationOutline />
                  </span>
                  Heilbronn
                </p>
              </div>
            </div>
            <p className="text-base mt-4">
              On the 10th of March 2012 all delegates assembled in Heilbronn for
              the first-ever official delegates meeting/assembly
            </p>

            <div className=" ml-auto mt-3 text-right">
              <NavLink to="/about" className=" text-colorPrimary font-medium ">
                Read More
              </NavLink>
            </div>
          </div>
        </div>

        <div className="event-shadow">
          <img src="/img/event-1.png" alt="" />

          <div className=" bg-white p-3 pt-5 px-4">
            <div className="flex items-center gap-5 ">
              <div className="flex flex-col bg-black text-base text-white divide-y divide-white justify-center items-center p-1">
                <span>28</span>
                <span>Feb</span>
              </div>
              <div>
                <p className="font-semibold">Igbo Convention Stuttgart</p>
                <p className="flex items-center text-base gap-3">
                  {" "}
                  <span>
                    <IoLocationOutline />
                  </span>
                  Heilbronn
                </p>
              </div>
            </div>
            <p className="text-base mt-4">
              On the 10th of March 2012 all delegates assembled in Heilbronn for
              the first-ever official delegates meeting/assembly
            </p>

            <div className=" ml-auto mt-3 text-right">
              <NavLink to="/about" className=" text-colorPrimary  font-medium ">
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-colorPrimary flex flex-col justify-center items-center text-center text-white">
        <p className="text-2xl font-medium">
          Membership is open to All official registered Igbo Unions/Associations
          in Germany.
        </p>
        <BtnWhite />
      </section>
    </>
  );
}

export default Event;
