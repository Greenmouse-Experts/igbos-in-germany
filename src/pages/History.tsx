
import Banner from "../components/Banner";
import BtnWhite from "../components/Buttons/BtnWhite";


function History() {
  return (
    <>
      <Banner page="History" img="/img/history-banner.png" />
      <section className=" ">
        <div className="flex lg:flex-row flex-col items-center lg:gap-32 gap-10">
          <div className="lg:w-[40%] w-full">
            <img
              src="/img/gallery-2.png"
              alt=""
              className="w-full object-cover rounded-[10px]"
            />
          </div>
          <div className="lg:w-[50%] w-full">
            <p className="text-colorPrimary font-semibold">ABOUT US</p>
            <h4 className=" font-semibold font-syne text-black">
              Founding and Early <br /> Development
            </h4>
            <p className=" 2xl:mt-3 mt-3">
            Ndi-Igbo Germany e.V is a Socio-Cultural Organisation and the Apex body of all the Igbo Unions in the Federal Republic of Germany.
            </p>
            <p className=" 2xl:mt-5 mt-3">
            The foundation stone of this Great body was laid in Stuttgart on the 1st day of October 2011-Which happened to be the First ever Igbo National Convention hosted by Igbo Congress Stuttgart e.V. 


            </p>

            <p className=" 2xl:mt-5 mt-3">
            After a couple of years, the then chairman of Igbo Congress Stuttgart Mr.Ifeanyi Ezeani thought it wise that a National representative council/forum for All Igbo's in Germany is long overdue and that he tabled to his executives who after reviewing the idea critically brought it to the general house who in turn after months of deliberations gave the idea their blessing.

            </p>
          </div>
        </div>
      </section>


      <section className=" ">
        <div className="flex lg:flex-row flex-col items-center lg:gap-32 gap-10">
          <div className="lg:w-[50%] w-full">
            <p className=" 2xl:mt-3 mt-3">
            Then came the next step i.e consultations and visitations to other Unions to seek and get  their opinion/s which after it was gotten culminated into the First Igbo National  Convention held in Stuttgart on 1st October 2011.
            </p>
            <p className=" 2xl:mt-5 mt-3">
            On that day,Eleven Unions namely; Igbo Congress Stuttgart e.V (host), Igboezue Ulm e.V,  Nzuko Ndi e.V Heilbronn, Nzuko Ndi Igbo Hannover, Igbo Cultural Organisation e.V  Mannheim, Igbo Union München e.V, Obi-Igbo e.V Frankfurt,Igbo Community Union  Southwest Germany e.V, Igbo Union Münster e.V, Hamburg and Igbo Cultural  Organisation Mainz-Wiesbaden were present.
            </p>

            <p className=" 2xl:mt-5 mt-3">
            Deliberations was very swift and direct on that said day and by the close of business, it  was unanimously agreed that a central Igbo Umbrella Union be formed immediately to  represent the Igbos living in Germany which was done and christened “Ohanaeze Ndigbo  Germany”.
            </p>
            <p className=" 2xl:mt-5 mt-3">
            It was decided that those that represented and will continue to represent their Unions be  called “Delegates” and that the delegates Assembly should consist of the delegates and  Chairmen of all respective unions.
            </p>
          
          </div>
          <div className="lg:w-[40%] w-full">
            <img
              src="/img/history-img2.png"
              alt=""
              className="w-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </section>

      <section className=" ">
        <div className="flex lg:flex-row flex-col items-center lg:gap-32 gap-10">
        <div className="lg:w-[40%] w-full">
            <img
              src="/img/history-img3.png"
              alt=""
              className="w-full object-cover rounded-[10px]"
            />
          </div>
          <div className="lg:w-[50%] w-full">
            <p className=" 2xl:mt-3 mt-3">
            The next delegates meeting was there and then scheduled for March 2012 in Heilbronn.
            </p>
            <p className=" 2xl:mt-5 mt-3">
            The death of Dim Sir.Chief Odumegwu Ojukwu lead to the calling of an emergency  meeting of all Igbos living Germany from all works of life (irrespective of their Unions  affiliation) in Bonn to deliberate on how best to give the great leader a befitting burial.
            </p>

            <p className=" 2xl:mt-5 mt-3">
            At that meeting and a follow-up meeting in Frankfurt am Main thereafter , deliberations  were majorly centred on the burial arrangements and the way forward for Ndi Igbo in  Germany in general.
            </p>
            <p className=" 2xl:mt-5 mt-3">
            Despite efforts from some certain quarters to abandon the established structure from   Stuttgart, majority agreed that a foundation stone is already in place and that will be built  upon.
            </p>

            <p className=" 2xl:mt-5 mt-3">
            However  the name “Ohanaeze Ndi Igbo” a body representing the igbos in Nigeria due to  some political undertone was deemed  inappropriate for us here in Germany and  therefore the adaptation of a much simpler but representative name “Ndi-igbo Germany
            </p>
          
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

export default History;
