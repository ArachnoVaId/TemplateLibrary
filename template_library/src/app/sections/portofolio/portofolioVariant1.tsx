import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const sources = [
  {
    src: "/image/portofolio/angels.jpg",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Sculpture",
    text2: "White Angel",
  },
  {
    src: "/image/portofolio/girraffe.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Oil Painting",
    text2: "Giraffe Portrait",
  },
  {
    src: "/image/portofolio/painting.jpg",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Abstract Painting",
    text2: "Euforia",
  },
  {
    src: "/image/portofolio/clock.jpg",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Object Design",
    text2: "Classic Watch",
  },
  {
    src: "/image/portofolio/girraffe.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Oil Painting",
    text2: "Giraffe Portrait",
  },
  {
    src: "/image/portofolio/painting.jpg",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Abstract Painting",
    text2: "Euforia",
  },
  {
    src: "/image/portofolio/clock.jpg",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Object Design",
    text2: "Classic Watch",
  },
];

export default function portofolio1() {
  return (
    <section className="w-full min-h-[34.688vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[91.667vw] h-[2.5vw] relative flex items-center">
        <h1 className="absolute left-0 text-[2.083vw] font-bold">
          Our Portofolio
        </h1>
        <div className="absolute right-0">
          <a
            href=""
            className="w-[10.365vw] h-[2.5vw] text-[#407BFF] flex items-center justify-center"
          >
            <h1 className=" text-[#407BFF] text-[0.833vw] font-bold mr-[0.5vw]">
              View All Portofolio
            </h1>
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="w-[91.667vw] h-[18.438vw] flex flex-row items-center justify-between mt-[2vw]">
        {sources.map((client, index) => (
          <div
            key={index}
            className="w-[12.333vw] h-[18.438vw] bg-cover bg-center relative rounded-[0.07vw] group"
            style={{ backgroundImage: `url(${client.src})` }}
          >
            <div className="absolute inset-0 bg-black opacity-0 rounded-[0.07vw] group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute top-[1vw] left-[1vw] text-white z-10">
              <h2 className="text-[0.833vw]">{client.text1}</h2>
              <p className="font-bold text-[1.25vw]">{client.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
