"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar3() {
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
    <div className={`w-full fixed flex justify-center items-center z-[99] transition-transform duration-300 ${isNavbarHidden ? "-translate-y-full" : "translate-y-0 mt-[1vw]"}`}>
      <div className="w-[80.26vw] bg-white py-[0.41vw] px-[1.041vw] flex justify-between items-center rounded-full top-0">
        <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold">
          <Image
            src="/image/hero/hero3/Union.png"
            alt="Background"
            height={10000}
            width={10000}
            className="w-[2vw] object-fill"
          />
          <p className="text-[1.042vw]">Arachnova</p>
        </div>

        <div className="flex gap-x-3 items-center text-[0.781vw]">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Pricing</a>
          <a href="">Page</a>
          <button className="border-2 border-orange-brown text-orange-brown p-[0.5vw] rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
