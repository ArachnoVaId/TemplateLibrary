import Image from "next/image";

export default function Clients1() {
  return (
    <section className="w-full min-h-[20.833vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      <div className="w-[52.135vw] h-[2.5vw]">
        <h1 className="text-[2.083vw] text-center font-bold">Our Client</h1>
      </div>
      <Image
        src="/image/clients/client1.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-full h-[5.208vw] mt-3"
      />
    </section>
  );
}
