import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function footer1() {
  return (
    <section className="w-full min-h-[17.552vw] flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div
        className="w-full h-[14.896vw] absolute top-0 p-[3vw] flex justify-center items-center"
        style={{ background: "#407BFF" }}
      >
        <div className="w-[78.646vw] h-[9.688vw] flex flex-row items-center justify-between">
          <div className="w-[22.031vw] h-[9.688vw]">
            <p className="text-[1.042vw] text-white font-bold">About Company</p>
            <p className="text-[0.938vw] text-white mt-[0.3vw]">
              Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque
              elementum fringilla eros condimentum faucibus scelerisque
              senectus. Imperdiet nulla egestas
            </p>
            <div className="w-[7.187vw] h-[2.24vw] rounded-[0.521vw] bg-white mt-[0.5vw]">
              <a
                href="#"
                className="w-[7.187vw] h-[2.24vw] text-[0.938vw] flex items-center justify-center font-bold"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="w-[22.031vw] h-[9.688vw]">
            <p className="text-[1.042vw] text-white font-bold">Address</p>
            <p className="text-[0.938vw] text-white font-bold mt-[0.3vw]">
              Indonesia Tower
            </p>
            <p className="text-[0.938vw] text-white">
              Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque
            </p>
          </div>
          <div className="w-[22.031vw] h-[9.688vw] flex flex-col">
            <p className="text-[1.042vw] text-white font-bold">Explore</p>
            <a href="#" className="text-[0.938vw] text-white mt-[0.3vw]">
              Home
            </a>
            <a href="#" className="text-[0.938vw] text-white">
              About Us
            </a>
            <a href="#" className="text-[0.938vw] text-white">
              Pricing
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[2.656vw] absolute bottom-0 flex items-center justify-center"
        style={{ background: "#12388D" }}
      >
        <div className="w-[77.604vw] h-[0.99vw] flex">
          <p className="text-[0.833vw] text-white">Copyright</p>
          <Image
            src="/image/footer/copyright.png"
            width={10000}
            height={10000}
            alt="copyright"
            className="w-[0.99vw] h-[0.99vw] mx-[0.2vw]"
          />
          <p className="text-[0.833vw] text-white">
            2024 Arachnova. All rights reserved. Developed by Arachnova
          </p>
        </div>
      </div>
    </section>
  );
}
