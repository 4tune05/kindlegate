import Involved from "./Get-Involved";



import DataVolunteer from "../components/volunData";
import CloserToFooter from "../CloserToFooter";

export default function page() {
  return (
    <section className="overflow-hidden">
     
      <Involved />
      <section className="mt-20">
        <div className="w-full max-w-[1000px]  mx-auto mt-7">
          <div className="w-[506px] mx-auto">
            <p className="text-center text-stone-900 text-4xl font-bold leading-[72px]">
              VOLUNTEER, PARTNER, MENTOR OR SPONSOR
            </p>
          </div>
          <div className="w-[w-[727px]  mt-10">
            <p className="text-center text-zinc-800 text-xl font-normal leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”
            </p>
          </div>
          <div className="w-[w-[727px]  mt-10">
            <p className="text-center text-zinc-800 text-xl font-normal leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”
            </p>
          </div>
        </div>
      </section>
      <hr className="w-full max-w-[1200px] mx-auto h-[8px] rounded-[32px] bg-[#E3B522] mt-40"></hr>

      <section className="mt-[90px] ">
        <div className="w-full max-w-[1200px] mx-auto">
          <p className="text-gray-900 text-[40px] font-bold">
            HERE ARE SOME WAYS TO BE A PART OF US
          </p>
        </div>

        <DataVolunteer />
      </section>

   <CloserToFooter/>
      
    </section>
  );
}
