import About from "../components/Home/About"
import Banner from "../components/Home/Banner"
import Clients from "../components/Home/Clients"
import Event from "../components/Home/Event"
import Program from "../components/Home/Program"
import Video from "../components/Home/Video"


function Home() {
  return (
    <>
    <Banner/>
    <About/>
    <Clients/>
    <Program/>
    <Video/>
    <Event/>
    </>
  )
}

export default Home