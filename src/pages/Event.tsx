import Banner from "../components/Banner";
import BtnWhite from "../components/Buttons/BtnWhite";
import { IoLocationOutline } from "react-icons/io5";

function Event() {
  return (
    <>
      <Banner page="Upcoming Events" img="/img/event-banner.png" />
      <section className=" grid lg:grid-cols-3  grid-cols-1 gap-x-20">
        <div>
          <img src="/img/event-1.png" alt="" />

          <div>
            <div>
              <img src="" alt="" />
              <div className="flex items-center gap-5">
                <div>
                  <p>10</p>
                  <p>Mar</p>
                </div>
               <div>
               <p>First Delegates meeting</p>
                <p className="flex items-center">
                  {" "}
                  <span>
                    <IoLocationOutline />
                  </span>
                  Heilbronn
                </p>
               </div>
              </div>
            </div>
            <p className="text-base">
              On the 10th of March 2012 all delegates assembled in Heilbronn for
              the first-ever official delegates meeting/assembly
            </p>
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
