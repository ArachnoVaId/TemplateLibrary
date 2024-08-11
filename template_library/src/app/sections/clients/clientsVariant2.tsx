import Image from "next/image";

export default function Clients2() {
  return (
    <section className="w-full min-h-[22.04vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
        <div className="flex flex-row">
            <div className="w-[12.917vw] h-[10.469vw] mr-2 relative flex flex-col justify-between items-center">
                <div className="w-[12.917vw] h-[3.75vw]">
                    <h1 className="text-center font-bold text-[1.667vw]">1M+</h1>
                    <h1 className="text-center text-[0.99vw]">Projects</h1>
                </div>
                <div className="flex items-center justify-center"> {/* line between */}
                    <div className="w-[7.708vw] h-[0.156vw] bg-black absolute"></div>
                </div>
                <div className="w-[12.917vw] h-[3.75vw]">
                    <h1 className="text-center font-bold text-[1.667vw]">4 Years</h1>
                    <h1 className="text-center text-[0.99vw]">Experience</h1>
                </div>
            </div>
            <div className="w-[40.729vw] h-[10.581vw] relative flex flex-col"> {/*boundary*/}
                <h1 className="font-bold text-[2.083vw]">Our Client</h1>
                <div className="w-[33.76vw] h-[2.248vw] flex justify-start items-center mt-[1vw]">
                    <Image
                        src="/image/clients/reddit.png"
                        alt="Ornament Background"
                        width={10000}
                        height={10000}
                        className="w-[6.52vw] h-[3vw] mx-[0.5vw]"
                    />
                    <Image
                        src="/image/clients/spotify.png"
                        alt="Ornament Background"
                        width={10000}
                        height={10000}
                        className="w-[6.823vw] h-[2.083vw] mx-[0.5vw]"
                    />
                    <Image
                        src="/image/clients/google.png"
                        alt="Ornament Background"
                        width={10000}
                        height={10000}
                        className="w-[6.979vw] h-[2.188vw] mx-[0.5vw]"
                    />
                    <Image
                        src="/image/clients/pinterest.png"
                        alt="Ornament Background"
                        width={10000}
                        height={10000}
                        className="w-[7.187vw] h-[1.771vw] mx-[0.5vw]"
                    />
                </div>
                <div className="w-[33.76vw] h-[2.248vw] flex justify-start items-center mt-[1vw]">
                <Image
                        src="/image/clients/reddit.png"
                        alt="Ornament Background"
                        width={10000}
                        height={10000}
                        className="w-[6.52vw] h-[3vw] mx-[0.5vw]"
                    />
                    <Image
                        src="/image/clients/spotify.png"
                        alt="Ornament Background"
                        width={10000}
                        height={10000}
                        className="w-[6.823vw] h-[2.083vw] mx-[0.5vw]"
                    />
                    <Image
                        src="/image/clients/google.png"
                        alt="Ornament Background"
                        width={10000}
                        height={10000}
                        className="w-[6.979vw] h-[2.188vw] mx-[0.5vw]"
                    />
                    <Image
                        src="/image/clients/pinterest.png"
                        alt="Ornament Background"
                        width={10000}
                        height={10000}
                        className="w-[7.187vw] h-[1.771vw] mx-[0.5vw]"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}
