import Image from "next/image";
import stars from "../public/stars.svg";
import caret from "../public/caret.svg";
import dashboard from "../public/dashboard.svg";
// import dashboard2 from "../public/dashboard.png"
import heroGrain from "../public/hero-grain.png";
import heroGrad from "../public/hero-gradient.png";

import Link from "next/link";
import { VerticalMarquee } from "@/components/VerticalMarquee";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main className="px- [100px] flex w-full flex-col items-center justify-center pt-[73px]">
      <section className="relative flex w-full flex-col items-center justify-center gap-[74px] pb-20 pt-[112px]">
        <Image
          src={heroGrain}
          alt="grain"
          className="bord er absolute top-0 -z-10 min-h-[740px] w-full"
        />
        <Image
          src={heroGrad}
          alt="gradient"
          className="absolute top-[45px] -z-20 min-h-[540px] w-full"
        />

        <div className="flex w-full max-w-[1014px] flex-col items-center justify-center gap-5">
          <Link
            href="/"
            className="flex items-center rounded-[100px] bg-pill-radial px-[14px] py-[5px] shadow-pill backdrop-blur-[7.5px]"
          >
            <Image src={stars} alt="Stars" />
            <h5 className="pl-1.5 pr-2 text-sm font-medium leading-[150%] tracking-[-0.14px] text-white/90">
              Introducing Insights
            </h5>
            <Image src={caret} alt="Chevron right" className="" />
          </Link>

          <h1 className="max-w-[960px] bg-gradient-to-b from-white from-[8.12%] to-[#989EAA] to-[109.09%] !bg-clip-text text-center text-[64px] font-medium leading-[120%] tracking-[-0.64px] text-transparent">
            The Snowflake optimization and cost management platform
          </h1>

          <p className="mt-1 w-full max-w-[606px] text-center text-xl leading-[150%] text-white/80">
            Gain deep visibility into Snowflake usage, optimize performance and
            automate savings with the click of a button.
          </p>

          <div className="mt-5 flex items-center gap-4">
            <Link
              href="https://cal.com/"
              className="rounded-xl bg-[#0CA6E9] px-6 py-3 text-base font-medium leading-[150%] tracking-[-0.16px] text-white shadow-btn"
            >
              Book a Demo
            </Link>

            <Link
              href="/login"
              className="flex gap-2.5 px-6 py-3 text-sm leading-[150%] tracking-[0.14px] text-white"
            >
              <span>Start Free Trial</span>
              <Image src={caret} alt="Caret right" className="w-2" />
            </Link>
          </div>
        </div>

        <div className="overflow-hidde relative w-full px-[100px]">
          <div className="[1427.5px] absolute left-0 right-0 top-[-500px] -z-10 mx-auto hidden h-[535.32px] w-full border bg-hero-radial" />
          <Image src={dashboard} alt="Dashboard" className="" />
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-20 px-[100px] py-[112px]">
        <div className="flex flex-col items-center gap-4">
          <h4 className="leadin-[100%] text-xs font-medium uppercase tracking-[1.2px] text-[#38BDF9]">
            testimonials
          </h4>
          <h2 className="text-center text-5xl font-medium leading-[130%] tracking-[-0.48px] lg:max-w-[628px]">
            Supercharging thousands of Snowflake users
          </h2>
        </div>

        <div className="flex-co relative flex h-[700px] w-full max-w-[1240px] items-start gap-6">
          <div className="pointer-events-none absolute top-0 z-20 h-full w-full bg-testimonial-linear" />

          <VerticalMarquee
            speed={20}
            direction={"down"}
            gap={24}
            className="h-full w-full"
          >
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </VerticalMarquee>

          <VerticalMarquee
            speed={20}
            direction={"up"}
            gap={24}
            className="h-full w-full"
          >
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </VerticalMarquee>

          <VerticalMarquee
            speed={20}
            direction={"down"}
            gap={24}
            className="h-full w-full"
          >
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </VerticalMarquee>
        </div>
      </section>
    </main>
  );
}
