import Image from "next/image";

export default function Navbar4() {
  return (
    <section className="w-full h-[5.313vw] flex flex-col justify-center items-center bg-gray-100 relative">
      {/* Ornament background */}
      <div className="w-full z-[1] gap-y-[5vw]">
        {/* navbar */}
        <div className="w-full bg-white py-[0.653vw] px-[6.66vw] flex justify-between items-center top-0">
          <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold">
            <Image
              src="/image/hero/hero4/Union.png"
              alt="Background"
              height={10000}
              width={10000}
              className="w-[2vw] object-fill"
            />
            <p>Arachnova</p>
          </div>

          <div className="flex gap-x-3 items-center text-[0.781vw]">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Pricing</a>
            <a href="">Page</a>
            <button className="p-[0.833vw] bg-[rgba(39,93,144,1)] text-white ml-[0.8vw]">Contact Us</button>
          </div>
        </div>
        {/* navbar */}
      </div>
    </section>
  );
}
