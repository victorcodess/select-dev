import Image from "next/image";
import logo from "../public/logo.svg";
import chevron from "../public/chevron.svg";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto mt-4 w-full max-w-[1272px] rounded-[14px] border border-[#2F3440CC] px-4 py-3 backdrop-blur-[7.5px]">
      <div className="grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Image src={logo} alt="Select logo" />
        </div>

        <div className="flex items-center gap-8 justify-self-center">
          <div className="flex cursor-pointer items-center gap-1">
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

          <div className="flex cursor-pointer items-center gap-1">
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

        <div className="flex items-center gap-5 justify-self-end">
          <Link
            href="/login"
            className="text-sm leading-[150%] tracking-[0.14px] text-[#FFFFFFCC]"
          >
            Log in
          </Link>
          <Link
            href="https://cal.com/"
            className="rounded-lg bg-[#0CA6E9] px-3 py-1.5 text-sm font-medium leading-[150%] tracking-[-0.14px] text-white shadow-btn"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
