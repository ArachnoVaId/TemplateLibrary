import Image from "next/image";

const sources = [
  {
    src: "/image/location/phoneBlack.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text: "+62012 3456 789",
  },
  {
    src: "/image/location/emailBlack.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text: "demo@gmail.com",
  },
  {
    src: "/image/location/locationBlack.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text: "Lorem ipsum dolor sit amet consectetur. Consectetur feugiat.",
  },
];

export default function location1() {
  return (
    <section className="w-full min-h-[30.99vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      <div className="w-[53.906vw] h-[24.74vw] flex items-center justify-center bg-[#EEF3FF] rounded-[0.521vw] border-[#C9D9FF] border-[0.078vw]">
        <div className="w-[21.25vw] h-[18.646vw]">
          <h1 className="text-[#407BFF] font-bold text-[1.563vw]">
            Contact Us
          </h1>
          <p className="text-[0.833vw]">
            Lorem ipsum dolor sit amet consectetur. Maecenas molestie quam amet
            nunc quisque condimentum. Feugiat adipiscing purus diam elit
            tristique. Lobortis nulla lectus et et id interdum dictumst eu
            dictumst. Ornare urna amet at congue orci dignissim mi libero vitae
            tristique.
          </p>
          {sources.map((client, index) => (
            <div className="flex items-center mt-[1.5vw]">
              <Image
                key={index}
                src={client.src}
                alt="Ornament Background"
                width={10000}
                height={10000}
                className={`${client.width} ${client.height} mr-[0.5vw] object-cover`}
              />
              <p className="text-black text-[0.833vw]">{client.text}</p>
            </div>
          ))}
        </div>
        <div className="w-[25.365vw] h-[20.573vw] ml-[1vw]">
          <Image
            src="/image/location/maps2.png"
            alt="Ornament Background"
            width={10000}
            height={10000}
            className="rounded-[0.521vw]"
          />
        </div>
      </div>
    </section>
  );
}
