import { NadiNavbar } from "./NadiNavbar";

export function NadiHero() {
  return (
    <section className="relative isolate min-h-[min(100vh,520px)] overflow-hidden bg-[#2A0D05] lg:min-h-0">
      {/* Layer 1 — deep burnt base + rich mahogany vertical depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#3f160f_0%,#341209_10%,#2A0D05_28%,#2f0e08_52%,#240805_74%,#160502_100%)]"
        aria-hidden
      />
      {/* Layer 2 — warm mahogany lateral richness (very soft) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_70%_at_50%_-5%,rgba(106,36,10,0.35)_0%,rgba(42,13,5,0)_55%)]"
        aria-hidden
      />
      {/* Layer 3 — cinematic amber / ember center glow (behind headline) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_42%_at_50%_38%,rgba(164,71,18,0.26)_0%,rgba(139,50,12,0.12)_32%,rgba(74,22,7,0.06)_52%,rgba(42,13,5,0)_72%)]"
        aria-hidden
      />
      {/* Layer 4 — breathing ambient pulse (subtle) */}
      <div
        className="pointer-events-none absolute inset-0 animate-hero-glow bg-[radial-gradient(ellipse_44%_38%_at_50%_40%,rgba(180,82,24,0.18)_0%,rgba(106,36,10,0.08)_45%,transparent_70%)]"
        aria-hidden
      />
      {/* Layer 5 — edge vignette for premium depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_118%_92%_at_50%_44%,rgba(42,13,5,0)_38%,rgba(22,6,2,0.55)_78%,rgba(10,2,0,0.88)_100%)]"
        aria-hidden
      />
      {/* Layer 6 — gentle top wash (integrated navbar zone) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(106,36,10,0.22)_0%,rgba(42,13,5,0)_22%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[420px] flex-col lg:min-h-[440px]">
        <NadiNavbar />

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-14 pt-4 text-center sm:px-10 lg:pb-16 lg:pt-2">
          <p className="opacity-0-animate animate-fade-up mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A88A] sm:text-[11px]">
            <span className="h-px w-8 bg-[#C9A88A]/45 sm:w-10" aria-hidden />
            <span>BUILT FOR PERFORMANCE</span>
            <span className="h-px w-8 bg-[#C9A88A]/45 sm:w-10" aria-hidden />
          </p>

          <h1 className="opacity-0-animate animate-fade-up animation-delay-100 mb-7 text-[clamp(2.35rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
            OUR STORY
          </h1>

          <p className="opacity-0-animate animate-fade-up animation-delay-200 max-w-hero-copy text-[15px] leading-[1.65] text-[#D8C9BC]">
            What started as a mission to improve everyday performance has grown into a brand
            focused on energy, strength, and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
