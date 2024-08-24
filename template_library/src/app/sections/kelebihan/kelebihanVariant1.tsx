import Image from "next/image";

const sources1 = [
  {
    src: "/image/kelebihan/padlock.png",
    width: "lg:w-[4.271vw] w-[7.271vw]",
    height: "lg:h-[4.271vw] h-[7.271vw]",
    title: "Enhanced Security",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/gear.png",
    width: "lg:w-[4.583vw] w-[7.583vw]",
    height: "lg:h-[4.583vw] h-[7.583vw]",
    title: "Increased Efficiency",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/puzzle.png",
    width: "lg:w-[4.167vw] w-[7.167vw]",
    height: "lg:h-[4.167vw] h-[7.167vw]",
    title: "Improved Collaboration",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
];

const sources2 = [
  {
    src: "/image/kelebihan/magnifyingGlass.png",
    width: "lg:w-[3.698vw] w-[6.698vw]",
    height: "lg:h-[3.698vw] h-[6.698vw]",
    title: " Data-Driven Insights",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/lifePreserver.png",
    width: "lg:w-[3.906vw] w-[6.906vw]",
    height: "lg:h-[3.906vw] h-[6.906vw]",
    title: "24/7 Customer Support",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/handMoney.png",
    width: "lg:w-[3.802vw] w-[6.802vw]",
    height: "lg:h-[3.802vw] h-[6.802vw]",
    title: "Best Price",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
];

export default function kelebihan1() {
  return (
    <section className="w-full min-h-[42.344vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="lg:w-[87.5vw] lg:h-[34.01vw] flex flex-col items-center justify-center">
        <div className="lg:w-[52.135vw] lg:h-[5.938vw] text-center">
          <h1 className="font-bold lg:text-[2.083vw] text-[7.03vw] text-[#4273CE]">
            Solution for Your Business
          </h1>
          <p className="lg:text-[1.25vw] text-[2.25vw] text-[#5E5E5E] text-center">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque
            elementum fringilla eros condimentum faucibus scelerisque senectus.
            Imperdiet nulla egestas
          </p>
        </div>
        <div className="w-full lg:h-[25.052vw] mt-[3vw]">
          <div className="flex items-center justify-center mt-[1vw] lg:flex-row flex-col">
            {sources1.map((client, index) => (
              <div
                className="w-[29.167vw] flex flex-col items-center justify-center"
                key={index}
              >
                <Image
                  src={client.src}
                  alt="Ornament Background"
                  width={10000}
                  height={10000}
                  className={`${client.width} ${client.height} object-cover`}
                />
                <h1 className="text-black lg:text-[1.25vw] text-[2.25vw] font-bold mt-[0.5vw]">
                  {client.title}
                </h1>
                <p className="lg:text-[0.938vw] text-[0.98vw] text-[#5E5E5E] text-justify px-[1.3vw] mt-[1vw]">
                  {client.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-[1vw] lg:flex-row flex-col">
            {sources2.map((client, index) => (
              <div
                className=" w-[29.167vw] flex flex-col items-center justify-center"
                key={index}
              >
                <Image
                  src={client.src}
                  alt="Ornament Background"
                  width={10000}
                  height={10000}
                  className={`${client.width} ${client.height} object-cover`}
                />
                <h1 className="text-black text-[1.25vw] font-bold mt-[0.5vw]">
                  {client.title}
                </h1>
                <p className="text-[0.938vw] text-[#5E5E5E] text-justify px-[1.3vw] mt-[1vw]">
                  {client.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
