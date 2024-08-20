import Image from "next/image";

const sources1 = [
  {
    src: "/image/kelebihan/padlock.png",
    width: "w-[4.271vw]",
    height: "h-[4.271vw]",
    title: "Enhanced Security",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/gear.png",
    width: "w-[4.583vw]",
    height: "h-[4.583vw]",
    title: "Increased Efficiency",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/puzzle.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Improved Collaboration",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
];

const sources2 = [
  {
    src: "/image/kelebihan/magnifyingGlass.png",
    width: "w-[3.698vw]",
    height: "h-[3.698vw]",
    title: " Data-Driven Insights",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/lifePreserver.png",
    width: "w-[3.906vw]",
    height: "h-[3.906vw]",
    title: "24/7 Customer Support",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/handMoney.png",
    width: "w-[3.802vw]",
    height: "h-[3.802vw]",
    title: "Best Price",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
];

export default function kelebihan1() {
  return (
    <section className="w-full min-h-[42.344vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[87.5vw] h-[34.01vw] flex flex-col items-center justify-center">
        <div className="w-[52.135vw] h-[5.938vw] text-center">
          <h1 className="font-bold text-[2.083vw] text-[#4273CE]">
            Solution for Your Business
          </h1>
          <p className="text-[1.25vw] text-[#5E5E5E] text-center">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque
            elementum fringilla eros condimentum faucibus scelerisque senectus.
            Imperdiet nulla egestas
          </p>
        </div>
        <div className="w-full h-[25.052vw] mt-[3vw]">
          <div className="flex flex-row">
            {sources1.map((client, index) => (
              <div
                className="w-[29.167vw] h-[12.552vw] flex flex-col items-center justify-center"
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
          <div className="flex flex-row items-center justify-center mt-[1vw]">
            {sources2.map((client, index) => (
              <div
                className=" w-[29.167vw] h-[12.552vw] flex flex-col items-center justify-center"
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
