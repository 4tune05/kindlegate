import React from 'react'
import UpcomingEvent from './UpcomingEvent';
import CloserToFooter from '../CloserToFooter';

export default function NewsbottomPage() {
  return (
    <section >
      
        <h3 className=" mt-[78px] text-center text-black text-4xl font-bold font-['Calibri'] leading-[72px]">
          Upcoming Event
        </h3>

        <UpcomingEvent />
        <UpcomingEvent />
        <UpcomingEvent />
      <CloserToFooter/>
    </section>
  );
}
