"use client";
import { useRef } from "react";
import Image from "next/image";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";

export default function Riview2() {
  return (
    <section className="bg-[rgba(246,248,247,1)] py-[3.125vw] flex flex-col justify-center items-center">
      {/* title */}
      <div className="mx-[4.166vw] text-center flex flex-col gap-y-[1vw]">
        <h1 className="text-[1.666vw] font-bold">Testimoni Pelanggan</h1>
        <p className="text-[1.0416vw]">
          Berikut adalah beberapa testimoni asli dari sebagian pelanggan kami.
          Geser ke kiri atau ke kanan untuk melihat keseluruhan testimoni
        </p>
      </div>
      {/* title */}

      {/* content */}
      <div className="ml-[4.166vw] mt-[4.6875vw] flex gap-x-[2vw] justify-between">
        <button>
          <LuChevronLeftCircle className="text-[2vw]" />
        </button>
        <div className="w-[69.4791vw] flex gap-x-[0.9vw]">
          <Image
            src="/image/riview/riviewer2/riviewer.png"
            alt="reviewer"
            width={10000}
            height={10000}
            className="w-[23.157vw] h-[39.47916vw] object-fill"
          />
          <Image
            src="/image/riview/riviewer2/riviewer.png"
            alt="reviewer"
            width={10000}
            height={10000}
            className="w-[23.157vw] h-[39.47916vw] object-fill"
          />
          <Image
            src="/image/riview/riviewer2/riviewer.png"
            alt="reviewer"
            width={10000}
            height={10000}
            className="w-[23.157vw] h-[39.47916vw] object-fill"
          />
        </div>
        <button>
          <LuChevronRightCircle className="text-[2vw]" />
        </button>
      </div>
      {/* content */}
    </section>
  );
}
