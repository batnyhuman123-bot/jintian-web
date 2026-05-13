import Image from "next/image";

const team = [
  {
    name: "JOHN DOE",
    role: "FOUNDER & CEO",
    description:
      "Focused on building a brand that prioritizes real results, transparency, and long-term trust.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    grayscale: false,
  },
  {
    name: "MARCUS LEE",
    role: "HEAD OF PRODUCT",
    description:
      "Leads product development with a focus on effective formulas and consistent performance outcomes.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    grayscale: true,
  },
  {
    name: "ETHAN WONG",
    role: "RESEARCH & INNOVATION",
    description:
      "We listen closely to our customers to refine our products and deliver better everyday performance solutions.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    grayscale: false,
  },
] as const;

export function TeamSection() {
  return (
    <section className="border-t border-[#E3DDD6] bg-nadi-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32 xl:px-[4.5rem]">
        <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-24">
          <p className="opacity-0-animate animate-fade-up mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-nadi-muted-light sm:text-[11px]">
            OUR TEAM
          </p>
          <div className="opacity-0-animate animate-fade-up animation-delay-100 mx-auto mb-7 h-px w-9 bg-[#C9C2BB]" aria-hidden />
          <h2 className="opacity-0-animate animate-fade-up animation-delay-100 mb-6 text-[clamp(1.65rem,4vw,2.35rem)] font-bold uppercase tracking-luxury text-nadi-ink">
            THE PEOPLE BEHIND IT
          </h2>
          <p className="opacity-0-animate animate-fade-up animation-delay-200 mx-auto max-w-2xl text-[15px] leading-[1.65] text-nadi-muted">
            A dedicated team driven by performance, innovation, and a commitment to doing things
            right.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-14 sm:gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 xl:gap-x-12">
          {team.map((member, i) => (
            <article
              key={member.name}
              className={`group flex flex-col items-center text-center opacity-0-animate animate-fade-up ${
                i === 0 ? "animation-delay-300" : i === 1 ? "animation-delay-400" : "animation-delay-500"
              }`}
            >
              <div className="relative mb-7 aspect-[3/4] w-full max-w-[340px] overflow-hidden bg-[#E8E4DF]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] ${
                    member.grayscale ? "grayscale" : ""
                  }`}
                  priority={i === 0}
                />
              </div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-luxury text-nadi-terracotta sm:text-[11px]">
                {member.role}
              </p>
              <h3 className="mb-4 text-[1.1rem] font-bold uppercase tracking-luxury text-nadi-ink sm:text-[1.2rem]">
                {member.name}
              </h3>
              <p className="mb-6 max-w-[19rem] text-[14px] leading-[1.65] text-nadi-muted sm:text-[15px]">
                {member.description}
              </p>
              <div className="h-px w-10 bg-[#C9C2BB]" aria-hidden />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
