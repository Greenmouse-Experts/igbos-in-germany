import BtnPrimary from "../Buttons/BtnPrimary";
import List from "../List";

function Program() {
  return (
    <section className=" bg-cover bg-center flex lg:flex-row flex-col items-center lg:gap-32 gap-10 relative my-10">
      <div className="lg:w-[55%] w-full">
        <p className="text-colorPrimary font-semibold">PROGRAMS</p>
        <h4 className=" font-semibold text-black">
          Empowering Communities Through Diverse Programs
        </h4>
        <div className="mt-5">
          <List
            items={[
              "Engage, Learn, and Grow with Our Programs",
              "Building Understanding Through Dynamic Programs",
              "Nurturing Community through Cultural Programs",
              "Transformative Programs for All Ages and Backgrounds",
              "Innovative Programs for Cultural Exchange and Growth",
              "Diverse Programs for a Diverse Community",
              "Bridging Cultures Through Education and Outreach",
            ]}
          />
        </div>
        <div>
          <BtnPrimary />
        </div>
      </div>
      <div className="lg:w-[40%] w-full">
        <img
          src="/img/program-hand.png"
          alt=""
          className="w-full object-cover rounded-[10px]"
        />
      </div>

      <img
        src="/img/program-img.png"
        alt=""
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2  scale-75"
      />
    </section>
  );
}

export default Program;
