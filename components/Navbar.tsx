"use client";

import Image from "next/image";
import logo from "../public/logo.svg";
import chevron from "../public/chevron.svg";
import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full items-center justify-center px-5 md:px-10">
      <nav className="mt-4 w-full max-w-[1272px] rounded-[14px] border border-[#2F3440CC] px-4 py-3 backdrop-blur-[7.5px]">
        <div className="grid grid-cols-3 items-center lg:grid-cols-3">
          {/* Logo - Always visible */}
          <div className="justify-self-start">
            <Image src={logo} alt="Select logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 justify-self-center lg:flex">
            <div className="flex cursor-pointer items-center gap-1 transition-colors duration-300 hover:opacity-75">
              <h4 className="text-sm leading-[150%] tracking-[0.14px]">
                Features
              </h4>
              <Image
                src={chevron}
                alt="Chevron down"
                className="cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-1 transition-colors duration-300 hover:opacity-75">
              <Link
                href="/pricing"
                className="text-sm leading-[150%] tracking-[0.14px]"
              >
                Pricing
              </Link>
            </div>

            <div className="flex cursor-pointer items-center gap-1 transition-colors duration-300 hover:opacity-75">
              <h4 className="text-sm leading-[150%] tracking-[0.14px]">
                Resources
              </h4>
              <Image
                src={chevron}
                alt="Chevron down"
                className="cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-1 transition-colors duration-300 hover:opacity-75">
              <Link
                href="/about"
                className="text-sm leading-[150%] tracking-[0.14px]"
              >
                About
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-2 justify-self-end lg:flex">
            <ButtonLink href="/app" size="sm">
              Log in
            </ButtonLink>
            <ButtonLink href="/demo" variant="primary" size="sm">
              Book a Demo
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="col-start-3 justify-self-end lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 lg:hidden">
            <div className="flex flex-col gap-4 border-t border-[#2F3440CC] pt-4">
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

              <Link
                href="/pricing"
                className="text-sm leading-[150%] tracking-[0.14px]"
              >
                Pricing
              </Link>

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

              <Link
                href="/about"
                className="text-sm leading-[150%] tracking-[0.14px]"
              >
                About
              </Link>

              <div className="flex flex-col gap-2 pt-2">
                <ButtonLink href="/login" size="sm" className="justify-center">
                  Log in
                </ButtonLink>
                <ButtonLink
                  href="https://cal.com/"
                  variant="primary"
                  size="sm"
                  className="justify-center"
                >
                  Book a Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </nav>
  );
}

export default Navbar;
