import Image from "next/image";
import Navbar3 from "../navbar/navbarVariant3";

interface heroprops{
  navbar: JSX.Element
}

export default function Hero3() {
  return (
    <section className="w-full md:aspect-[1920/1080] aspect-[430/1080] flex flex-col justify-center items-center md:bg-gray-100 relative bg-amber-950">
      {/* Ornament background */}
      <Image
        src="/image/hero/hero3/bg.png"
        alt="Background"
        height={10000}
        width={10000}
        className="hidden w-[100vw] h-[56.25vw] object-cover z-[0] absolute"
      />
      <div className="w-full h-[56.25vw] z-[1] gap-y-[5vw] p-[2.083vw]">
        
        {/* content */}
        <div className="w-full flex flex-col justify-center items-center text-white gap-y-[3.333vh] pt-[9.469vw]">
          <div className="text-center flex flex-col items-center">
            <p className="md:text-[6.661vw] text-[14.512vw] font-britannic">YOUR COZY CORNER</p>
            <p className="md:text-[3.125vw] text-[6.856vw] font-bebasneue text-center">for Coffee & Conversation</p>
            <p className="md:text-[0.989vw] text-[2.614vw] md:w-[46.56vw] w-[70.93vw] text-center">Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc. In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus pharetra.</p>
          </div>
          <button className="bg-orange-brown py-2 px-4 rounded-full text-[0.833vw]">SEE OUR BEVERAGES</button>
          <div className="flex flex-col md:items-center md:justify-center gap-x-[2.083vw] md:gap-y-0 gap-y-[3vw]">
            <div className="w-[15.625vw] h-[7.916vw] text-right gap-y-2 bg-black/50 border-r-2 border-r-orange-brown rounded-md p-[0.625vw]">
              <p className="text-[1vw] font-poppins">Our Location</p>
              <p className="text-[0.833vw] font-poppins">Lorem ipsum dolor sit amet consectetur. Faucibus elit eget eget mauris auctor.</p>
            </div>
            <div className="w-[15.625vw] h-[7.916vw] text-left gap-y-2 bg-black/50 border-l-2 border-l-orange-brown rounded-md p-[0.625vw]">
              <p className="text-[1vw] font-poppins">Best Seller</p>
              <p className="text-[0.833vw] font-poppins">Lorem ipsum dolor sit amet consectetur. Faucibus elit eget eget mauris auctor.</p>
            </div>
          </div>
        </div>
        {/* content */}

      </div>
    </section>
  );
}
