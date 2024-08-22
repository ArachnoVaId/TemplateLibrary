import Image from "next/image";
import Navbar1 from "../navbar/navbarVariant1";

interface heroprops {
  navbar: JSX.Element
}

export default function Hero1({navbar}:heroprops) {
  return (
    <section className="w-full aspect-[1920/1080] flex flex-col items-center text-gray-800 relative">
      {/* Ornament background */}
      <Image
          src="/image/hero/hero1/bg_oval.png"
          alt="Ornament Background"
          width={10000}
          height={10000}
          className=" w-[65.156vw] h-[65.156vw] object-cover z-[0] absolute right-0"
        />
      {navbar}
      <div className="flex flex-col items-center h-[51.875vw] justify-center">
        <div className="w-[69.063vw] h-[27.813vw] flex z-[1] gap-y-[2vw]">
          <div className="w-[31.146vw] h-[19.479vw] my-[4vw] ">
            <h1 className="text-[2.604vw]/[3vw] font-bold mb-[1vw]">
              Find Your Next Meal: The Best Restaurants in Town Await
            </h1>
            <h1 className="text-[0.938vw] text-[#2C2C2C]">
              Find the perfect restaurant to satisfy your cravings and explore new
              flavors. With options for every taste and budget, you're sure to
              find something you'll love.
            </h1>
            <a
              href=""
              className="bg-[#4273CE] text-white font-semibold w-[6.667vw] h-[2.24vw] rounded-[0.521vw] text-[0.938vw] my-[1vw] text-center flex items-center justify-center hover:bg-[#5AB0BB] hover:scale-[102%] transition-all duration-700 ease-in-out"
            >
              Book Now
            </a>
          </div>
          <Image
            src="/image/hero/hero1/illustrations.png"
            alt="Illustration"
            width={2000}
            height={2000}
            className=" w-[37.656vw] h-[27.813vw] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
