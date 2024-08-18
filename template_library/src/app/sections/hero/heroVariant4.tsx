import Image from "next/image";

interface heroprops {
  navbar: JSX.Element
}

export default function Hero4({navbar}:heroprops) {
  return (
    <section className="w-full aspect-[1920/1080] flex flex-col justify-center items-center bg-white relative">
      {/* Ornament background */}
      <Image
        src="/image/hero/hero4/circular.png"
        alt="Background"
        height={10000}
        width={10000}
        className="w-[21.56vw] h-[21.56vw] top-[14vw] left-[12vw] object-cover z-[0] absolute"
      />
      <div className="w-full h-[56.25vw] z-[1] gap-y-[5vw]">
        {/* navbar */}
        {navbar}
        {/* navbar */}

        {/* content */}
        <div className="flex items-center justify-center">
          <div className="flex w-[76.093vw] h-[40.625vw] justify-between items-center">
            <div className="w-[34vw] left-[8vw] top-[5vw] relative">
              <h1 className="text-[rgba(241,8,8,1)] text-[0.9vw] font-bold">Your Pet's Happiness Starts Here</h1>
              <h2 className="text-[rgba(22,28,45,1)] text-[3.1vw] font-bold">Your One-Stop Shop for All Things Pet</h2>
              <p className="text-[1.1vw]  w-[31.25vw]">We're more than just a pet shop. We're a community of pet lovers dedicated to providing the best care for your furry companions.</p>
              <a
                href=""
                className="bg-[#4273CE] text-white font-semibold w-[6.667vw] h-[2.24vw] rounded-[0.521vw] text-[0.938vw] my-[1vw] text-center flex items-center justify-center hover:bg-[#5AB0BB] hover:scale-[102%] transition-all duration-700 ease-in-out"
              >
                Book Now
              </a>
            </div>

            <Image
              src="/image/hero/hero4/dog.png"
              alt="Background"
              height={10000}
              width={10000}
              className="w-[27.931vw] h-[31.99vw] object-cover top-[4vw] relative"
            />
          </div>
        </div>
        {/* content */}

      </div>
    </section>
  );
}
