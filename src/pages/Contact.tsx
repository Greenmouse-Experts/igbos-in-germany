
import { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Banner from "../components/Banner";
import InputText from "../components/InputText";

function Contact() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGaiubUdqf5Bypla2u6eSlVDmvopME5ew",
  });

  const [center] = useState({
    lat: 6.431111,
    lng: 3.415833,
  });
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <>
      <Banner page="Contact Us" img="/img/contact-banner.png" />

      <section className="padding">
        <div className="flex lg:flex-row flex-col gap-10 items-center">
          <div className="bg-white card-shadow dark:bg-bluePrimary dark:text-white   shadow-lg rounded-md p-5 py-8 flex flex-col items-center text-center lg:w-[33%]  w-full">
            <div className=" bg-colorPrimary p-4 rounded-full w-fit scale-90">
              {" "}
              <img src="/icons/contact-1.svg" alt="location" className=" scale-90" />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Address </h4>
              <p> 60090 frankfurt am Main Germany</p>
            </div>
          </div>
          <div className="bg-white card-shadow  dark:bg-bluePrimary dark:text-white  shadow-lg rounded-md p-5 py-8 flex flex-col items-center text-center lg:w-[33%]  w-full">
          <div className=" bg-colorPrimary p-4 rounded-full w-fit scale-90">
              {" "}
              <img src="/icons/contact-2.svg" alt="location" className=" scale-90" />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Phone Number</h4>
              <p> +49 162 2906722</p>
            </div>
          </div>
          <div className="bg-white card-shadow dark:bg-bluePrimary dark:text-white   shadow-lg rounded-md p-5 py-8 flex flex-col items-center text-center lg:w-[33%]  w-full">
          <div className=" bg-colorPrimary p-4 rounded-full w-fit scale-90">
              {" "}
              <img src="/icons/contact-3.svg" alt="location" className=" scale-90" />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Email Address</h4>
              <p> info@ndiigbogermany.org </p>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="flex lg:flex-row gap-10 flex-col mt-32">
          <div className="lg:w-[50%] w-full">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "90%" }}
                zoom={16}
                center={center}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <h4>Loading...</h4>
            )}
          </div>
          <div className="bg-bluePrimary text-white px-8  py-10 lg:w-[50%] w-full   md:ml-3 ml-0 shadow-md">
            <form
              className="flex flex-col 2xl:gap-8 gap-5 "
              onSubmit={(e) => e.preventDefault()}
            >
              <div className=" flex md:flex-row flex-col justify-between gap-8 ">
               
               <InputText label="Name" placeholder="Enter full name" type="text"/>
               <InputText label="Phone" placeholder="Enter phone number" type="tel"/>
              </div>
              <div className=" ">
              <InputText label="Email" placeholder="Enter email address" type="email"/>
              </div>
              <div className=" ">
              <InputText label="Subject" placeholder="Subject" type="text"/>
              </div>
              <div className=" ">
              <label className="text-black">Message</label>
                <textarea
                  placeholder="Message"
                  className="bg-[#F4F4F4] text-black h-[120px] pl-5 w-full pt-4 placeholder:text-bluePrimary"
                />
              </div>
              <button type="submit" className=" bg-colorPrimary btn btn-green rounded-md text-white font-semibold py-3">
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
