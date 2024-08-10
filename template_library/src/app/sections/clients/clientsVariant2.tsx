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
                <div className="flex flex-col justify-center items-start mt-1 space-y-5">
                        <Image
                            src="/image/clients/client4.png"
                            alt="clients"
                            width={10000}
                            height={10000}
                            className="w-[33.76vw] h-[2.248vw]"/>
                        <Image
                            src="/image/clients/client5.png"
                            alt="clients"
                            width={10000}
                            height={10000}
                            className="w-[33.76vw] h-[2.248vw]"/>
                </div>
            </div>
        </div>
    </section>
  );
}
