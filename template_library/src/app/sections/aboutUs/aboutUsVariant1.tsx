import Image from "next/image";

export default function AboutUs1() {
  return (
    <section className="w-full min-h-[49.271vw] p-8 flex flex-col justify-center items-center bg-gray-100 text-gray-800 relative ">
      <div className="flex items-center justify-center">
        <div className="w-[47.76vw] h-[35.469vw] bg-slate-400 blur-md z-0"></div>
        <div className="w-[27.552vw] h-[27.344vw] bg-[#4273CE] z-10 absolute top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2 p-[2.5vw]">
          <h1 className="font-bold text-white text-[1.875vw] mt-[0.5vw]">About Us</h1>
          <p className="text-white text-[1.042vw] mt-[1.5vw]">
            Lorem ipsum dolor sit amet consectetur. Nullam elit adipiscing tincidunt id. Sed scelerisque in eu auctor. Lectus enim id et eget risus est ipsum morbi sit. Cursus tortor in et at viverra fermentum. <br/> 
             Orci tellus fames pharetra elit fermentum magna morbi donec. Pulvinar quis blandit sollicitudin ut lectus cursus. Ipsum luctus duis vitae venenatis. Amet.
          </p>
          <a
            href=""
            className="bg-white text-[#4273CE] font-semibold w-[6.667vw] h-[2.24vw] rounded-[0.521vw] text-[0.938vw] my-[1vw] text-center flex items-center justify-center hover:bg-slate-100 hover:scale-[102%] transition-all duration-700 ease-in-out"
          >
            More
          </a>
        </div> {/* 2nd */}
      </div>
    </section>
  );
}
