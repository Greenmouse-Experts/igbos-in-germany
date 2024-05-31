import Banner from "../components/Banner";
import BtnWhite from "../components/Buttons/BtnWhite";

function Partners() {
  return (
    <>
      <Banner page="Partners" img="/img/partner-banner.png" />
      <section className=" bg-[#F9F9F9] ">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-8 w-full my-10">
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-1.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-2.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-3.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-4.svg" alt="" className=" scale-90" />
          </div>

          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-5.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-6.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-7.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-8.svg" alt="" className=" scale-90" />
          </div>

          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-9.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="/img/partner-10.svg" alt="" className=" scale-90" />
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

export default Partners;
