import Image from "next/image";

const ContactUs = () => {
  return (
    <section>
      <div className="w-full md:h-[700px]">
        <div className="relative">
          <Image
            src="/contact.png"
            layout="fill"
            objectFit="cover"
            className="block bg-no-repeat bg-center"
            alt="Contact Us"
          />
        </div>
        <div className="absolute top-[100px] md:top-[270px] md:w-[589px] z-50 md:ml-[8%]">
          <h1 className="text-zinc-100 text-center font-bold md:text-[50px] mb-4">
            REACH US
          </h1>
          <p className="md:text-xl font-normal text-center text-zinc-100">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </p>
        </div>
        <div className="inset-0 absolute md:h-[700px] bg-black opacity-50"></div>
      </div>
    </section>
  );
};

export default ContactUs;
