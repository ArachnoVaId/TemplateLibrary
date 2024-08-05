import Image from "next/image";

export default function AboutUs1() {
  return (
    <section className="w-full min-h-screen p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative ">
      {/* Ornament background */}
      <Image
          src="/image/hero/hero1/bg_oval.png"
          alt="Ornament Background"
          width={10000}
          height={10000}
          className=" w-[65.156vw] h-[65.156vw] object-cover z-[0] absolute right-0"
        />
    </section>
  );
}
