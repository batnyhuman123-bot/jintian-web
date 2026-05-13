import {
  IconBuiltConsistency,
  IconQualityIngredients,
  IconRealResults,
} from "./NadiIcons";

const features = [
  {
    index: "01",
    title: "REAL RESULTS",
    body: "Our formulas are designed to deliver noticeable improvements you can actually feel.",
    Icon: IconRealResults,
  },
  {
    index: "02",
    title: "QUALITY INGREDIENTS",
    body: "We use carefully selected ingredients backed by research and strict standards.",
    Icon: IconQualityIngredients,
  },
  {
    index: "03",
    title: "BUILT FOR CONSISTENCY",
    body: "Daily performance starts with consistency — our products are made to fit your routine.",
    Icon: IconBuiltConsistency,
  },
] as const;

export function StoryMissionSection() {
  return (
    <section className="border-t border-[#E3DDD6] bg-nadi-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-[5.5rem] xl:px-[4.5rem]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.78fr)] lg:gap-x-[clamp(2.5rem,5vw,4.5rem)] xl:gap-x-24">
          {/* Feature column */}
          <div className="opacity-0-animate animate-fade-up animation-delay-100">
            <ul className="divide-y divide-[#E3DDD6] border-y border-[#E3DDD6]">
              {features.map((item) => (
                <li key={item.index} className="py-9 lg:py-10 xl:py-11">
                  <div className="flex gap-5 sm:gap-6 lg:gap-8">
                    <div className="shrink-0 pt-0.5 text-[#9A734E]">
                      <item.Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                    </div>
                    <div className="min-w-0 flex-1 pr-2">
                      <h2 className="mb-2.5 text-[11px] font-semibold uppercase tracking-luxury text-nadi-ink sm:text-xs">
                        {item.title}
                      </h2>
                      <p className="max-w-[28rem] text-[14px] leading-[1.65] text-nadi-muted sm:text-[15px]">
                        {item.body}
                      </p>
                    </div>
                    <div className="shrink-0 self-start pt-1 font-sans text-[10px] font-medium tabular-nums tracking-[0.2em] text-[#B5ADA5] sm:text-[11px]">
                      {item.index}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission column — vertical rhythm aligned with second feature row */}
          <div className="opacity-0-animate animate-fade-up animation-delay-200 lg:pt-[7.25rem] xl:pt-[7.75rem]">
            <h2 className="mb-5 text-[1.65rem] font-bold uppercase tracking-luxury text-nadi-ink sm:text-[1.85rem] lg:text-[2rem]">
              OUR MISSION
            </h2>
            <p className="max-w-mission text-[15px] leading-[1.65] text-nadi-muted">
              We saw a gap in the market — too many products overpromised and underdelivered. We
              set out to build something better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
