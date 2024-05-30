import CloserToFooter from "../CloserToFooter";
import CouncilBody from "./CouncilBody";

export default function page() {
  return (
    <section>
      <main className="relative overflow-hidden">
        <img
          className="w-full h-[808.14px]"
          src="/group-happy-african-volunteers-hugs-park-africa-volunteering-charity-people-ecology-concept 3.png"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="w-[700px] absolute top-[327.59px] left-[164.25px] h-[184px] flex-col gap-[30px] flex">
          <div className=" text-start text-zinc-100 text-[64px] font-bold  leading-[64px]">
            GOVERNING COUNCIL
          </div>
          <div className="self-stretch text-center text-zinc-100 text-xl font-normal font-['Calibri'] leading-snug">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </div>
        </div>
      </main>
      <CouncilBody/>
      <CloserToFooter/>
    </section>
  );
}
