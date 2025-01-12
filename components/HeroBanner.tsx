"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import stars from "../public/stars.svg";
import caret from "../public/caret.svg";

export const HeroBanner = () => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 -left-[1px] bottom-0 right-0 top-0 mx-auto my-auto h-[33.5px] w-[197px] overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-[-100%]"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute inset-0 bg-[conic-gradient(from_calc(270deg-(var(--spread)*0.6)),transparent_0,hsla(195,_100%,_50%,_1)_var(--spread),transparent_var(--spread))]"
            style={{ "--spread": "90deg" } as React.CSSProperties}
          ></div>
        </motion.div>
      </div>

      <Link
        href="/"
        className="relative flex items-center overflow-hidden rounded-[100px] border-red-400 bg-pill-radial px-[14px] py-[5px] shadow-pill backdrop-blur-[7.5px]"
      >
        <Image src={stars} alt="Stars" width={16} height={16} />
        <h5 className="pl-1.5 pr-2 text-sm font-medium leading-[150%] tracking-[-0.14px] text-white/90">
          Introducing Insights
        </h5>
        <Image src={caret} alt="Chevron right" />
      </Link>
    </div>
  );
};
