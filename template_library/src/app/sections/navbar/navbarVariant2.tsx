import Image from "next/image";

export default function Navbar2() {
  return (
    <section className="w-full h-[4.375vw] flex flex-col justify-center items-center bg-gray-100 relative">
      {/* Ornament background */}
      <div className="w-full z-[1] gap-y-[5vw]">
        {/* navbar */}
        <div className="w-full bg-white py-[0.42vw] px-[3.121vw] flex justify-between items-center top-0">
          <div className="flex gap-x-[1.2vw] items-center">
            <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold mr-[1.2vw]">
              <Image
                src="/image/hero/hero4/Union.png"
                alt="Background"
                height={10000}
                width={10000}
                className="w-[2vw] object-fill"
              />
              <p className="text-[1.02vw]">Arachnova</p>
            </div>
            <a href="" className="font-bold text-[0.8vw]">Home</a>
            <a href="" className="font-bold text-[0.8vw]">About Us</a>
            <a href="" className="font-bold text-[0.8vw]">Pricing</a>
            <a href="" className="font-bold text-[0.8vw]"></a>
            <a href="" className="font-bold text-[0.8vw]"></a>
          </div>
          <button className="text-[0.82vw] bg-[rgba(66,115,206,1)] p-[0.833vw] rounded-[0.521vw] text-white">Contact Us</button>
        </div>
        {/* navbar */}
      </div>
    </section>
  );
}
