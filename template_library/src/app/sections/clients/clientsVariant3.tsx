import Image from "next/image";

const sources1 = [
  { src: "/image/clients/reddit.png", width: "w-[6.52vw]", height: "h-[3vw]" },
  {
    src: "/image/clients/spotify.png",
    width: "w-[6.823vw]",
    height: "h-[2.083vw]",
  },
  {
    src: "/image/clients/google.png",
    width: "w-[6.979vw]",
    height: "h-[2.188vw]",
  },
  {
    src: "/image/clients/pinterest.png",
    width: "w-[7.187vw]",
    height: "h-[1.771vw]",
  },
  {
    src: "/image/clients/stripe.png",
    width: "w-[9.107vw]",
    height: "h-[4.341vw]",
  },
  { src: "/image/clients/reddit.png", width: "w-[6.52vw]", height: "h-[3vw]" },
  {
    src: "/image/clients/spotify.png",
    width: "w-[6.823vw]",
    height: "h-[2.083vw]",
  },
];
const sources2 = [
  { src: "/image/clients/reddit.png", width: "w-[6.52vw]", height: "h-[3vw]" },
  {
    src: "/image/clients/spotify.png",
    width: "w-[6.823vw]",
    height: "h-[2.083vw]",
  },
  {
    src: "/image/clients/google.png",
    width: "w-[6.979vw]",
    height: "h-[2.188vw]",
  },
  {
    src: "/image/clients/pinterest.png",
    width: "w-[7.187vw]",
    height: "h-[1.771vw]",
  },
  {
    src: "/image/clients/stripe.png",
    width: "w-[9.107vw]",
    height: "h-[4.341vw]",
  },
];

export default function Clients3() {
  return (
    <section className="w-full min-h-[20.885vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      <h1 className="w-[91.667vw] h-[2.292vw] text-center font-bold text-[2.083vw]">
        Our Top Partners
      </h1>
      <div className="flex flex-col">
        <div className="flex justify-center items-center mt-[2vw]">
          {sources1.map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} mt-[1vw] mx-[1vw]`}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          {sources2.map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} mt-[1vw] mx-[1vw]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
