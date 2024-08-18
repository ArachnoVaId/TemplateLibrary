import Image from "next/image";

export default function Navbar3() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80.26vw] bg-white py-[0.41vw] px-[1.041vw] flex justify-between items-center rounded-full top-0">
        <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold">
          <Image
            src="/image/hero/hero3/Union.png"
            alt="Background"
            height={10000}
            width={10000}
            className="w-[2vw] object-fill"
          />
          <p className="text-[1.042vw]">Arachnova</p>
        </div>

        <div className="flex gap-x-3 items-center text-[0.781vw]">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Pricing</a>
          <a href="">Page</a>
          <button className="border-2 border-orange-brown text-orange-brown p-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
