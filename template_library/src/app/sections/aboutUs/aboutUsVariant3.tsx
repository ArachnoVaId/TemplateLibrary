import Image from "next/image";

export default function AboutUs3() {
  return (
    <section className="w-full min-h-[37.188vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative">
      <div className="w-[66.615vw] h-[25.208vw] flex justify-center items-center">
        <div className="w-[31.25vw] h-[24.167vw]"></div>
        <div className="w-[29.219vw] h-[14.219vw] ml-[4.5vw]">
          <h1 className="font-bold text-[2.604vw] text-[#F65050]">About us</h1>
          <p className="text-[1.042vw]">
            Lorem ipsum dolor sit amet consectetur. Nullam elit <br />
            adipiscing tincidunt id. Sed scelerisque in eu auctor. <br/>
            Lectus enim id et eget risus est ipsum morbi sit. Cursus <br/> 
            tortor in et at viverra fermentum. 
          </p>
          <p className="mt-[2vw] text-[1.042vw]">
            Orci tellus fames pharetra elit fermentum magna morbi <br/>
            donec. Pulvinar quis blandit sollicitudin ut lectus cursus. <br/>
            Ipsum luctus duis vitae venenatis. Amet.
          </p>
        </div>
      </div>
    </section>
  );
}
