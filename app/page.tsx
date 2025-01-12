import Image from "next/image";
import caret from "../public/caret.svg";
import dashboard from "../public/dashboard.svg";
import heroGrain from "../public/hero-grain.png";

import { VerticalMarquee } from "@/components/VerticalMarquee";
import TestimonialCard from "@/components/TestimonialCard";
import { HeroBanner } from "@/components/HeroBanner";
import { ButtonLink } from "@/components/ButtonLink";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center pt-[73px]">
      <section className="relative flex w-full flex-col items-center justify-center gap-[74px] px-5 pb-20 pt-[112px] md:px-10 lg:px-0">
        <Image
          src={heroGrain}
          alt="grain"
          className="absolute top-0 -z-10 min-h-[740px] w-full"
        />

        <div className="flex w-full max-w-[1014px] flex-col items-center justify-center gap-5">
          <HeroBanner />

          <h1 className="max-w-[960px] bg-gradient-to-b from-white from-[8.12%] to-[#989EAA] to-[109.09%] !bg-clip-text text-center text-3xl font-medium leading-[120%] tracking-[-0.64px] text-transparent md:text-5xl lg:text-[64px]">
            The Snowflake optimization and cost management platform
          </h1>

          <p className="mt-1 w-full max-w-[606px] text-center text-base leading-[150%] text-white/80 md:text-lg lg:text-xl">
            Gain deep visibility into Snowflake usage, optimize performance and
            automate savings with the click of a button.
          </p>

          <div className="mt-5 flex flex-col items-center gap-4 md:flex-row">
            <ButtonLink
              href="https://cal.com/"
              variant="primary"
              size="lg"
              className="rounded-xl"
              aria-label="Book a Demo"
            >
              Book a Demo
            </ButtonLink>

            <ButtonLink href="/login" size="lg">
              <span className="text-base text-white">Start Free Trial</span>
              <Image src={caret} alt="" className="w-2" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center px-0 lg:px-[100px]">
          <div className="absolute -top-[400px] -z-10 hidden h-[500px] w-full max-w-[1027px] bg-hero-radial opacity-40 md:block lg:-top-[467px]" />

          <Image src={dashboard} alt="Dashboard" className="" />
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center gap-20 px-5 py-[112px] md:px-10 lg:px-0">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-xs font-medium uppercase leading-[100%] tracking-[1.2px] text-[#38BDF9]">
            testimonials
          </h4>
          <h2 className="text-center text-2xl font-medium leading-[130%] tracking-[-0.48px] md:text-3xl lg:max-w-[628px] lg:text-5xl">
            Supercharging thousands of Snowflake users
          </h2>
        </div>

        <div className="relative flex h-[700px] w-full max-w-[1240px] flex-col items-center justify-center gap-6 overflow-hidden xl:flex-row xl:items-start">
          <div className="pointer-events-none absolute top-0 z-20 h-full w-full bg-testimonial-linear" />

          <div className="flex w-full items-center justify-center xl:!hidden">
            {[{ direction: "down" as const }].map((config, index) => (
              <VerticalMarquee
                key={index}
                speed={20}
                direction={config.direction}
                gap={24}
                className="flex h-full w-full flex-col items-center justify-center"
                aria-label={`Testimonials column ${index + 1}`}
              >
                {Array(6)
                  .fill(null)
                  .map((_, cardIndex) => (
                    <TestimonialCard
                      key={cardIndex}
                      aria-label={`Testimonial ${cardIndex + 1}`}
                    />
                  ))}
              </VerticalMarquee>
            ))}
          </div>

          <div className="hidden w-full gap-6 pr-0 xl:flex">
            {[
              { direction: "down" as const },
              { direction: "up" as const },
              { direction: "down" as const },
            ].map((config, index) => (
              <VerticalMarquee
                key={index}
                speed={20}
                direction={config.direction}
                gap={24}
                className="h-full w-full"
                aria-label={`Testimonials column ${index + 1}`}
              >
                {Array(6)
                  .fill(null)
                  .map((_, cardIndex) => (
                    <TestimonialCard
                      key={cardIndex}
                      aria-label={`Testimonial ${cardIndex + 1}`}
                    />
                  ))}
              </VerticalMarquee>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
