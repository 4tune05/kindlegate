import Link from "next/link";

const Button = () => {
  return (
    <div className="flex justify-center mt-20">
      <button
        type="submit"
        className="w-[169px] bg-[#14BDE3] rounded-[56px] pt-[16px] pr-[56px] pb-[16px] pl-[56px] text-[20px] block  font-medium text-[#1E1E1E]"
      >
        <Link href="/mentor-form">APPLY</Link>
      </button>
    </div>
  );
};
export default Button;
