import HomePageBody from "./HomePageBody";
// import RoadMap from "./RoadMap"; // Commented out to resolve ESLint error
import FeaturedProgram from "./FeaturedProgram";
import CloserToFooter from "./CloserToFooter";
export default function Home() {
  return (
    <section>
      <main className="relative w-full h-[786px]">
        <div className="absolute top-0 -z-50 w-full h-[798px] ">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url('/close-up-community-concept-with-hands 1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className=" fixed inset-0 bg-black/50"></div>
          
        </div>

        <div className="w-full h-full flex justify-end">
          <div className="w-[589px] h-auto py-[22px] flex flex-col justify-center items-center gap-4 mr-10">
            <div className="h-[295px] px-[60px] pb-7 flex flex-col justify-start items-start gap-[26px]">
              <div className="text-zinc-100 text-[64px] font-bold font-['Calibri'] leading-[64px]">
                KINDLEGATE FOUNDATION
              </div>
              <div className="self-stretch text-justify text-zinc-100 text-xl font-normal font-['Calibri'] leading-snug">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce
                est.
              </div>
            </div>
            <div className="w-[361px] px-14 py-4 bg-cyan-500 rounded-[56px] flex justify-center items-center gap-2">
              <div className="text-zinc-950 text-[25px] font-bold font-['Calibri'] leading-7">
                GET INVOLVED
              </div>
            </div>
            <div className="px-14 py-4 bg-amber-400 rounded-[56px] flex justify-center items-center gap-2">
              <div className="text-black text-[25px] font-bold font-['Calibri'] leading-7">
                KINDLEGATE CAUSE SHOP
              </div>
            </div>
          </div>
        </div>
      </main>
      <HomePageBody />
      {/* <RoadMap/> */}
      <FeaturedProgram />
      <CloserToFooter />
    </section>
  );
}
