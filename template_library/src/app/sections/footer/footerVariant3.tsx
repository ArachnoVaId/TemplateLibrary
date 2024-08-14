"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const sources = [
  "/image/footer/instagram.jpg",
  "/image/footer/facebook.jpg",
  "/image/footer/tiktok.jpg",
];

export default function footer3() {
  return (
    <section className="w-full min-h-[16.823vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div
        className="w-full h-[12.917vw] absolute top-0 p-[3vw] flex flex-col justify-center items-center"
        style={{ background: "#F1F5F9" }}
      >
        <div className="w-[73.958vw] h-[4.167vw] flex flex-row justify-between items-start">
          <div className="flex items-center">
            <Image
              src="/image/footer/arachnova.png"
              width={10000}
              height={10000}
              alt="logo"
              className="w-[3.281vw] h-[2.5vw]"
            />
            <h1 className="text-[1.25vw] font-bold text-[#101010] ml-[0.5vw]">
              ArachnoVa
            </h1>
          </div>
          <div className="w-[20.99vw] h-[4.167vw]">
            <h1 className="text-[1.042vw] font-bold text-right">Top Bakery</h1>
            <p className="text-[0.938vw] text-right">
              Lorem ipsum dolor sit amet consectetur. Sed estas sagittis semper
              risus sed
            </p>
          </div>
        </div>
        <div className="absolute flex bottom-[2vw] right-[12.7vw]">
          {sources.map((client, index) => (
            <Image
              src={client}
              width={10000}
              height={10000}
              alt="logo"
              className="w-[1.25vw] h-[1.25vw]"
            />
          ))}
        </div>
      </div>
      <div
        className="w-full h-[3.906vw] absolute bottom-0 flex justify-center items-center"
        style={{ background: "#F1F5F9" }}
      >
        <div className="w-[73.958vw] h-[0.99vw] flex flex-row justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/image/footer/copyrightBlack.png"
              width={10000}
              height={10000}
              alt="copyright"
              className="w-[0.99vw] h-[0.99vw] mx-[0.2vw]"
            />
            <p className="text-[0.833vw] text-black font-bold">
              2024 Arachnova. All rights reserved. Developed by Arachnova
            </p>
          </div>
          <div className="flex">
            <p className="text-[0.833vw] font-bold">About</p>
            <p className="text-[0.833vw] font-bold ml-[1.25vw]">Features</p>
            <p className="text-[0.833vw] font-bold ml-[1.25vw]">Pricing</p>
            <p className="text-[0.833vw] font-bold ml-[1.25vw]">Gallery</p>
            <p className="text-[0.833vw] font-bold ml-[1.25vw]">Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
