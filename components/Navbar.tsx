import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
import chevron from "../public/chevron.svg";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="px-4 py-3 border border-[#2F3440CC] rounded-[14px] w-full max-w-[1272px] mx-auto mt-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-[7.5px]">
      <div className="grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Image src={logo} alt="Select logo" />
        </div>

        <div className="justify-self-center flex gap-8 items-center">
          <div className="flex items-center gap-1 cursor-pointer">
            <h4 className="text-sm leading-[150%] tracking-[0.14px]">
              Features
            </h4>
            <Image
              src={chevron}
              alt="Chevron down"
              className="cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-1">
            <Link
              href="/pricing"
              className="text-sm leading-[150%] tracking-[0.14px]"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <h4 className="text-sm leading-[150%] tracking-[0.14px]">
              Resources
            </h4>
            <Image
              src={chevron}
              alt="Chevron down"
              className="cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-1">
            <Link
              href="/about"
              className="text-sm leading-[150%] tracking-[0.14px]"
            >
              About
            </Link>
          </div>
        </div>

        <div className="justify-self-end flex items-center gap-5">
          <Link
            href="/login"
            className="text-sm leading-[150%] tracking-[0.14px] text-[#FFFFFFCC]"
          >
            Log in
          </Link>
          <Link
            href="https://cal.com/"
            className="bg-[#0CA6E9] text-white px-3 py-1.5 rounded-lg text-sm font-medium leading-[150%] tracking-[0.14px] shadow-btn"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
