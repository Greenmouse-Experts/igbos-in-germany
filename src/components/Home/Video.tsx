import ReactPlayer from "react-player";

function Video() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 ">
      <h4 className=" font-semibold text-black">
        Igbo Convention Stuttgait Official Video
      </h4>
      <div className="xl:w-[80%] w-full md:h-[34rem] h-[24rem] mx-auto flex justify-center ">
        <ReactPlayer url="https://youtu.be/wMPbkF1ORi4?si=-NCsJVI8r0cdiArQ"
          controls={true} 
          width="100%"
          height="100%"
        />
      </div>
      {/* <img src="/img/video.png" alt="video" className=" w-[80%]"  /> */}
    </section>
  );
}

export default Video;
