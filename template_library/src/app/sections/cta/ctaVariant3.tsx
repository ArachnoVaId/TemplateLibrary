import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function cta3() {
  return (
    <section className="w-full min-h-[25.833vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="relative w-[82.813vw] h-[19.583vw] bg-[#E5C4B9] rounded-[0.521vw] overflow-hidden">
        <h1 className="text-center text-[3.11vw] mt-[0.5vw]">
          Connect with <span className="font-bold">Us</span>
        </h1>
        <Image
          src="/image/cta/coffee1.png"
          alt="coffee"
          width={10000}
          height={10000}
          className="w-[22.292vw] h-[16.771vw] absolute bottom-0 left-0"
        />
        <Image
          src="/image/cta/coffee2.png"
          alt="coffee"
          width={10000}
          height={10000}
          className="w-[22.344vw] h-[26.719vw] absolute -top-[3.594vw] right-0"
        />
        <div className="w-[82.813vw] h-[5.625vw] flex items-center justify-center mt-[1.5vw]">
          <button className="w-[20.781vw] h-[5.625vw] flex items-center justify-center bg-[#593D29] rounded-[2.708vw] hover:bg-[#593D35] transition">
            <div className="text-white text-[3.958vw] mr-[0.7vw]">
              <FaWhatsapp />
            </div>
            <div className="text-right">
              <h1 className="font-bold text-white text-[1.6vw]">
                +628123456789
              </h1>
              <h1 className="font-bold italic text-white text-[1.458vw]">
                Steven Beans
              </h1>
            </div>
          </button>
        </div>
        <p className="text-center font-bold text-[0.938vw] mt-[2vw]">
          Available during regular business hours
        </p>
        <p className="text-center font-bold text-[0.833vw] mt-[0.5vw]">
          Monday - Saturday | 9 AM - 4 PM
        </p>
      </div>
    </section>
  );
}
