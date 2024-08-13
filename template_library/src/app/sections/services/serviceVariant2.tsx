import Image from "next/image";

const sources = [
  {
    src: "/image/teams/Avatar1.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
  {
    src: "/image/teams/Avatar2.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
  {
    src: "/image/teams/Avatar3.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
];

export default function service2() {
  return (
    <section className="w-full min-h-[40.99vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <h1 className="text-[2.083vw] font-bold text-[#CE4244]">Our Services</h1>
      <div className="w-[92.188vw] h-[22.865vw] flex flex-row items-center justify-between">
        {sources.map((client, index) => (
          <div className="w-[29.063vw] h-[22.865vw] flex flex-col items-center relative">
            <Image
              key={index}
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} mt-[3vw]`}
            />
            <p className="font-bold text-[1.25vw] absolute bottom-[5vw] left-0">
              {client.title}
            </p>
            <p className="text-[0.938vw] mt-[1.5vw] absolute bottom-[1vw] left-0 leading-[2vw]">
              {client.text1}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
