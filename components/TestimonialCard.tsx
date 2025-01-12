import Image from "next/image";
import dan from "../public/dan-corcoran.jpeg";

function TestimonialCard() {
  return (
    <div className="shadow-card flex !w-full flex-col gap-6 rounded-3xl border border-[#1C1D2A] bg-[#0D0E18] px-8 py-6 md:max-w-[397.33px]">
      <p className="leading-[150%] tracking-[-0.16px] text-white/80">
        “Setup for SELECT was swift and pain-free. Within 30 minutes we had a
        full view of our Snowflake usage and cost drivers, including a level of
        depth on our dbt project spend which we&apos;ve struggled to get via
        other means. This helps us stay lean on our costs, without holding back
        innovation within the team.”
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={dan}
          alt="Chevron down"
          className="w-[56px] rounded-full object-cover"
        />

        <div className="flex flex-col gap-[2px]">
          <h4 className="text-[15px] font-semibold leading-[150%] tracking-[-0.15px]">
            Alan Cruickshank
          </h4>
          <h5 className="text-[13px] leading-[150%] tracking-[-0.13px] text-white/80">
            Head of Data & Insights, Tails.com
          </h5>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
