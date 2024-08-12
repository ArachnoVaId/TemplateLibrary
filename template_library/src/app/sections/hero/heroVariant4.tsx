import Image from "next/image";

export default function Hero4() {
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
        <div className="w-full bg-white py-[0.42vw] px-[3.121vw] flex justify-between items-center top-0">
          <div className="flex gap-x-[1.2vw] items-center">
            <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold mr-[1.2vw]">
              <Image
                src="/image/hero/hero4/Union.png"
                alt="Background"
                height={10000}
                width={10000}
                className="w-[2vw] object-fill"
              />
              <p>Arachnova</p>
            </div>
            <a href="" className="font-bold text-[0.8vw]">Home</a>
            <a href="" className="font-bold text-[0.8vw]">About Us</a>
            <a href="" className="font-bold text-[0.8vw]">Pricing</a>
            <a href="" className="font-bold text-[0.8vw]"></a>
            <a href="" className="font-bold text-[0.8vw]"></a>
          </div>
          <button className="text-[0.82vw] bg-[rgba(66,115,206,1)] border-2 border-[rgba(66,115,206,1)] p-1 rounded-md text-white">Contact Us</button>
        </div>
        {/* navbar */}

        {/* content */}
        <div className="flex items-center justify-center">
          <div className="flex w-[76.093vw] h-[40.625vw] justify-between items-center">
            <div className="w-[34vw] left-[8vw] top-[5vw] relative">
              <h1 className="text-[rgba(241,8,8,1)] text-[0.9vw] font-bold">Your Pet's Happiness Starts Here</h1>
              <h2 className="text-[rgba(22,28,45,1)] text-[3.1vw] font-bold">Your One-Stop Shop for All Things Pet</h2>
              <p className="text-[1.1vw]  w-[31.25vw]">We're more than just a pet shop. We're a community of pet lovers dedicated to providing the best care for your furry companions.</p>
              <button>Book Now</button>
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
