import Image from "next/image";

interface heroprops {
  navbar: JSX.Element
}

export default function Hero2({navbar}:heroprops) {
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
        {navbar}
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
