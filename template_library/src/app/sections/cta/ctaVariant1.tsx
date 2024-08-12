import Image from "next/image";

export default function cta1() {
  return (
    <section className="w-full min-h-[27.135vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[91.667vw] h-[14.635vw] flex flex-col items-center justify-center">
        <h1 className="w-[91.667vw] h-[3.229vw] text-[#565656] flex justify-center items-center text-[2.917vw] font-bold">
          Your team. Your projects.
        </h1>
        <h1 className="w-[91.667vw] h-[3.229vw] text-[#407BFF] flex justify-center items-center text-[2.917vw] font-bold mt-[1vw]">
          Always together.
        </h1>
        <p className="w-[91.667vw] h-[1.51vw] text-[#6C6C6C] text-[0.938vw] flex justify-center items-center font-bold mt-[1.7vw]">
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>
        <div className="w-[27.5vw] h-[2.917vw] flex justify-center items-center bg-[#407BFF] rounded-[0.521vw] mt-[1.7vw]">
            <h1 className="text-white text-[1.042vw]">Start For Free</h1>
        </div>
      </div>
    </section>
  );
}
