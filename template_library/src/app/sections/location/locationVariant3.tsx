import Image from "next/image";

const sources = [
  {
    src: "/image/location/phone.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text: "+62012 3456 789",
  },
  {
    src: "/image/location/email.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text: "demo@gmail.com",
  },
  {
    src: "/image/location/maps.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text: "Lorem ipsum dolor sit amet consectetur. Consectetur feugiat.",
  },
];

export default function location3() {
  return (
    <section className="w-full min-h-[34.583vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[51.927vw] h-[29.375vw] flex items-center justify-center bg-white rounded-[0.521vw]">
        <div className="w-[25.573vw] h-[28.333vw] bg-[#407BFF] rounded-[0.521vw] p-[2vw] z-0">
          {" "}
          {/** 1st */}
          <h1 className="font-bold text-white text-[1.458vw]">Contact Us</h1>
          <p className=" text-white text-[0.938vw] mt-[0.5vw]">
            Say Something!
          </p>
          <div className="w-[17.552vw] h-[8.333vw] mt-[3vw]">
            {sources.map((client, index) => (
              <div className="flex items-center mt-[1.5vw]">
                <Image
                  key={index}
                  src={client.src}
                  alt="Ornament Background"
                  width={10000}
                  height={10000}
                  className={`${client.width} ${client.height} mr-[0.5vw] object-cover`}
                />
                <p className="text-white text-[0.833vw]">{client.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Image
            src="/image/location/maps1.png"
            alt="Ornament Background"
            width={10000}
            height={10000}
            className="w-[24.792vw] h-[28.333vw] ml-[0.4vw]"
          />{" "}
          {/** 2nd */}
        </div>
      </div>
    </section>
  );
}
