"use client";
import Image from "next/image";

export default function Gallery3() {
    return (
        <section className="bg-[rgba(246,248,247,1)] py-[2.125vw] px-[8.177vw]">
            <div className="bg-[rgba(246,248,247,1)] relative">
                {/* title */}
                <div className="w-[23.958vw] flex flex-col items-start gap-y-[1.2vw] absolute">
                    <h1 className="font-bold text-[1.042vw] text-[rgba(97,97,97,1)] font-roboto">GALLERY</h1>
                    <p className="text-[2.917vw] font-roboto font-bold">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-[0.938vw] font-roboto text-[rgba(15,23,42,1)]">Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                </div>
                {/* title */}

                {/* content */}
                <div className="absolute top-[5.682vw] left-[45.844vw]">
                    <Image src="/image/gallery/gallery3/gallery2.png" alt="gallery" width={10000} height={10000} className="rounded-lg object-cover w-[7.031vw]" />
                </div>
                <div className="absolute top-[12.457vw] left-[38.242vw]">
                    <Image src="/image/gallery/gallery3/gallery1.png" alt="gallery" width={10000} height={10000} className="rounded-lg object-cover w-[7.031vw]" />
                </div>
                <div className="absolute top-[3.42vw] left-[53.447vw]">
                    <Image src="/image/gallery/gallery3/gallery3.png" alt="gallery" width={10000} height={10000} className="rounded-lg object-cover w-[23.906vw]" />
                </div>
                <div className="absolute top-[27.406vw] left-[12.729vw]"> {/* plant */}
                    <Image src="/image/gallery/gallery3/gallery4.png" alt="gallery" width={10000} height={10000} className="rounded-lg object-cover w-[7.031vw]" />
                </div>
                <div className="absolute top-[22.969vw] left-[21.331vw]"> {/* idea */}
                    <Image src="/image/gallery/gallery3/gallery5.png" alt="gallery" width={10000} height={10000} className="rounded-lg object-cover w-[23.928vw]" />
                </div>
                <div className="absolute top-[16.143vw] left-[43.944vw]">
                    <Image src="/image/gallery/gallery3/gallery6.png" alt="gallery" width={10000} height={10000} className="rounded-lg object-cover w-[32.5vw]" />
                </div>
            </div>
            {/* content */}
        </section>
    );
}
