import Image from "next/image";

export default function AboutUs1() {
  return (
    <section className="w-[100vw] min-h-[49.271vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative ">
      <div className="relative flex items-center justify-center">
        <div className="w-[47.76vw] h-[35.469vw] bg-slate-400 blur-md z-0"></div> {/* 1st */}
        <div className="w-[27.552vw] h-[27.344vw] bg-[#4273CE] z-10 absolute top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2 p-6">
          <h1 className="font-bold text-white text-[1.875vw] mt-2">About Us</h1>
          <p className="text-white text-[1.042vw] mt-4">Lorem ipsum dolor sit amet consectetur. Nullam elit adipiscing tincidunt id. Sed scelerisque in eu auctor. Lectus enim id et eget risus est ipsum morbi sit. Cursus tortor in et at viverra fermentum. <br/> 
             Orci tellus fames pharetra elit fermentum magna morbi donec. Pulvinar quis blandit sollicitudin ut lectus cursus. Ipsum luctus duis vitae venenatis. Amet.
          </p>
        </div> {/* 2nd */}
      </div>
    </section>
  );
}
