import Image from "next/image";

export default function AboutUs3() {
  return (
    <section className="w-full min-h-[37.188vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[66.615vw] h-[25.208vw] flex justify-center items-center">
        <div className="w-[31.25vw] h-[24.167vw] flex justify-between">
          <div className="flex items-end">
            <div className="w-[9.861vw] h-[20vw] rounded-[1.042vw]">
              <Image
                src="/image/aboutUs/aboutUs3/Picture1.png"
                width={10000}
                height={10000}
                alt="picture1"
              />
            </div>
          </div>
          <div>
            <div className="w-[9.861vw] h-[20vw] rounded-[1.042vw]">
              <Image
                src="/image/aboutUs/aboutUs3/Picture2.png"
                width={10000}
                height={10000}
                alt="picture1"
              />
            </div>
          </div>
          <div className="mt-[2.5vw]">
            <div className="w-[9.861vw] h-[20vw] rounded-[1.042vw]">
              <Image
                src="/image/aboutUs/aboutUs3/Picture3.png"
                width={10000}
                height={10000}
                alt="picture1"
              />
            </div>
          </div>
        </div>
        <div className="w-[29.219vw] h-[14.219vw] ml-[4.5vw]">
          <h1 className="font-bold text-[2.604vw] text-[#F65050]">About us</h1>
          <p className="text-[1.042vw]">
            Lorem ipsum dolor sit amet consectetur. Nullam elit <br />
            adipiscing tincidunt id. Sed scelerisque in eu auctor. <br />
            Lectus enim id et eget risus est ipsum morbi sit. Cursus <br />
            tortor in et at viverra fermentum.
          </p>
          <p className="mt-[2vw] text-[1.042vw]">
            Orci tellus fames pharetra elit fermentum magna morbi <br />
            donec. Pulvinar quis blandit sollicitudin ut lectus cursus. <br />
            Ipsum luctus duis vitae venenatis. Amet.
          </p>
        </div>
      </div>
    </section>
  );
}
