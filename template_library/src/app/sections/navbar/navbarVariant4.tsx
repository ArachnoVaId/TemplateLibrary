"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar4() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      console.log(lastScrollTop);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={`w-full bg-white py-[1.219vw] px-[3.121vw] flex justify-between items-center top-0 ${isNavbarHidden ? "-translate-y-full" : "translate-y-0"} fixed z-[99] transition-transform duration-300`}>
      <div className="flex gap-x-[1.2vw] items-center">
        <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold mr-[1.2vw]">
          <Image
            src="/image/hero/hero4/Union.png"
            alt="Background"
            height={10000}
            width={10000}
            className="w-[2vw] object-fill"
          />
          <p className="text-[1.023vw]">Arachnova</p>
        </div>
        <a href="" className="font-bold text-[0.9vw]">
          Home
        </a>
        <a href="" className="font-bold text-[0.9vw]">
          About Us
        </a>
        <a href="" className="font-bold text-[0.9vw]">
          Pricing
        </a>
      </div>
      <button className="text-[0.82vw] bg-[rgba(66,115,206,1)] border-2 border-[rgba(66,115,206,1)] p-1 rounded-md text-white">
        Contact Us
      </button>
    </div>
  );
}
