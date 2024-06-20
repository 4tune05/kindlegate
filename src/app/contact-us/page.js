import ContactUs from "./contactUs";
import Image from "next/legacy/image";
import CloserToFooter from "../CloserToFooter";

const Page = () => {
  return (
    <section className="overflow-hidden">
      <ContactUs />
      <section className="h-[486px] bg-sky-900 rounded-bl-[20px] rounded-br-[20px]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="pt-20">
            <p className="text-center text-white text-4xl font-bold">
              CONTACT INFORMATION
            </p>
          </div>
          <div className="flex items-center justify-between mt-20">
            <div>
              <h1 className="text-white text-[32px]">Address</h1>
              <div className="w-[77px] h-[0px] border-4 rounded-[5px] border-amber-400"></div>
              <p className="leading-[22.5px] text-white text-[20px] font-normal w-[378px] mt-6">
                The Grey Gate, Olushola Agbaje, Off Road 13 Lekki Phase I,
                Lagos, Nigeria.
              </p>
            </div>
            <div>
              <h1 className="text-white text-[32px]">Phone and Email</h1>
              <div className="w-[158px] h-[0px] border-4 rounded-[5px] mx-auto border-amber-400"></div>
              <div className="flex flex-col gap-3 mt-4">
                <h2 className="text-white text-[20px] text-center font-normal">
                  +234 818 038 0006
                </h2>
                <p className="text-white text-[20px] text-center font-normal">
                  info@kindlegatefoundation.org
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-white text-[32px]">Social Media</h1>
              <div className="flex justify-end">
                <hr className="border-4 w-[128px] rounded-[5px] border-amber-400"></hr>
              </div>
              <div className="[92px] flex items-center justify-end gap-3 mt-6">
                <Image
                  src="/baselinefacebook.svg"
                  alt="facebook"
                  className="w-6 h-6"
                  width={0}
                  height={0}
                />
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  className="w-6 h-6"
                  width={0}
                  height={0}
                />
                <Image
                  width={0}
                  height={0}
                  src="/twitter.svg"
                  alt="twitter"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center mb-20 justify-center">
        <div className="w-full max-w-[1000px] mx-auto">
          <h1 className="text-center text-[30px] text-[#1E1E1E] font-bold p-8">
            SEND A MESSAGE
          </h1>
          <form className="w-full flex flex-col gap-8 mt-10">
            <div className="flex items-center gap-10 w-full">
              <div className="w-full gap-2 flex flex-col">
                <label
                  htmlFor="first-name"
                  className="text-[20px] font-bold text-[#1E1E1E]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  placeholder=""
                  className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 w-full outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="last-name"
                  className="text-[20px] font-bold text-[#1E1E1E]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  placeholder=""
                  className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 w-full outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-10 w-full">
              <div className="w-full gap-2 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[20px] font-bold text-[#1E1E1E]"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=""
                  className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 w-full outline-none"
                />
                <span className="text-[20px] text-[#5F5F5F]">
                  example@example.com
                </span>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="phone"
                  className="text-[20px] font-bold text-[#1E1E1E]"
                >
                  PHONE NUMBER
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  placeholder=""
                  className="border border-[#A3A3A3] rounded-[10px] px-2 py-2 w-full outline-none"
                />
                <span className="text-[20px] text-[#5F5F5F]">
                  Please enter a valid phone number
                </span>
              </div>
            </div>
            <div className="w-[70%] mx-auto">
              <label
                htmlFor="message"
                className="text-[20px] font-bold text-[#1E1E1E]"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="resize-none border border-[#A3A3A3] rounded-[10px] px-2 py-2 w-full outline-none mt-2 h-[200px]"
                cols="80"
              ></textarea>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="w-[169px] bg-[#14BDE3] rounded-[56px] pt-[16px] pr-[56px] pb-[16px] pl-[56px] text-[20px] block font-medium text-[#1E1E1E]"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <CloserToFooter />
    </section>
  );
};

export default Page;
