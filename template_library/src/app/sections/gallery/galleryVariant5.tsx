"use client";
import { useRef } from "react";
import Image from "next/image";


export default function Gallery5() {
  return (
    <section className="bg-[rgba(246,248,247,1)] py-[2.125vw] flex flex-col justify-center items-center">

      {/* title */}
      <div className="mx-[4.166vw] text-center flex flex-col">
        <p className="text-[1.042vw] text-[rgba(97,97,97,1)] w-"> 
        Share your setup with
        </p>
        <h1 className="font-bold text-[2.083vw]">#GalleryHighlight</h1>
      </div>
      {/* title */}

      {/* content */}
      <div className="p-[1vw]">
        <div className="columns-3 [&>img:not(:first-child)]:mt-[1vw] gap-[2vw]">
          <Image src="/image/gallery/gallery2/gallery1.png" alt="gallery" width={1000} height={1000} />
          <Image src="/image/gallery/gallery2/gallery2.png" alt="gallery" width={1000} height={1000} />
          <Image src="/image/gallery/gallery2/gallery3.png" alt="gallery" width={1000} height={1000} />
          <Image src="/image/gallery/gallery2/gallery4.png" alt="gallery" width={1000} height={1000} />
          <Image src="/image/gallery/gallery2/gallery8.png" alt="gallery" width={1000} height={1000} />
          <Image src="/image/gallery/gallery2/gallery5.png" alt="gallery" width={1000} height={1000} />
          <Image src="/image/gallery/gallery2/gallery6.png" alt="gallery" width={1000} height={1000} />
          <Image src="/image/gallery/gallery2/gallery7.png" alt="gallery" width={1000} height={1000} />
        </div>
      </div>
      {/* content */}
    </section>
  );
}
