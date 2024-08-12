import Image from "next/image";

const sources = [
  {
    src: "/image/teams/Avatar1.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Theresa Webb",
    text1: "Application Support Analyst Lead",
    text2:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    src: "/image/teams/Avatar2.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Courtney Henry",
    text1: "Director, Undergraduate Analytics and Planning",
    text2: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
  },
  {
    src: "/image/teams/Avatar3.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Albert Flores",
    text1: "Career Educator",
    text2: "Former PM for Linear, Lambda School, and On Deck.",
  },
  {
    src: "/image/teams/Avatar4.png",
    width: "w-[4.167vw]",
    height: "h-[4.167vw]",
    title: "Marvin McKinney",
    text1: "Co-op & Internships Program & Operations Manager",
    text2: "Former frontend dev for Linear, Coinbase, and Postscript.",
  },
];

export default function teams1() {
  return (
    <section className="w-full min-h-[36.875vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[62.5vw] h-[24.375vw] flex flex-col items-center">
        <div className="w-[40vw] h-[6.458vw] flex flex-col items-center justify-center  ">
          <h1 className="font-bold text-[1.875vw]">Meet the Team</h1>
          <p className="text-[1.042vw] mt-[1vw]">
            Lorem ipsum dolor sit amet consectetur. Senectus ultrices tortor
            massa quis sagittis. Ultrices malesuada adipiscing parturient
            vivamus. Tristique ac.
          </p>
        </div>
        <div className="w-[62.5vw] h-[15.833vw] flex flex-row items-center justify-between mt-[2vw]">
          {sources.map((client, index) => (
            <div className="w-[14.375vw] h-[15.833vw] flex flex-col items-center bg-[#F9F9F9] rounded-[0.521vw] border-[0.052vw] border-[#D4D4D4] p-[1.25vw]">
              <Image
                key={index}
                src={client.src}
                alt="Ornament Background"
                width={10000}
                height={10000}
                className={`${client.width} ${client.height} object-cover`}
              />
              <p className="font-bold text-[0.938vw] mt-[0.5vw]">{client.title}</p>
              <p className="text-[#407BFF] text-[0.833vw] text-center mt-[0.5vw]">{client.text1}</p>
              <p className="text-[0.833vw] text-[#667085] text-center mt-[0.5vw]">{client.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
