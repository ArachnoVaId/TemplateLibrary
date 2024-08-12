"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  MdOutlineArrowCircleLeft,
  MdOutlineArrowCircleRight,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

// Import Swiper styles
const data = [
  {
    desc: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    image_src: "/image/riview/riview1/reviewer1.png",
    name: "Hellen Jummy",
    occupation: "Financial Counselor",
  },
  {
    desc: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    image_src: "/image/riview/riview1/reviewer2.png",
    name: "Ralph Edwards",
    occupation: "Financial Counselor",
  },
  {
    desc: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    image_src: "/image/riview/riview1/reviewer3.png",
    name: "Hellena John",
    occupation: "Psychology Student",
  },
  {
    desc: "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
    image_src: "/image/riview/riview1/reviewer4.png",
    name: "David Oshodi",
    occupation: "Manager",
  },
  {
    desc: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    image_src: "/image/riview/riview1/reviewer5.png",
    name: "Hellen Jummy",
    occupation: "Financial Counselor",
  },
];  

interface iCard{
    desc: string;
    image_src: string;
    name: string;
    occupation: string;
}

function Card({ desc, image_src, name, occupation }:iCard) {
  return (
    <div className="w-[21.4583vw] max-h-[38.229vw] font-roboto text-[0.9375vw] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] p-[1.666vw] bg-white rounded-md">
      <p className="mb-[1vw]">{desc}</p>
      <div className="flex gap-x-[0.5vw] items-center">
        <Image
          src={image_src}
          alt={`image review of ${name}`}
          width={10000}
          height={10000}
          className="w-[3.333vw] h-[3.333vw]"
        />
        <div className="w-full px-2">
          <h1 className="font-semibold">{name}</h1>
          <p className="text-[0.833vw] text-[rgba(71,85,105,1)]">
            {occupation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Riview2() {
  

  return (
    <section className="bg-[rgba(246,248,247,1)] w-full py-[3.125vw]">
      {/* title */}
      <div className="flex justify-between items-center mx-[4.166vw]">
        <h1>Testimoni Pelanggan</h1>
        <p className="text-[1.0416vw]">Berikut adalah beberapa testimoni asli dari sebagian pelanggan kami. Geser ke kiri atau ke kanan untuk melihat keseluruhan testimoni</p>
      </div>
      {/* title */}

      {/* content */}
      <div className="ml-[4.166vw] mt-[4.6875vw]">
        
      </div>
      {/* content */}
    </section>
  );
}