import Image from "next/image";

const sources = [
  {
    src: "/image/service/stroberi1.jpg",
    width: "w-[29.063vw]",
    height: "h-[15.99vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
  {
    src: "/image/service/bluberi.jpg",
    width: "w-[29.063vw]",
    height: "h-[15.99vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
  {
    src: "/image/service/stroberi2.jpg",
    width: "w-[29.063vw]",
    height: "h-[15.99vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
];

export default function service2() {
  return (
    <section className="w-full min-h-[40.99vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <h1 className="text-[2.083vw] font-bold text-[#CE4244]">Our Services</h1>
      <div className="w-[92.188vw] h-[22.865vw] flex flex-row items-center justify-between mt-[2vw]">
        {sources.map((client, index) => (
          <div
            className="w-[29.063vw] h-[22.865vw] flex flex-col"
            key={index}
          >
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} rounded-[1.563vw]`}
            />
            <div className="flex flex-col items-start">
              <p className="font-bold text-[1.25vw] mt-[1vw]">
                {client.title}  
              </p>
              <p className="text-[0.938vw] mt-[0.2vw] leading-[2vw]">
                {client.text1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
