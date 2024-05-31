import Banner from "../components/Banner"
import BtnWhite from "../components/Buttons/BtnWhite"


function Event() {
  return (
    <>
    <Banner page="Upcoming Events" img="/img/event-banner.png" />
    <section className=" ">
      

    
    </section>

    
    <section className=" bg-colorPrimary flex flex-col justify-center items-center text-center text-white">
        <p className="text-2xl font-medium">
          Membership is open to All official registered Igbo Unions/Associations
          in Germany.
        </p>
        <BtnWhite />
      </section>
  </>
  )
}

export default Event