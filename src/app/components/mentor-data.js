// import { data } from "./dummy-data";
import { CiUser } from "react-icons/ci";
const MentorData = () => {
  return (
    <section className="w-full h-[780px]">
      <div className="w-full mx-auto">
        <div>
          <h3 className="text-[36px] font-bold text-[#14242C] text-center">
            Meet Our Mentors
          </h3>
          <hr className="w-[125px] bg-[#E3B522] h-[8px] rounded-[5px] mx-auto" />
        </div>
        <div className="flex items-center justify-between max-w-[1200px]  mx-auto  w-full mt-28">
          <div>
            <div>
              <CiUser className="bg-[#E3B522] w-[356px]  h-[360px] mx-auto rounded-md text-[#D9D9D9] mb-2 " />
              <h1 className="font-bold text-[32px] text-center text-[#14242C] border-[#E3B522]">
                LOREM IPSUM
              </h1>
              <hr className="w-[206px] mx-auto h-[8px] rounded-[5px] bg-[#E3B522]"></hr>
              
            </div>
          </div>
          <div>
            <div>
              <CiUser className="bg-[#E3B522] w-[356px]  h-[360px] mx-auto rounded-md text-[#D9D9D9] mb-2 " />
              <h1 className="font-bold text-[32px] text-center text-[#14242C] border-[#E3B522]">
                LOREM IPSUM
              </h1>
              <hr className="w-[206px] mx-auto h-[8px] rounded-[5px] bg-[#E3B522]"></hr>
              
            </div>
          </div>
          <div>
            <div>
              <CiUser className="bg-[#E3B522] w-[356px]  h-[360px] mx-auto rounded-md text-[#D9D9D9] mb-2 " />
              <h1 className="font-bold text-[32px] text-center text-[#14242C] border-[#E3B522]">
                LOREM IPSUM
              </h1>
              <hr className="w-[206px] mx-auto h-[8px] rounded-[5px] bg-[#E3B522]"></hr>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MentorData;
