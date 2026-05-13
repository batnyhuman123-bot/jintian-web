import {
  IconBrandStrength,
  IconBrandToday,
  IconBrandTransformation,
} from "./NadiIcons";

const features = [
  {
    title: "TODAY",
    lines: ["Be present.", "Make intentional choices."],
    Icon: IconBrandToday,
  },
  {
    title: "STRENGTH",
    lines: ["Build discipline.", "Push your limits. Grow daily."],
    Icon: IconBrandStrength,
  },
  {
    title: "TRANSFORMATION",
    lines: ["Small steps today.", "Stronger tomorrow. Better for life."],
    Icon: IconBrandTransformation,
  },
] as const;

function MountainSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        fillOpacity="0.11"
        d="M0 220V155l68 28 52-58 78 42 92-72 58 38 72-55V220H0z"
      />
      <path
        fill="currentColor"
        fillOpacity="0.06"
        d="M0 220v-35l42 12 38-48 55 35 70-62 95 48 120-40v90H0z"
      />
    </svg>
  );
}

export function BrandJintianSection() {
  return (
    <section
      className="relative isolate overflow-hidden border-t border-[#461901]/10 border-b border-[#D8C7B3]/45 bg-[#F6F1EA]"
      aria-labelledby="brand-jintian-heading"
    >
      {/* Base ivory stack */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#F6F1EA_0%,#EFE7DD_42%,#E7DDD0_100%)]"
        aria-hidden
      />
      {/* Soft atmospheric center light */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_50%_28%,rgba(255,255,255,0.5)_0%,rgba(246,241,234,0)_62%)]"
        aria-hidden
      />
      {/* Lower warmth / fog lift */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_50%_100%,rgba(216,199,179,0.28)_0%,rgba(246,241,234,0)_55%)]"
        aria-hidden
      />
      {/* Gentle vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_92%_at_50%_48%,rgba(90,70,58,0)_58%,rgba(120,98,82,0.06)_100%)]"
        aria-hidden
      />
      {/* Bottom mist blur */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-[55%] w-[min(140%,920px)] -translate-x-1/2 bg-[radial-gradient(ellipse_75%_55%_at_50%_100%,rgba(231,221,208,0.5)_0%,transparent_68%)] blur-3xl"
        aria-hidden
      />

      <MountainSilhouette className="pointer-events-none absolute bottom-0 left-0 h-[min(42vw,280px)] w-[min(52%,480px)] text-[#9A8B7A]" />
      <MountainSilhouette className="pointer-events-none absolute bottom-0 right-0 h-[min(42vw,280px)] w-[min(52%,480px)] origin-bottom-right scale-x-[-1] text-[#9A8B7A]" />

      <div className="relative z-10 mx-auto flex min-h-[min(56vw,720px)] max-w-[1440px] flex-col justify-between px-6 py-20 sm:px-10 sm:py-24 lg:min-h-[min(50vw,640px)] lg:px-16 lg:py-28 xl:px-[4.5rem] xl:py-32">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <p className="opacity-0-animate animate-fade-up mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-[#A67C52] sm:text-[11px]">
            OUR BRAND
          </p>
          <div className="opacity-0-animate animate-fade-up animation-delay-100 mb-10 h-px w-10 bg-[#C4A88A]/55 sm:mb-12" aria-hidden />

          <h2
            id="brand-jintian-heading"
            className="opacity-0-animate animate-fade-up animation-delay-100 font-serif text-[clamp(3.75rem,14vw,9.5rem)] font-semibold leading-[0.95] tracking-[0.06em] sm:tracking-[0.07em]"
          >
            <span className="bg-gradient-to-b from-[#4A120C] via-[#54140F] to-[#6A1B11] bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.25)]">
              JINTIAN
            </span>
          </h2>

          <div className="opacity-0-animate animate-fade-up animation-delay-200 mt-10 flex flex-col items-center gap-4 sm:mt-12">
            <div className="h-px w-12 max-w-[40%] bg-[#C4A88A]/45" aria-hidden />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B6B47] sm:text-xs sm:tracking-[0.24em]">
              JINTIAN (今天) MEANS &ldquo;TODAY&rdquo; IN MANDARIN.
            </p>
            <div className="h-px w-12 max-w-[40%] bg-[#C4A88A]/45" aria-hidden />
          </div>

          <p className="opacity-0-animate animate-fade-up animation-delay-300 mt-10 max-w-brand-copy text-[15px] leading-[1.75] text-nadi-muted sm:mt-12 sm:text-[16px]">
            Our name is a reminder that every journey starts with a single decision — today. We
            exist to help you take that step, every day.
          </p>
        </div>

        <div className="mx-auto mt-16 w-full max-w-[1200px] sm:mt-20 lg:mt-24 xl:mt-28">
          <div className="grid divide-y divide-[#D8C7B3]/55 opacity-0-animate animate-fade-up animation-delay-400 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {features.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-center px-4 py-10 text-center transition-opacity duration-300 sm:px-8 lg:px-10 lg:py-0"
              >
                <div className="mb-5 text-[#9A734E] transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                  <item.Icon className="mx-auto h-9 w-9" />
                </div>
                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-luxury text-nadi-ink sm:text-xs">
                  {item.title}
                </h3>
                <p className="max-w-[14rem] text-[13px] leading-[1.65] text-nadi-muted sm:text-[14px]">
                  {item.lines[0]}
                  <br />
                  {item.lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
