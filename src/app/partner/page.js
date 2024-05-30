import CloserToFooter from "../CloserToFooter";
import PartnerBody from "./PartnerBody"

export default function page() {
  return (
    <section>
      <main className="relative overflow-hidden">
        <img
          className="w-full h-[808.14px]"
          src="/close-up-community-concept-with-hands 4.png"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </main>
      <PartnerBody/>
      <CloserToFooter />
    </section>
  );
}
