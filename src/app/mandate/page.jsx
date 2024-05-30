import React from "react";
import Mandates from "./Mandates";
import Aboutus from "../components/Aboutus";
import Team from "../components/Team";
import Partners from "../components/Partners";
import CloserToFooter from "../CloserToFooter";

export default function page() {
  return (
    <section className="overflow-hidden">
      <Mandates />
      <Aboutus />
      <Team />
      <Partners />
      <CloserToFooter />
    </section>
  );
}
