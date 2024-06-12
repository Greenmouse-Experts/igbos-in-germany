import Banner from "../components/Banner";
import BtnWhite from "../components/Buttons/BtnWhite";

function Excos() {
  return (
    <>
      <Banner page="Excos / Leadership" img="/img/excos-banner.png" />
      <section className=" grid grid-cols-[repeat(auto-fill,_minmax(25rem,_1fr))] gap-12">
        <div className=" flex flex-col justify-center">
          <img
            src="/img/excos-1.png"
            alt=""
            className=" "
          />
          <div className="bg-colorPrimary  px-12 py-4 text-white flex  items-end justify-center w-full text-center rounded-b-[5px]" >
            <div>
              <h6 className="text-xl font-semibold ">High Chief Uzoma Benjamin </h6>
              <p className="text-base text-center">(Agbawodike-Izu)</p>
              <p className="font-normal text-base mt-2">Coordinator NIG</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <img
            src="/img/excos-2.png"
            alt=""
            className=" "
          />
          <div className="bg-colorPrimary  px-12 py-7 text-white flex  items-end justify-center w-full text-center rounded-b-[5px]" >
            <div>
              <h6 className="text-xl font-semibold ">Mr. J. Maurice Ifeanyi Ezeani</h6>
              <p className="font-normal text-base mt-2">Deputy Coordinator</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <img
            src="/img/excos-3.png"
            alt=""
            className=" "
          />
          <div className="bg-colorPrimary  px-12 py-7 text-white flex  items-end justify-center w-full text-center rounded-b-[5px]" >
            <div>
              <h6 className="text-xl font-semibold ">Uche Michael Onwuemenyi.</h6>
              <p className="font-normal text-base mt-2">PRO</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <img
            src="/img/excos-4.png"
            alt=""
            className=" "
          />
          <div className="bg-colorPrimary  px-12 py-7 text-white flex  items-end justify-center w-full text-center rounded-b-[5px]" >
            <div>
              <h6 className="text-xl font-semibold ">Hon. Kingsley Onwubiko</h6>
              <p className="font-normal text-base mt-2">Treasury NIG</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <img
            src="/img/excos-5.png"
            alt=""
            className=" "
          />
          <div className="bg-colorPrimary  px-12 py-7 text-white flex  items-end justify-center w-full text-center rounded-b-[5px]" >
            <div>
              <h6 className="text-xl font-semibold ">Chinasa Obimdi </h6>
              <p className="font-normal text-base mt-2">Financial secretary</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <img
            src="/img/excos-6.png"
            alt=""
            className=" "
          />
          <div className="bg-colorPrimary  px-12 py-7 text-white flex  items-end justify-center w-full text-center rounded-b-[5px]" >
            <div>
              <h6 className="text-xl font-semibold ">Joseph Chinasa Ezeji</h6>
              <p className="font-normal text-base mt-2">Secretary</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <img
            src="/img/excos-7.png"
            alt=""
            className=" "
          />
          <div className="bg-colorPrimary  px-12 py-7 text-white flex  items-end justify-center w-full text-center rounded-b-[5px]" >
            <div>
              <h6 className="text-xl font-semibold ">High Chief Obyzed Obinnaya</h6>
              <p className="font-normal text-base mt-2">Social Secretary</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <img
            src="/img/excos-8.png"
            alt=""
            className=" "
          />
          <div className="bg-colorPrimary  px-12 py-7 text-white flex  items-end justify-center w-full text-center rounded-b-[5px]" >
            <div>
              <h6 className="text-xl font-semibold ">Mrs Martha Ngozi</h6>
              <p className="font-normal text-base mt-2">Provost</p>
            </div>
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

export default Excos;
