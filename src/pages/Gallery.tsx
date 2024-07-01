
import Banner from '../components/Banner'
import BtnWhite from '../components/Buttons/BtnWhite'

function Gallery() {
  return (
    <>
      <Banner page="Gallery" img="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226095/Ndi-Igbo%20Germany/gallery/gallery-banner_vh9fdf.png" /> 
      <section>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full my-10">
            
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226083/Ndi-Igbo%20Germany/gallery/gallery-1_v4lae3.png"
                alt=""
                className=" object-cover object-center "
              />
           
            
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226081/Ndi-Igbo%20Germany/gallery/gallery-2_yv24pa.png"
                alt=""
                className=" object-cover object-center"
              />
           
            
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226084/Ndi-Igbo%20Germany/gallery/gallery-3_a1gmt3.png"
                alt=""
                className=" object-cover object-center"
              />
           

            
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226083/Ndi-Igbo%20Germany/gallery/gallery-4_jrcra2.png"
                alt=""
                className=" object-cover object-center"
              />
           
            
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226088/Ndi-Igbo%20Germany/gallery/gallery-5_qolhxv.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226091/Ndi-Igbo%20Germany/gallery/gallery-6_gfcrsp.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226084/Ndi-Igbo%20Germany/gallery/gallery-7_e8srbg.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226086/Ndi-Igbo%20Germany/gallery/gallery-8_vrvdnn.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226093/Ndi-Igbo%20Germany/gallery/gallery-9_iemlwh.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226089/Ndi-Igbo%20Germany/gallery/gallery-10_zzicx7.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226089/Ndi-Igbo%20Germany/gallery/gallery-11_fxupsc.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226089/Ndi-Igbo%20Germany/gallery/gallery-13_igxqga.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226090/Ndi-Igbo%20Germany/gallery/gallery-14_ulyzyv.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226094/Ndi-Igbo%20Germany/gallery/gallery-15_lwrwy3.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226092/Ndi-Igbo%20Germany/gallery/gallery-16_bpi7gv.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226091/Ndi-Igbo%20Germany/gallery/gallery-17_nd3sij.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226092/Ndi-Igbo%20Germany/gallery/gallery-18_wdfxxa.png"
                alt=""
                className=" object-cover object-center"
              />
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1719226095/Ndi-Igbo%20Germany/gallery/gallery-19_q6qgld.png"
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