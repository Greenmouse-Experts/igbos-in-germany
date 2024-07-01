import Banner from "../components/Banner";
import BtnWhite from "../components/Buttons/BtnWhite";

function Partners() {
  return (
    <>
      <Banner page="Partners" img="/img/partner-banner.png" />
      <section className=" bg-[#F9F9F9] ">
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-8 w-full my-10">
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225217/Ndi-Igbo%20Germany/partner-1_fjwly4.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225161/Ndi-Igbo%20Germany/partner-2_jtocwa.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225170/Ndi-Igbo%20Germany/partner-3_xfqfp2.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225156/Ndi-Igbo%20Germany/partner-4_atkf7x.svg" alt="" className=" scale-90" />
          </div>

          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225212/Ndi-Igbo%20Germany/partner-5_wwxnji.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225168/Ndi-Igbo%20Germany/partner-6_hdbt9z.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225186/Ndi-Igbo%20Germany/partner-7_erht3v.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225177/Ndi-Igbo%20Germany/partner-8_hyyrmw.svg" alt="" className=" scale-90" />
          </div>

          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225175/Ndi-Igbo%20Germany/partner-9_y3iizs.svg" alt="" className=" scale-90" />
          </div>
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225178/Ndi-Igbo%20Germany/partner-10_xedfys.svg" alt="" className=" scale-90" />
          </div>
          {/* <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225188/Ndi-Igbo%20Germany/partner-11_npvbvv.svg" alt="" className=" scale-90" />
          </div> */}
          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719225198/Ndi-Igbo%20Germany/partner-12_tglnuj.svg" alt="" className=" scale-90" />
          </div>

          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719657470/Ndi-Igbo%20Germany/partner-14_go9k3y.png" alt="" className=" scale-75" />
          </div>

          <div className="bg-white px-10 h-[177px] flex items-center justify-center rounded-xl ">
            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719656425/Ndi-Igbo%20Germany/partner-13_y25nxb.png" alt="" className=" scale-90" />
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
