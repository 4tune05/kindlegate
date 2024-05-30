
import CloserToFooter from "../components/CloserToFooter";

import Mentor from "./mentor";
import Button from "../components/apply-button";
import MentorData from "../components/mentor-data";

export default function page() {
  return (
    <section className="overflow-hidden">
      
      <Mentor />
      <section className="h-[718px] w-full mt-10">
        <div className="w-full max-w-[1000px] mx-auto ">
          <div className="p-10">
            <h6 className="text-[36px] text-[#14242C] font-bold text-center">
              Become a Mentor
            </h6>
            <hr className="w-[125px] bg-[#E3B522] h-[8px] rounded-[5px] mx-auto" />
          </div>
          <p className="w-[649px] mx-auto leading-[28px] mt-3 text-[20px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <p className="w-[649px] mx-auto leading-[28px] mt-10 text-[20px] font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra
          </p>
        </div>

        <Button/>
      </section> 
      <MentorData/>
      <CloserToFooter />
      
    </section>
  );
}
