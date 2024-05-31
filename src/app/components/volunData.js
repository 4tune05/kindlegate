import Link from "next/link";

const DataVolunteer = () => {
  return (
    <section className="grid grid-cols-2 gap-[30px] w-full max-w-[1200px] mx-auto mt-11">
      <div className="mb-20" >
        <p className="text-[18px] font-normal leading-snug mb-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac tur
        </p>
        <div className=""></div>
        <Link href="volunteer">

        <button   type="submit"
          className="bg-[#E3B522] rounded-[56px] pt-[16px] pr-[56px] pb-[16px] pl-[56px] text-[20px] font-medium text-[#1E1E1E] block m-auto"
        >
      
          VOLUNTEER
          </button>
        </Link>
      </div>
      <div className="mb-20">
        <p className="text-[18px] font-normal leading-snug mb-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac tur
        </p>
        <Link href="/partner">

          <button type="submit"
          className="bg-[#E3B522] rounded-[56px] pt-[16px] pr-[56px] pb-[16px] pl-[56px] text-[20px] font-medium text-[#1E1E1E] block m-auto"
        >
          
          PARTNER
          </button>
        </Link>
      </div>
      <div className="mb-20">
        <p className="text-[18px] font-normal leading-snug mb-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac tur
        </p>
        <Link href="/mentor">

          <button  type="submit"
          className="bg-[#E3B522] rounded-[56px] pt-[16px] pr-[56px] pb-[16px] pl-[56px] text-[20px] font-medium text-[#1E1E1E] block m-auto"
        >
         
          MENTOR
          </button>
        </Link>
      </div>
      <div className="mb-20">
        <p className="text-[18px] font-normal leading-snug mb-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac tur
        </p>
        <Link href="/sponsor">
          <button  type="submit"
          className="bg-[#E3B522] rounded-[56px] pt-[16px] pr-[56px] pb-[16px] pl-[56px] text-[20px] font-medium text-[#1E1E1E] block m-auto"
        >
         
          SPONSOR
          </button>
        </Link>
      </div>
    </section>
    


  );
};

export default DataVolunteer;
