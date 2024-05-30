import React from 'react'
import BlogBody from './BlogBody';
import CloserToFooter from '../CloserToFooter';

export default function page() {
  return (
    <section>
      <main className="relative">
        <img
          className="w-full h-[808.14px]"
          src="/group-afro-americans-working-together 1.png"
        />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="w-[700px] absolute top-[327.59px] right-[164.25px] h-[184px] flex-col gap-[30px] flex">
          <div className=" text-center text-zinc-100 text-[64px] font-bold  leading-[64px]">
            BLOG
          </div>
          <div className="self-stretch text-center text-zinc-100 text-xl font-normal font-['Calibri'] leading-snug">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est.{" "}
          </div>
        </div>
      </main>
      <BlogBody/>
      
      <CloserToFooter/>
    </section>
  );
}
