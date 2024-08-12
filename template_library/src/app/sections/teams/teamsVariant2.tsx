import Image from "next/image";

const sources = [
  {
    src: "/image/teams/Avatar5.png",
    width: "w-[8.229vw]",
    height: "h-[8.229vw]",
    title: "Courtney Henry",
    text1: "FOUNDER",
    text2:
      "My new site is so much faster and easier to work with than my old site.",
  },
  {
    src: "/image/teams/Avatar6.png",
    width: "w-[8.229vw]",
    height: "h-[8.229vw]",
    title: "Ian Kent",
    text1: "CO-FOUNDER",
    text2:
      "My new site is so much faster and easier to work with than my old site.",
  },
  {
    src: "/image/teams/Avatar6.png",
    width: "w-[8.229vw]",
    height: "h-[8.229vw]",
    title: "Ian Kent",
    text1: "CO-FOUNDER",
    text2:
      "My new site is so much faster and easier to work with than my old site.",
  },
];

export default function teams2() {
  return (
    <section className="w-full min-h-[35.833vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[40vw] h-[2.292vw] flex flex-col items-center justify-center">
        <h1 className="text-[2.604vw] font-bold">Our Team</h1>
      </div>
      <div className="w-[67.083vw] h-[17.917vw] flex flex-row justify-between mt-[2vw]">
        {sources.map((client, index) => (
          <div className="relative w-[19.583vw] h-[17.917vw] flex flex-col items-center">
            <Image
              key={index}
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} object-cover`}
            />
            <p className="font-bold text-[1.25vw] mt-[0.5vw]">{client.title}</p>
            <p className="text-[#407BFF] text-[0.833vw] text-center mt-[0.5vw]">
              {client.text1}
            </p>
            <p className="text-[0.833vw] text-[#667085] text-center mt-[1vw]">
              {client.text2}
            </p>
            <div className="flex flex-row absolute bottom-0">
              <Image
                src="/image/teams/twt.png"
                alt="Ornament Background"
                width={10000}
                height={10000}
                className="w-[1.042vw] h-[1.042vw] mr-[0.7vw]"
              />
              <Image
                src="/image/teams/linkedin.png"
                alt="Ornament Background"
                width={10000}
                height={10000}
                className="w-[1.042vw] h-[1.042vw]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
