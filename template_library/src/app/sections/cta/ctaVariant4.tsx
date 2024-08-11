import Image from "next/image";

export default function cta4() {
  return (
    <section className="w-full min-h-[23.49vw] p-8 flex flex-col justify-center items-center bg-[#161C2D] text-gray-800 relative">
        <div className="w-[30.469vw] h-[12.344vw] flex flex-col items-center justify-center">
            <h1 className="text-white text-center font-bold text-[3.125vw]">Ready to have a decorated lifestyle?</h1>
            <a
            href=""
            className="bg-[#407BFF] text-white font-bold w-[10.417vw] h-[3.073vw] rounded-[0.521vw] text-[0.885vw] text-center flex items-center justify-center hover:scale-[102%] transition-all duration-700 ease-in-out"
            >
            Start Shopping
            </a>
        </div>
    </section>
  );
}
