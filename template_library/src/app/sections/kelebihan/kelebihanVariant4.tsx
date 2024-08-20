import Image from "next/image";

const sources = [
  {
    src: "/image/kelebihan/padlockWhite.png",
    width: "w-[4.271vw]",
    height: "h-[4.271vw]",
    title: "Enhanced Security",
  },
  {
    src: "/image/kelebihan/gearWhite.png",
    width: "w-[4.583vw]",
    height: "h-[4.583vw]",
    title: "Increased Efficiency",
  },
  {
    src: "/image/kelebihan/puzzleWhite.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Improved Collaboration",
  },
  {
    src: "/image/kelebihan/magnifyingGlassWhite.png",
    width: "w-[3.698vw]",
    height: "h-[3.698vw]",
    title: " Data-Driven Insights",
  },
  {
    src: "/image/kelebihan/handMoneyWhite.png",
    width: "w-[3.802vw]",
    height: "h-[3.802vw]",
    title: "Best Price",
  },
];

export default function kelebihan4() {
  return (
    <section className="w-full min-h-[30.781vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[87.604vw] h-[5.365vw] text-center">
        <h1 className="font-bold text-[2.917vw]">Kelebihan Kami</h1>
        <p className="text-[0.938vw]">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </p>
      </div>
      <div className="w-[63.073vw] h-[15.417vw] mt-[2vw] flex flex-row items-center justify-evenly">
        {sources.map((client, index) => (
          <div
            className="w-[11.406vw] h-[15.417vw] flex flex-col items-center justify-center rounded-[2.604vw] bg-[#4273CE] py-[1.667vw]"
            key={index}
          >
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} object-cover`}
            />
            <h1 className="text-white text-[1.25vw] font-bold mt-[0.5vw] text-center">
              {client.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
