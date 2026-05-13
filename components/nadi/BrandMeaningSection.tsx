type BrandFeature = {
  title: string;
  copy: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const features: BrandFeature[] = [
  {
    title: "TODAY",
    copy: "Be present.\nMake intentional choices.",
    Icon: SunriseIcon,
  },
  {
    title: "STRENGTH",
    copy: "Build discipline.\nPush your limits. Grow daily.",
    Icon: MountainIcon,
  },
  {
    title: "TRANSFORMATION",
    copy: "Small steps today.\nStronger tomorrow. Better for life.",
    Icon: LeafIcon,
  },
];

export function BrandMeaningSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(183,138,82,0.06),rgba(250,247,242,0)_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1260px] px-6 pb-[4.75rem] pt-[4.9rem] text-center sm:px-10 lg:px-16 lg:pb-[5.4rem] lg:pt-[5.4rem]">
        <p className="opacity-0-animate animate-fade-up text-[11px] font-semibold uppercase tracking-[0.36em] text-[#B78A52] sm:text-xs">
          OUR BRAND
        </p>
        <div className="opacity-0-animate animate-fade-up animation-delay-100 mx-auto mt-5 flex w-[92px] items-center justify-center gap-2.5">
          <span className="h-px flex-1 bg-[#D8C5A7]" />
          <span className="h-[5px] w-[5px] rotate-45 bg-[#B78A52]" />
          <span className="h-px flex-1 bg-[#D8C5A7]" />
        </div>

        <h2 className="opacity-0-animate animate-fade-up animation-delay-100 mt-4 bg-[linear-gradient(180deg,#7A1B13_0%,#651710_42%,#4A0F0A_100%)] bg-clip-text font-serif text-[clamp(4rem,14vw,11rem)] leading-[0.9] tracking-[0.08em] text-transparent">
          JINTIAN
        </h2>

        <div className="opacity-0-animate animate-fade-up animation-delay-200 mx-auto mt-5 flex w-[126px] items-center justify-center gap-2.5">
          <span className="h-px flex-1 bg-[#D8C5A7]" />
          <span className="h-[5px] w-[5px] rotate-45 bg-[#B78A52]" />
          <span className="h-px flex-1 bg-[#D8C5A7]" />
        </div>

        <p className="opacity-0-animate animate-fade-up animation-delay-200 mt-4 text-[14px] font-semibold uppercase tracking-[0.3em] text-[#9A7446] sm:text-[15px]">
          JINTIAN (今天) MEANS “TODAY” IN MANDARIN.
        </p>

        <div className="opacity-0-animate animate-fade-up animation-delay-300 mx-auto mt-4 flex w-[126px] items-center justify-center gap-2.5">
          <span className="h-px flex-1 bg-[#D8C5A7]" />
          <span className="h-[5px] w-[5px] rotate-45 bg-[#B78A52]" />
          <span className="h-px flex-1 bg-[#D8C5A7]" />
        </div>

        <p className="opacity-0-animate animate-fade-up animation-delay-300 mx-auto mt-5 max-w-[700px] text-[15px] leading-[1.65] text-[#26201B] sm:text-[16px]">
          Our name is a reminder that every journey starts with a single decision - today. We exist
          to help you take that step, every day.
        </p>

        <div className="opacity-0-animate animate-fade-up animation-delay-400 mx-auto mt-8 flex max-w-[860px] items-center overflow-hidden rounded-[10px] border border-[#E4DDD3] bg-[#FDFBF8] text-left">
          <div className="flex items-start px-7 py-5 text-[#B78A52]">
            <span className="mr-4 text-[2.9rem] leading-none">“</span>
            <div className="h-[52px] w-px bg-[#E1D7CA]" />
          </div>
          <div className="flex-1 py-5 pr-5">
            <p className="text-[15px] leading-[1.45] text-[#2D251E] sm:text-[16px]">Today is where strength begins.</p>
            <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.26em] text-[#B78A52]">
              — JINTIAN
            </p>
          </div>
          <div
            className="h-full w-[34%] min-w-[190px] bg-[linear-gradient(180deg,rgba(252,248,243,0.35),rgba(252,248,243,0.92)),radial-gradient(ellipse_95%_80%_at_75%_80%,rgba(185,157,122,0.35)_0%,rgba(226,211,191,0.2)_44%,rgba(250,247,242,0)_80%)]"
            aria-hidden
          />
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`opacity-0-animate animate-fade-up text-center ${
                index === 0 ? "animation-delay-300" : index === 1 ? "animation-delay-400" : "animation-delay-500"
              } ${index > 0 ? "lg:border-l lg:border-[#E5DCCD]" : ""} ${index === 1 ? "sm:border-l sm:border-[#E5DCCD] lg:border-l" : ""}`}
            >
              <div className="mx-auto flex max-w-[350px] flex-col items-center px-6">
                <feature.Icon className="h-16 w-16 text-[#B78A52]" />
                <h3 className="mt-5 font-serif text-[28px] font-semibold uppercase tracking-[0.24em] text-[#3A1D16]">
                  {feature.title}
                </h3>
                <span className="mt-3 h-px w-12 bg-[#D8C5A7]" />
                <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.6] text-[#4A443C]">
                  {feature.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SunriseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="34" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 43h34M32 13v6M20 20l4 4M44 20l-4 4M12 34h6M46 34h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MountainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.8" />
      <path d="M17 42h30L37 26l-5 6-4-4-11 14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M42 22c-12 1-20 9-21 21 8 0 14-3 18-9 2-3 3-7 3-12zM23 41c6-2 11-6 14-11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
