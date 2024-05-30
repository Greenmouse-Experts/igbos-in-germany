import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import BtnWhite from "../Buttons/BtnWhite";

function Clients() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="border-t border-grayPrimary  bg-[#F9F9F9] text-black pb-10 pt-16 ">
        <div className="flex justify-between items-center mb-10">
          <h4 className=" w-fit  ">Our Partner Organizations</h4>
          <div className="flex gap-5 items-center justify-end h-fit">
          
            <div 
              onClick={sliderRef?.slickPrev} className="flex items-center text-black font-semibold cursor-pointer">
              <span>
                <FiArrowLeft color="black" />
              </span>
              <p>Prev</p>
            </div>

            <div 
              onClick={sliderRef?.slickNext} className="flex items-center text-black font-semibold cursor-pointer">
              <p>Next</p>
              <span>
                <FiArrowRight color="black" />
              </span>
            </div>

          </div>
        </div>
        <div className=" transition-all">
          <Slider ref={setSliderRef} {...settings}>
            <div className="!flex justify-center items-center bg-white rounded-[1.4rem] h-[11rem]">
              <img
                src="/img/partner-1.svg"
                alt="partner"
                className=" scale-75"
              />
            </div>
            <div className="!flex justify-center items-center bg-white rounded-[1.4rem] h-[11rem]">
              <img
                src="/img/partner-2.svg"
                alt="partner"
                className=" scale-75 "
              />
            </div>
            <div className="!flex justify-center items-center bg-white rounded-[1.4rem] h-[11rem]">
              <img
                src="/img/partner-3.svg"
                alt="partner"
                className=" scale-75 "
              />
            </div>
            <div className="!flex justify-center items-center bg-white rounded-[1.4rem] h-[11rem]">
              <img
                src="/img/partner-4.svg"
                alt="partner"
                className=" scale-75 "
              />
            </div>
            <div className="!flex justify-center items-center bg-white rounded-[1.4rem] h-[11rem]">
              <img
                src="/img/partner-1.svg"
                alt="partner"
                className=" scale-75 "
              />
            </div>
            <div className="!flex justify-center items-center bg-white rounded-[1.4rem] h-[11rem]">
              <img
                src="/img/partner-2.svg"
                alt="partner"
                className=" scale-75 "
              />
            </div>
          </Slider>
        </div>
        <div className="flex items-center mt-20 flex-wrap justify-between"></div>
      </section>

      <section className=" bg-[url('/img/igbo-attire.png')] flex flex-col items-center text-white text-center mt-28">
        <p className=" text-3xl font-semibold">
          The Igbo Cultural Association of Germany is a non-profit organization
          dedicated to preserving awareness of the culture of the Igbo People in
          our community.
        </p>
        <p className="text-xl font-medium mt-5">
          Membership is open to All official registered Igbo Unions/Associations
          in Germany.
        </p>
        <BtnWhite color="green" />
      </section>
    </>
  );
}

export default Clients;
{
  /* <img
            src="/img/client-1.svg"
            alt="client"
            className=" scale-75 "
          />
          <img
            src="/img/client-2.svg"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          />
          <img
            src="/img/client-3.svg"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          />
          <img
            src="/img/client-4.svg"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          />
          <img
            src="/img/client-5.svg"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          />
          <img
            src="/img/client-6.svg"
            alt="client"
            className="mix-blend-luminosity grayscale mx-1 max-w-[130px] max-h-[50px] "
          /> */
}
