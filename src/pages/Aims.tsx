import Banner from "../components/Banner"
import BtnWhite from "../components/Buttons/BtnWhite"
import List from "../components/List"


function Aims() {
  return (
    <>
    <Banner page="Aims and Objective" img="/img/aim-banner.png" />
    <section className=" ">
      <div className="flex lg:flex-row flex-col items-center lg:gap-32 gap-10">
        <div className="lg:w-[40%] w-full">
          <img
            src="/img/gallery-8.png"
            alt=""
            className="w-full object-cover rounded-[10px]"
          />
        </div>
        <div className="lg:w-[50%] w-full">
        
          <h4 className=" font-semibold font-syne text-black">
          Aims and Objectives.
          </h4>
          <List
          items={[
            "To foster unity amongst Ndi-Igbo and other Nigerians in Germany.",
            "To Promote the art, culture and tradition of Ndi-Igbo among the larger Nigerian culture.",
            "To promote the Socio-cultural and economic interests of Ndi-Igbo in Germany ,as well  as to strengthen the socio-economic ties that exists between the Federal Republic of  Nigeria and the Federal Republic of Germany.",
            "To provide a platform and a common forum for all Igbo Associations and Unions in  Germany to discuss and interact on issues concerning Ndi-Igbo in Germany and  worldwide.",
            "To assist wherever possible in providing modern amenities and supporting development projects in Igbo communities wherever and as  deemed appropriate.",
            
          ]}
        />
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
  )
}

export default Aims