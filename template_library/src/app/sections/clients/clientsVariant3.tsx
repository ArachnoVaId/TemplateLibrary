import Image from "next/image";

export default function Clients3() {
  return (
    <section className="w-full min-h-[20.885vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      <h1 className="w-[91.667vw] h-[2.292vw] text-center font-bold">Our Top Partners</h1>
      <Image
        src="/image/clients/client2.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[51.094vw] h-[2.396vw] mt-5"
      />
      <Image
        src="/image/clients/client3.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[42.656vw] h-[2.656vw] mt-5"
      />
    </section>
  );
}
