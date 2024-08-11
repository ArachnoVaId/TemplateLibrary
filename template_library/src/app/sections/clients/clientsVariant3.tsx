import Image from "next/image";

export default function Clients3() {
  return (
    <section className="w-full min-h-[20.885vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      <h1 className="w-[91.667vw] h-[2.292vw] text-center font-bold text-[2.083vw]">Our Top Partners</h1>
      <div className="flex flex-col">
        <div className="flex justify-center items-center mt-[2vw]">
          <Image
                          src="/image/clients/reddit.png"
                          alt="Ornament Background"
                          width={10000}
                          height={10000}
                          className="w-[6.52vw] h-[3vw] mx-[3vw]"
                      />
                      <Image
                          src="/image/clients/spotify.png"
                          alt="Ornament Background"
                          width={10000}
                          height={10000}
                          className="w-[6.823vw] h-[2.083vw] mx-[3vw]"
                      />
                      <Image
                          src="/image/clients/google.png"
                          alt="Ornament Background"
                          width={10000}
                          height={10000}
                          className="w-[6.979vw] h-[2.188vw] mx-[3vw]"
                      />
                      <Image
                          src="/image/clients/pinterest.png"
                          alt="Ornament Background"
                          width={10000}
                          height={10000}
                          className="w-[7.187vw] h-[1.771vw] mx-[3vw]"
                      />
        </div>
        <div className="flex justify-center items-center">
          <Image
                          src="/image/clients/reddit.png"
                          alt="Ornament Background"
                          width={10000}
                          height={10000}
                          className="w-[6.52vw] h-[3vw] mx-[3vw]"
                      />
                      <Image
                          src="/image/clients/spotify.png"
                          alt="Ornament Background"
                          width={10000}
                          height={10000}
                          className="w-[6.823vw] h-[2.083vw] mx-[3vw]"
                      />
                      <Image
                          src="/image/clients/google.png"
                          alt="Ornament Background"
                          width={10000}
                          height={10000}
                          className="w-[6.979vw] h-[2.188vw] mx-[3vw]"
                      />
                      <Image
                          src="/image/clients/pinterest.png"
                          alt="Ornament Background"
                          width={10000}
                          height={10000}
                          className="w-[7.187vw] h-[1.771vw] mx-[3vw]"
                      />
        </div>
      </div>
    </section>
  );
}
