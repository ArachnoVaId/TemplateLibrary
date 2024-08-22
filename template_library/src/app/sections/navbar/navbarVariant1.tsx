import Image from "next/image";

export default function Navbar1() {
  return (
    <section className="w-full h-[4.375vw] flex flex-col justify-center items-center bg-transparent relative">
      {/* Ornament background */}
        {/* navbar */}
        <div className="w-[68.906vw] h-[2.188vw] flex justify-between items-center top-0">
          <div className="flex gap-x-[0.625vw]">
            <Image
              src="/image/hero/hero4/Union.png"
              alt="Background"
              height={10000}
              width={10000}
              className="w-[2vw] object-fill"
            />
            <p className="text-[1.25vw] font-bold">Arachnova</p>
          </div>

          <div className="flex gap-x-3 items-center text-[0.781vw]">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Pricing</a>
            <a href="">Page</a>
            <button className="p-[0.417vw] border-[0.104vw] border-[#4273CE] rounded-[0.521vw] text-[#4273CE] ml-[0.8vw]">Contact Us</button>
          </div>
        </div>
        {/* navbar */}
    </section>
  );
}
