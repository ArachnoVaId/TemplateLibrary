import Image from "next/image";

const sources = [
  {
    src: "/image/kelebihan/desk.png",
    width: "w-[2.318vw]",
    height: "h-[1.875vw]",
    title: "Dedicated Desk",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    src: "/image/kelebihan/wifi.png",
    width: "w-[2.063vw]",
    height: "h-[1.667vw]",
    title: "High Speed Internet",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    src: "/image/kelebihan/mug.png",
    width: "w-[1.823vw]",
    height: "h-[2.083vw]",
    title: "Unlimited Coffee",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];

export default function kelebihan2() {
  return (
    <section className="w-full min-h-[15.417vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[57.552vw] h-[7.083vw] flex items-center justify-center">
        {sources.map((client, index) => (
          <div className="w-full h-[7.083vw] flex flex-row" key={index}>
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} mr-[1vw] object-cover`}
            />
            <div className="">
              <h1 className="text-[1.094vw] font-bold">{client.title}</h1>
              <p className="mt-[1.4vw] text-[0.885vw]">{client.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
