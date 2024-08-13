import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const sources1 = [
  {
    src: "/image/portofolio/frame1.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Sculpture",
    text2: "White Angel",
  },
  {
    src: "/image/portofolio/frame2.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Oil Painting",
    text2: "Giraffe Portrait",
  },
  {
    src: "/image/portofolio/frame3.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Abstract Painting",
    text2: "Euforia",
  },
  {
    src: "/image/portofolio/frame1.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Object Design",
    text2: "Classic Watch",
  },
];

const sources2 = [
  {
    src: "/image/portofolio/frame1.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Sculpture",
    text2: "White Angel",
  },
  {
    src: "/image/portofolio/frame2.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Oil Painting",
    text2: "Giraffe Portrait",
  },
  {
    src: "/image/portofolio/frame3.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Abstract Painting",
    text2: "Euforia",
  },
  {
    src: "/image/portofolio/frame1.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Object Design",
    text2: "Classic Watch",
  },
];

function Overlay() {
  return (
    <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300">
      <button className="w-[10.521vw] h-[2.5vw] opacity-0 group-hover:opacity-100 text-red-500 bg-white px-[1vw] py-[0.5vw] mb-[0.5vw] transition-opacity duration-300">
        Details
      </button>
      <div className="flex justify-center items-center">
        <a
          href="#"
          className="opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300 mr-[0.3vw]"
        >
          <IoShareSocial />
        </a>
        <a
          href="#"
          className="opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300"
        >
          Share
        </a>
      </div>
    </div>
  );
}

export default function portofolio2() {
  return (
    <section className="w-full min-h-[65.625vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <h1 className="font-bold text-[2.083vw] absolute top-[1.5vw]">
        Portofolio
      </h1>
      <div className="w-[64.375vw] h-[48.125vw] flex flex-col">
        <div className="w-[64.375vw] h-[48.125vw] flex flex-row justify-between items-start">
          {sources2.map((client, index) => (
            <div
              key={index}
              className="relative group w-[14.844vw] h-[23.229vw] bg-cover bg-center"
              style={{ backgroundImage: `url(${client.src})` }}
            >
              <Overlay/>
            </div>
          ))}
        </div>
        <div className="w-[64.375vw] h-[48.125vw] flex flex-row justify-between items-end">
          {sources2.map((client, index) => (
            <div
              key={index}
              className="relative group w-[14.844vw] h-[23.229vw] bg-cover bg-center"
              style={{ backgroundImage: `url(${client.src})` }}
            >
              <Overlay/>
            </div>
          ))}
        </div>
      </div>
      <a
        href="#"
        className="w-[12.76vw] h-[2.5vw] flex items-center justify-center absolute bottom-[3vw] border-[#CB2323] border-[0.052vw] text-[0.833vw] font-bold text-[#CB2323] hover:bg-slate-50 hover:scale-[102%] ease-in-out duration-300"
      >
        Show More
      </a>
    </section>
  );
}
