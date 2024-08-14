import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function footer2() {
  return (
    <section className="w-full min-h-[19.583vw] flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div
        className="w-full h-[16.927vw] absolute top-0 p-[3vw] flex justify-center items-center"
        style={{ background: "#F1F5F9" }}
      >
        <div className="w-[73.958vw] h-[8.594vw] flex flex-row items-start justify-between">
          <div className="w-[20.99vw] h-[7.813vw]">
            <div className="w-[11.51vw] h-[2.813vw] flex flex-row items-center justify-between">
              <Image
                src="/image/footer/arachnova.png"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[3.698vw] h-[2.813vw]"
              />
              <h1 className="text-[1.354vw] font-bold text-[#101010]">
                ArachnoVa
              </h1>
            </div>
            <p className="text-[0.938vw] leading-[1.25vw]">
              Lorem ipsum dolor sit amet consectetur. Sed egestas non egestas
              sagittis semper risus sed feugiat justo. Urna vitae fermentum
              tristique aliquam. Tellus.
            </p>
          </div>
          <div className="w-[5.781vw] h-[6.563vw]">
            <h1 className="font-bold text-[0.915vw]">Social Media</h1>
            <div className="w-[5.781vw] h-[1.25vw] flex items-center justify-start mt-[0.8vw]">
              <Image
                src="/image/footer/instagram.jpg"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[1.25vw] h-[1.25vw]"
              />
              <p className="text-[0.833vw] ml-[0.3vw]">Instagram</p>
            </div>
            <div className="w-[5.781vw] h-[1.25vw] flex items-center justify-start mt-[0.3vw]">
              <Image
                src="/image/footer/facebook.jpg"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[1.25vw] h-[1.25vw]"
              />
              <p className="text-[0.833vw] ml-[0.3vw]">Facebook</p>
            </div>
            <div className="w-[5.781vw] h-[1.25vw] flex items-center justify-start mt-[0.3vw]">
              <Image
                src="/image/footer/tiktok.jpg"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[1.25vw] h-[1.25vw]"
              />
              <p className="text-[0.833vw] ml-[0.3vw]">TikTok</p>
            </div>
          </div>
          <div className="w-[4.115vw] h-[8.594vw] flex flex-col">
            <h1 className="text-[0.938vw] font-bold">Company</h1>
            <a href="#" className="text-[0.833vw] mt-[0.5vw]">
              About
            </a>
            <a href="#" className="text-[0.833vw]">
              Careers
            </a>
            <a href="#" className="text-[0.833vw]">
              FAQs
            </a>
            <a href="#" className="text-[0.833vw]">
              Teams
            </a>
            <a href="#" className="text-[0.780vw]">
              Contact Us
            </a>
          </div>
          <div className="w-[16.719vw] h-[4.479vw] flex flex-col justify-between mr-[5vw]">
            <div className="w-[16.719vw] h-[1.979vw] flex flex-row items-center justify-center">
              <Image
                src="/image/footer/maps.png"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[1.25vw] h-[1.25vw]"
              />
              <p className="text-[0.920vw] ml-[0.3vw]">
                Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
              </p>
            </div>
            <div className="w-[10.885vw] h-[1.25vw] flex flex-row items-center justify-between">
              <Image
                src="/image/footer/mail.png"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[1.25vw] h-[1.25vw]"
              />
              <p className="text-[0.920vw]">support@figma.com</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[2.656vw] absolute bottom-0 flex justify-center items-center"
        style={{ background: "#D8DFE7" }}
      >
        <p className="text-[0.833vw] text-black font-bold">Copyright</p>
        <Image
          src="/image/footer/copyrightBlack.png"
          width={10000}
          height={10000}
          alt="copyright"
          className="w-[0.99vw] h-[0.99vw] mx-[0.2vw]"
        />
        <p className="text-[0.833vw] text-black font-bold">
          2024 Arachnova. All rights reserved. Developed by Arachnova
        </p>
      </div>
    </section>
  );
}
