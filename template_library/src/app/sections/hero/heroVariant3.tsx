import Image from "next/image";
import Navbar3 from "../navbar/navbarVariant3";

interface heroprops{
  navbar: JSX.Element
}

export default function Hero3() {
  return (
    <section className="w-full aspect-[1920/1080] flex flex-col justify-center items-center bg-gray-100 relative">
      {/* Ornament background */}
      <Image
        src="/image/hero/hero3/bg.png"
        alt="Background"
        height={10000}
        width={10000}
        className="w-[100vw] h-[56.25vw] object-cover z-[0] absolute"
      />
      <div className="w-full h-[56.25vw] z-[1] gap-y-[5vw] p-[2.083vw]">
        {/* navbar */}
        {/* {navbar} */}
        {/* navbar */}

        {/* content */}
        <div className="w-full flex flex-col justify-center items-center text-white gap-y-[3.333vh] pt-[9.469vw]">
          <div className="text-center flex flex-col items-center">
            <p className="text-[6.661vw] font-britannic">YOUR COZY CORNER</p>
            <p className="text-[3.125vw] font-bebasneue text-center">for Coffee & Conversation</p>
            <p className="text-[0.989vw] w-[46.56vw] text-center">Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc. In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus pharetra.</p>
          </div>
          <button className="bg-orange-brown py-2 px-4 rounded-full text-[0.833vw]">SEE OUR BEVERAGES</button>
          <div className="flex items-center justify-center gap-x-[2.083vw]">
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
