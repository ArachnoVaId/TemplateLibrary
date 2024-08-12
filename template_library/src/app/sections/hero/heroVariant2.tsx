import Image from "next/image";

export default function Hero2() {
  return (
    <section className="w-full aspect-[1920/1080] flex flex-col justify-center items-center bg-gray-100 relative">
      {/* Ornament background */}
      <Image
          src="/image/hero/hero2/bg.png"
          alt="Background"
          height={10000}
          width={10000}
          className="w-[100vw] h-[56.25vw] object-cover z-[0] absolute"
        />
      <div className="w-full h-[56.25vw] z-[1] gap-y-[5vw]">
        {/* navbar */}
        <div className="w-full bg-white py-[0.653vw] px-[6.66vw] flex justify-between items-center top-0">
          <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold">
            <Image
              src="/image/hero/hero3/Union.png"
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
            <button className="p-2 bg-[rgba(39,93,144,1)] text-white ml-[0.8vw]">Contact Us</button>
          </div>
        </div>
        {/* navbar */}

        {/* content */}
        <div className="font-poppins w-[33.489vw] bg-[rgba(213,219,226,1)] pl-[2.03125vw] pr-[2.2392vw] pb-[1.927vw] pt-[3.229vw] top-[10vw] left-[50vw] relative">
          <h1 className="font-bold">LIMITED TIME OFFER</h1>
          <h2 className="font-bold text-[rgba(39,93,144,1)] text-[2.708vw]">Refresh Your Home with Our Fall Sale</h2>
          <p className="text-[0.9375vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="py-[0.5vw] px-[5vw] bg-[rgba(39,93,144,1)] text-white mt-[2vw]">BUY NOW</button>
        </div>
        {/* content */}

      </div>
    </section>
  );
}
