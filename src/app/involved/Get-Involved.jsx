import Image from "next/image";


const Involved = () => {
  return (
    <section className="">
      <div className="w-full  md:h-[700px]">
        <div className="relative">
          <img
            src="/volunteer.png"
            // width={0}
            // height={0}
            

            className=" w-full h-[700px] object-cover block bg-no-repeat bg-center"
            alt="boardImage"
          />
        </div>
        <div className="absolute top-[100px] md:top-[270px] md:w-[589px] z-10  md:ml-[8%]">
          <h1 className="text-zinc-100 text-center  font-bold md:text-[50px] mb-4">
            GET INVOLVED
          </h1>
          <p className="md:text-xl font-normal text-center text-zinc-100">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>

        <div className="inset-0 absolute md:h-[700px] bg-black/25"></div>
      </div>
    </section>
  );
};
export default Involved;
