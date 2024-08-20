import Image from "next/image";

const sources = [
  {
    src: "/image/kelebihan/trophy.png",
    width: "w-[3.125vw]",
    height: "h-[3.125vw]",
    title: "High Quality",
    text: "crafted from top materials",
  },
  {
    src: "/image/kelebihan/guarantee.png",
    width: "w-[3.125vw]",
    height: "h-[3.125vw]",
    title: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    src: "/image/kelebihan/shipping.png",
    width: "w-[3.125vw]",
    height: "h-[3.125vw]",
    title: "Free Shipping",
    text: "Order over $150",
  },
  {
    src: "/image/kelebihan/customerSupport.png",
    width: "w-[3.125vw]",
    height: "h-[3.125vw]",
    title: "24 / 7 Support",
    text: "Dedicated support",
  },
];

export default function kelebihan3() {
  return (
    <section className="w-full min-h-[14.063vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[69.479vw] h-[3.646vw] flex items-center justify-center">
        {sources.map((client, index) => (
          <div
            className="w-[17.552vw] h-[3.646vw] flex flex-row items-center justify-center"
            key={index}
          >
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} mr-[1vw] object-cover`}
            />
            <div className="">
              <h1 className="text-[1.094vw] font-bold">{client.title}</h1>
              <p className=" text-[0.885vw]">{client.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
