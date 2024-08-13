import Image from "next/image";

const sources = [
  {
    src: "/image/teams/Avatar1.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Content Writing",
    text1:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    background: "#F64B4B",
  },
  {
    src: "/image/teams/Avatar2.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Web Development",
    text1:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    background: "#473BF0",
  },
  {
    src: "/image/teams/Avatar3.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Graphic Design",
    text1:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    background: "#68D585",
  },
];

export default function teams1() {
  return (
    <section className="w-full min-h-[46.667vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[52.135vw] h-[6.927vw] flex flex-col items-center justify-center">
        <h1 className="font-bold text-[1.25vw] text-[#4273CE]">Our Services</h1>
        <h1 className="font-bold text-[1.875vw] text-[#161C2D] text-center">
          We provide great services for <br />
          our customers based on needs
        </h1>
      </div>
      <div className="w-[60.938vw] h-[25.156vw] flex flex-row items-center justify-between mt-[3vw]">
        {sources.map((client, index) => (
          <div
            className="w-[18.229vw] h-[25.156vw] flex flex-col items-center justify-center rounded-[0.521vw]"
            style={{ backgroundColor: client.background }}
          >
            <Image
              key={index}
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height}`}
            />
            <p className=" text-white font-bold text-[0.938vw] mt-[0.5vw]">
              {client.title}
            </p>
            <p className="text-white text-[0.833vw] text-center mt-[0.5vw]">
              {client.text1}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
