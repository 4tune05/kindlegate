import { Boarddata } from "../components/dummy-data";
import { CiUser } from "react-icons/ci";
const BoardData = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-10 md:mt-24 gap-8">
      {Boarddata.map((item) => (
        <div className=" mx-auto  w-[80%]" key={item.id} >
        <CiUser className="bg-[#E3B522] w-full h-[360px]  rounded-md text-[#D9D9D9] " />
            <h1 className="p-2 mx-auto w-fit border-b-4 text-gray-900 font-normal border-[#E3B522]">
                {item.title}
            </h1>             
            <p className="mt-6 font-normal text-[14px] leading-[22px] ">
              {item.description}
            </p>
         
        </div>
      ))}
    </section>
  );
};

export default BoardData;
