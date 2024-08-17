"use client";
import { useRef } from "react";
import Image from "next/image";


export default function Gallery4() {
  return (
    <section className="aspect-[1920/1080] bg-[rgba(246,248,247,1)] py-[2.125vw] flex flex-col justify-center items-center">

      {/* title */}
      <div className="mx-[4.166vw] text-center flex flex-col">
        <h1 className="font-bold text-[2.083vw]">Gallery Highlight</h1>
        <p className="text-[1.042vw] text-[rgba(97,97,97,1)] font-poppins"> 
          Share your memories
        </p>
      </div>
      {/* title */}

      {/* content */}
      <div className="p-[1vw]">
        <div className="grid grid-rows-2 gap-[1vw] w-[64.74vw]">
          {/* part 1 */}
          <div className="grid grid-cols-4">
            <Image src="/image/gallery/gallery4/gallery1.png" alt="gallery" width={10000} height={10000} className="row-span-3 col-span-2" />
            <Image src="/image/gallery/gallery4/gallery2.png" alt="gallery" width={10000} height={10000} className="col-span-2" />
            <Image src="/image/gallery/gallery4/gallery3.png" alt="gallery" width={10000} height={10000} className="col-span-1" />
            <Image src="/image/gallery/gallery4/gallery4.png" alt="gallery" width={10000} height={10000} className="col-span-1" />
          </div>
          {/* part 1 */}

          {/* part 2 */}
          <div className="grid grid-cols-4">
            <Image src="/image/gallery/gallery4/gallery2.png" alt="gallery" width={10000} height={10000} className="col-span-2" />
            <Image src="/image/gallery/gallery4/gallery1.png" alt="gallery" width={10000} height={10000} className="row-span-3 col-span-2" />
            <Image src="/image/gallery/gallery4/gallery3.png" alt="gallery" width={10000} height={10000} className="col-span-1" />
            <Image src="/image/gallery/gallery4/gallery4.png" alt="gallery" width={10000} height={10000} className="col-span-1" />
          </div>
          {/* part 2 */}

        </div>
      </div>
      {/* content */}
    </section>
  );
}
