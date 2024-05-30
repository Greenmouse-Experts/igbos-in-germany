
import Banner from '../components/Banner'
import BtnWhite from '../components/Buttons/BtnWhite'

function Gallery() {
  return (
    <>
      <Banner page="Gallery" img="/img/gallery-banner.png" /> 
      <section>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full my-10">
            
              <img
                src="/img/gallery-1.png"
                alt=""
                className=" object-cover object-center "
              />
           
            
              <img
                src="/img/gallery-2.png"
                alt=""
                className=" object-cover object-center"
              />
           
            
              <img
                src="/img/gallery-3.png"
                alt=""
                className=" object-cover object-center"
              />
           

            
              <img
                src="/img/gallery-4.png"
                alt=""
                className=" object-cover object-center"
              />
           
            
              <img
                src="/img/gallery-5.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-6.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-7.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-8.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-9.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-10.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-11.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-13.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-14.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-15.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-16.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-17.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-18.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="/img/gallery-19.png"
                alt=""
                className=" object-cover object-center"
              />
           
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

export default Gallery