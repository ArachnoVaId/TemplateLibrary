import Image from "next/image";

const sources = [
  { src: "/image/clients/reddit.png", width: "w-[6.52vw]", height: "h-[3vw]" },
  { src: "/image/clients/spotify.png", width: "w-[6.823vw]", height: "h-[2.083vw]" },
  { src: "/image/clients/google.png", width: "w-[6.979vw]", height: "h-[2.188vw]" },
  { src: "/image/clients/pinterest.png", width: "w-[7.187vw]", height: "h-[1.771vw]" },
  { src: "/image/clients/stripe.png", width: "w-[9.107vw]", height: "h-[4.341vw]"},
  { src: "/image/clients/google.png", width: "w-[6.979vw]", height: "h-[2.188vw]" },
  { src: "/image/clients/pinterest.png", width: "w-[7.187vw]", height: "h-[1.771vw]" },
  { src: "/image/clients/stripe.png", width: "w-[9.107vw]", height: "h-[4.341vw]"},
];

export default function Clients1() {
  return (
    <section className="w-full min-h-[20.833vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      <div className="w-[52.135vw] h-[2.5vw]">
        <h1 className="text-[2.083vw] text-center font-bold">Our Client</h1>
      </div>
      <div className="flex justify-center items-center">
        {sources.map((client, index) => (
          <Image
            key = {index}
            src={client.src}
            alt="Ornament Background"
            width={10000}
            height={10000}
            className={`${client.width} ${client.height} mt-[1vw] mx-[1vw]`}
          />
        ))}
      {/* <Image
        src="/image/clients/spotify.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[9.107vw] h-[2.734vw] mt-[2vw] mx-[0.5vw]"
      /> */}
      {/* <Image
        src="/image/clients/google.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[9.107vw] h-[2.734vw] mt-[2vw] mx-[0.5vw]"
      />
      <Image
        src="/image/clients/pinterest.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[9.107vw] h-[2.229vw] mt-[2vw] mx-[0.5vw]"
      />
      <Image
        src="/image/clients/stripe.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[9.107vw] h-[4.341vw] mt-[2vw] mx-[0.5vw]"
      />
      <Image
        src="/image/clients/reddit.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[9.107vw] h-[4.25vw] mt-[2vw] mx-[0.5vw]"
      />
      <Image
        src="/image/clients/spotify.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[9.107vw] h-[2.734vw] mt-[2vw] mx-[0.5vw]"
      />
      <Image
        src="/image/clients/google.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[9.107vw] h-[2.734vw] mt-[2vw] mx-[0.5vw]"
      />
      <Image
        src="/image/clients/pinterest.png"
        alt="Ornament Background"
        width={10000}
        height={10000}
        className="w-[9.107vw] h-[2.229vw] mt-[2vw] mx-[0.5vw]"
      /> */}
      </div>
    </section>
  );
}
