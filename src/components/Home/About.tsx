import BtnPrimary from "../Buttons/BtnPrimary";

function About() {
  return (
    <section className='bg-[url("/img/about-bg.png")] bg-cover bg-center flex lg:flex-row flex-col items-center lg:gap-32 gap-10'>
      <div className="lg:w-[40%] w-full">
        <img
          src="/img/about-home.png"
          alt=""
          className="w-full object-cover rounded-[10px]"
        />
      </div>
      <div className="lg:w-[50%] w-full">
        <p className="text-colorPrimary font-semibold">ABOUT US</p>
        <h4 className=" font-semibold font-syne text-black">
          Founding and Early <br /> Development
        </h4>
        <p className=" 2xl:mt-3 mt-3 font-sora text-grayPrimary2">
          The foundation stone of this Great body was laid in Stuttgart on the
          1st day of October 2011-Which happened to be the First ever Igbo
          National Convention hosted by Igbo Congress Stuttgart e.V.
        </p>
        <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
          After a couple of years, the then chairman of Igbo Congress Stuttgart
          Mr.Ifeanyi Ezeani thought it wise that a National representative
          council/forum for All Igbo's in Germany is long overdue and that he
          tabled to his executives who after reviewing the idea critically
          brought it to the general house who in turn after months of
          deliberations gave the idea their blessing.
        </p>
        <div>
          <BtnPrimary />
        </div>
      </div>
    </section>
  );
}

export default About;
