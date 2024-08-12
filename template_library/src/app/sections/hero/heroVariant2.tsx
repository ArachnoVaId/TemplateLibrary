import Image from "next/image";

export default function Hero2() {
  return (
    <section className="w-full aspect-[1920/1080] flex flex-col justify-center items-center bg-gray-100 relative">
      {/* Ornament background */}
      <Image
          src="/image/hero/hero2/circular.png"
          alt="Background"
          height={10000}
          width={10000}
          className="w-[21.56vw] h-[21.56vw] object-cover z-[0] absolute"
        />
      <div className="w-full h-[56.25vw] z-[1] gap-y-[5vw]">
        {/* navbar */}
        <div className="w-full bg-white py-[0.41vw] px-[3.121vw] flex justify-between items-center top-0">
          <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold">
            <Image
              src="/image/hero/hero2/Union.png"
              alt="Background"
              height={10000}
              width={10000}
              className="w-[2vw] object-fill right-0 left-0"
            />
            <p>Arachnova</p>
          </div>
          
          <button className="border-2 border-orange-brown text-orange-brown p-2 rounded-md">Contact Us</button>
        </div>
        {/* navbar */}

        {/* content */}
        
        {/* content */}

      </div>
    </section>
  );
}
