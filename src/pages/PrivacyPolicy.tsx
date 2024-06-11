import Banner from "../components/Banner";
import BtnWhite from "../components/Buttons/BtnWhite";

function Privacy() {
  return (
    <>
      <Banner page="Privacy" img="/img/Privacy-banner.png" />
      <section className=" ">
        <div className=" w-full">
          <h4 className=" font-semibold font-syne text-black">
            Privacy Policies
          </h4>
          <p className="  mt-5">
            Lorem ipsum dolor sit amet consectetur. Amet consectetur eget
            ultricies eu tortor aliquam. Scelerisque amet imperdiet euismod et
            senectus et at. Habitant odio at placerat viverra arcu blandit.
            Aenean at ultrices tortor ullamcorper vestibulum. Integer ut euismod
            egestas volutpat mi dolor. Quis odio et tellus curabitur fusce odio.
            Sit eget velit sed adipiscing. Fusce nisl nisi placerat nunc
            facilisi. Magna leo sagittis ultrices urna sed pellentesque sit.
            Odio purus egestas malesuada elementum imperdiet tortor sit
            imperdiet varius. Quam varius imperdiet sed phasellus netus a proin
            libero lacinia. Malesuada nisl malesuada proin nibh. Nibh risus
            ullamcorper nullam tristique. Arcu elementum eu habitant molestie
            risus fermentum sollicitudin id nulla. A donec senectus vitae
            gravida. Vitae in aliquam ullamcorper quisque tristique ultrices
            diam elit. Potenti arcu nunc mauris donec nisl massa. Nec porttitor
            est risus aliquet. Dictum et tincidunt pharetra sed diam sociis
            malesuada commodo.
          </p>
          
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

export default Privacy;
