import { IconGearInnovation, IconLeafGlobal } from "./NadiIcons";

const visionFeatures = [
  {
    index: "01",
    title: "GLOBAL IMPACT",
    body: "We strive to reach and support people worldwide on their health journey.",
    Icon: IconLeafGlobal,
  },
  {
    index: "02",
    title: "INNOVATION FORWARD",
    body: "We continuously evolve our products using the latest research and technology.",
    Icon: IconGearInnovation,
  },
] as const;

export function StoryVisionSection() {
  return (
    <section className="border-t border-[#E3DDD6] bg-nadi-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-[5.5rem] xl:px-[4.5rem]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.12fr)] lg:gap-x-[clamp(2.5rem,5vw,4.5rem)] xl:gap-x-24">
          <div className="opacity-0-animate animate-fade-up animation-delay-100 lg:pr-2">
            <h2 className="mb-5 text-[1.65rem] font-bold uppercase tracking-luxury text-nadi-ink sm:text-[1.85rem] lg:text-[2rem]">
              OUR VISION
            </h2>
            <p className="max-w-vision text-[15px] leading-[1.65] text-nadi-muted">
              We aim to become a trusted global wellness brand that empowers healthier lifestyles
              through innovation and transparency.
            </p>
          </div>

          <div className="opacity-0-animate animate-fade-up animation-delay-200">
            <ul className="divide-y divide-[#E3DDD6] border-y border-[#E3DDD6]">
              {visionFeatures.map((item) => (
                <li key={item.index} className="py-9 lg:py-10 xl:py-11">
                  <div className="flex gap-5 sm:gap-6 lg:gap-8">
                    <div className="shrink-0 pt-0.5 text-[#9A734E]">
                      <item.Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                    </div>
                    <div className="min-w-0 flex-1 pr-2">
                      <h3 className="mb-2.5 text-[11px] font-semibold uppercase tracking-luxury text-nadi-ink sm:text-xs">
                        {item.title}
                      </h3>
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
        </div>
      </div>
    </section>
  );
}
