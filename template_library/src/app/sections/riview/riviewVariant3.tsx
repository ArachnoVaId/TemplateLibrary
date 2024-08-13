"use client";
import Image from "next/image";

interface iCard {
    image_src: string;
    image_alt: string;
    quote: string;
    name: string;
    occupation: string;
}

const data: iCard[] = [
    { image_src: "/image/riview/riview3/riviewer1.png", image_alt: "riviewer", quote: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”", name: "Isabella Chavez", occupation: "Graphic Designer" },
    { image_src: "/image/riview/riview3/riviewer2.png", image_alt: "riviewer", quote: "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”", name: "Curtis Rhodes", occupation: "Digital Marketer" },
    { image_src: "/image/riview/riview3/riviewer3.png", image_alt: "riviewer", quote: "“Must have book for all, who want to be Product Designer or Interaction Designer.”", name: "Lucas Mann", occupation: "Co Founder" },
    { image_src: "/image/riview/riview3/riviewer1.png", image_alt: "riviewer", quote: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”", name: "Isabella Chavez", occupation: "Graphic Designer" },
];

interface CardProps {
    image_src: string;
    image_alt: string;
    name: string;
    quote: string;
    occupation: string;
}

function Card({ image_src, image_alt, name, quote, occupation }: CardProps) {
    return (
        <div className="w-[18.2291vw] h-[18.9583vw] p-[1.5625vw] bg-white rounded-md flex flex-col justify-evenly">
            <Image src={image_src} alt={image_alt} width={100} height={100} className="w-[2.8125vw] h-[2.8125vw]" />
            <h1 className="text-[1.09375vw]">{quote}</h1>
            <div>
                <p className="text-[0.8854vw] font-bold">{name}</p>
                <p className="text-[0.8854vw] text-[rgba(22,28,45,1)]">{occupation}</p>
            </div>
        </div>
    );
}

export default function Riview3() {
    return (
        <section className="bg-[rgba(246,248,247,1)] py-[3.125vw] flex flex-col justify-center items-center">
            {/* title */}
            <div className="mx-[4.166vw] text-center flex flex-col gap-y-[0.6vw] w-[40.05vw]">
                <h1 className="text-[1.875vw] font-bold">What people say about us</h1>
                <p className="text-[0.9895vw] text-[rgba(22,28,45,1)]">
                    Lorem ipsum dolor sit amet consectetur. Donec erat condimentum porta
                    cras maecenas facilisis.
                </p>
            </div>
            {/* title */}

            {/* content */}
            <div className="ml-[4.166vw] mt-[4.6875vw] flex gap-x-[2vw] justify-start overflow-x-auto w-[60.9375vw] scrollbar-hide">
                <div className="flex gap-x-[0.9vw]">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            image_src={item.image_src}
                            image_alt={item.image_alt}
                            name={item.name}
                            quote={item.quote}
                            occupation={item.occupation}
                        />
                    ))}
                </div>
            </div>
            {/* content */}
        </section>
    );
}
