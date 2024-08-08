import Image from "next/image";

export default function AboutUs2() {
  return (
    <section className="w-full min-h-screen p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative ">
      <div className="flex justify-center items-center w-full max-w-4xl">
        <div className="mr-5">
          <h1 className="font-bold text-xl text-[#C77B2C]">About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. <br/> 
            Nullam elit adipiscing tincidunt id. Sed <br/>
            scelerisque in eu auctor. Lectus enim id et <br/>
            eget risus est ipsum morbi sit. Cursus tortor in <br/>
            et at viverra fermentum. 
          </p>
          <br/>
          <p>
            Orci tellus fames pharetra elit fermentum <br/>
            magna morbi donec. Pulvinar quis blandit <br/>
            sollicitudin ut lectus cursus. Ipsum luctus duis <br/>
            vitae venenatis. Amet.
          </p>
        </div>
        <div className="ml-5">
          <Image
            src="/image/aboutUs/aboutUs2/fotoKopi.png"
            alt="Ornament Background"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
