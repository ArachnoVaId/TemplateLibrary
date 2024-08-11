import Image from "next/image";

export default function cta2() {
  return (
    <section className="w-full h-[8.802vw] p-8 flex flex-col justify-center items-center bg-[#407BFF] text-gray-800 relative">
      <div className="w-[33.417vw] h-[2.604vw] flex items-center justify-center">
        <h1 className="text-white text-[1.667vw] font-bold mr-[2.5vw]">
          Ready to get started?
        </h1>
        <a
          href=""
          className="bg-white text-black font-bold w-[11.979vw] h-[2.604vw] rounded-[0.521vw] text-[0.938vw] my-[1vw] text-center flex items-center justify-center hover:bg-slate-100 hover:scale-[102%] transition-all duration-700 ease-in-out"
        >
          Get A Free Quote
        </a>
      </div>
    </section>
  );
}
