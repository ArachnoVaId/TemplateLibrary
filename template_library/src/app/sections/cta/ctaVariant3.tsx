import Image from "next/image";

export default function cta3() {
  return (
    <section className="w-full min-h-[25.833vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      <div className="w-[82.813vw] h-[19.583vw] bg-[#E5C4B9] rounded-[0.521vw]">
        <h1 className="text-center text-[3.11vw] mt-[0.5vw]">
          Connect with <span className="font-bold">Us</span>
        </h1>
        <div className="w-[82.813vw] h-[5.625vw] flex items-center justify-center mt-[1.5vw]">
            <div className="w-[20.781vw] h-[5.625vw] flex flex-col items-center justify-center bg-[#593D29] rounded-[2.708vw]">
                <h1 className="font-bold text-white text-[1.6vw]">+628123456789</h1>
                <h1 className="font-bold italic text-white text-[1.458vw]">Steven Beans</h1>
            </div>
        </div>
        <p className="text-center font-bold text-[0.938vw] mt-[2vw]">Available during regular business hours</p>
        <p className="text-center font-bold text-[0.833vw] mt-[0.5vw]">Monday - Saturday | 9 AM - 4 PM</p>
      </div>
    </section>
  );
}
