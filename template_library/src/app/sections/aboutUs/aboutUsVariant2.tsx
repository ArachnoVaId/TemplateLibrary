import Image from "next/image";

export default function AboutUs2() {
  return (
    <section className="w-full min-h-[31.563vw] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative ">
      <div className=" w-[65.729vw] h-[19.583vw] flex justify-center items-center">
        <div className="w-[23.385vw] h-[16.042vw]">
          <h1 className="font-bold text-[1.875vw] text-[#C77B2C]">About us</h1>
          <p className="text-[1.042vw]">
            Lorem ipsum dolor sit amet consectetur. <br/> 
            Nullam elit adipiscing tincidunt id. Sed <br/>
            scelerisque in eu auctor. Lectus enim id et <br/>
            eget risus est ipsum morbi sit. Cursus tortor in <br/>
            et at viverra fermentum. 
          </p>
          <p className="mt-[1vw] text-[1.042vw]">
            Orci tellus fames pharetra elit fermentum <br/>
            magna morbi donec. Pulvinar quis blandit <br/>
            sollicitudin ut lectus cursus. Ipsum luctus duis <br/>
            vitae venenatis. Amet.
          </p>
        </div>
        <div className="ml-[3vw]">
          <Image
            src="/image/aboutUs/aboutUs2/fotoKopi.png"
            alt="Ornament Background"
            width={1000}
            height={800}
            className="w-[32.969vw] h-[18.542vw]"
          />
        </div>
      </div>
    </section>
    
  );
}
