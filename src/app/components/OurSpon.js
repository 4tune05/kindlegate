import Image from "next/image";

const data = [
  {
    id: 1,
    header: "LOREM IPUSM",
    img: `/rec.png`,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 2,
    header: "LOREM IPUSM",
    img: `/rec.png`,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 3,
    header: "LOREM IPUSM",
    img: `/rec.png`,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 4,
    img: `/rec.png`,
    header: "LOREM IPUSM",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 5,
    header: "LOREM IPUSM",
    img: `/rec.png`,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 6,
    header: "LOREM IPUSM",
    img: `/rec.png`,
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];

const Sponsors = () => {
  return (
    <section className="mb-20 w-full max-w-[1250px] h-[969px] mt-20 mx-auto">
      <div className="mb-10 w-[480px]">
        <p className="text-[35px] text-[#14242C] font-bold">Our Sponsorship Package</p>
        <hr className="w-[206px] bg-[#E3B522] h-[8px] rounded-[5px] mx-auto" />

      </div>
     
      <div className="grid grid-cols-3 gap-5 ">
        {data.map((item) => (
          <div className="w-[365px] h-[349px] flex flex-col gap-10  border border-[#14242C] rounded-[8px]" key={item.id}>
            <h1 className="text-center text-[32px] text-[#14242C] font-bold mt-5">{item.header}</h1>
            <Image src={item.img} width={216} height={104} className="block mx-auto"/>
            <p className="text-[20px] text-[#14242C] font-normal leading-[28px] text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Sponsors;
