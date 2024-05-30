import CloserToFooter from "../CloserToFooter";
import VolunteerBody from "./VolunteerBody";


export default function page() {
  return (
    <section>
      <main className="relative overflow-hidden">
        <img className="w-full h-[808.14px]" src="/unsplash_Kz8nHVg_tGI.png" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="w-[600px] absolute top-[252px] left-[164.25px] h-[184px] flex-col gap-[30px] flex">
          <div className=" text-start text-zinc-100 text-[64px] font-bold  leading-[64px]">
            OUR VOLUNTEERS
          </div>
          <div className="self-stretch text-center text-zinc-100 text-xl font-normal font-['Calibri'] leading-snug">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.
          </div>
          <div className="w-44 h-[60px] px-14 py-4 mt-[70px] bg-cyan-500 rounded-[56px] justify-center items-center gap-2 mx-auto flex">
            <button className="text-stone-900 text-[25px] font-bold font-['Calibri'] leading-7">
              APPLY
            </button>
          </div>
        </div>
      </main>
<VolunteerBody/>
      <CloserToFooter />
    </section>
  );
}
