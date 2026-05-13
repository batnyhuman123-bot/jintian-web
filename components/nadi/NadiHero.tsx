import { NadiNavbar } from "./NadiNavbar";

export function NadiHero() {
  return (
    <section className="relative isolate min-h-[min(100vh,520px)] overflow-hidden bg-[#1a0805] lg:min-h-0">
      {/* Layer 1 — deep chocolate / burnt-umber foundation */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#2c0f0a_0%,#240a06_14%,#1f0905_32%,#1a0704_52%,#140503_72%,#0f0302_100%)]"
        aria-hidden
      />
      {/* Layer 2 — wide warm mahogany wash (radial “stage light”) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_60%_at_50%_44%,rgba(120,48,22,0.5)_0%,rgba(88,34,16,0.28)_38%,rgba(52,20,10,0.12)_58%,rgba(26,8,5,0)_78%)]"
        aria-hidden
      />
      {/* Layer 3 — burnt-orange-brown ember core (center glow behind type) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_42%_36%_at_50%_41%,rgba(188,92,42,0.32)_0%,rgba(154,62,24,0.2)_28%,rgba(110,40,16,0.1)_48%,rgba(45,16,8,0)_72%)]"
        aria-hidden
      />
      {/* Layer 4 — subtle ambient pulse */}
      <div
        className="pointer-events-none absolute inset-0 animate-hero-glow bg-[radial-gradient(ellipse_38%_34%_at_50%_42%,rgba(200,102,48,0.2)_0%,rgba(130,52,22,0.1)_42%,transparent_68%)]"
        aria-hidden
      />
      {/* Layer 5 — soft vignette into deep umber edges */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_128%_105%_at_50%_48%,rgba(26,8,5,0)_30%,rgba(16,5,3,0.55)_68%,rgba(6,1,0,0.9)_100%)]"
        aria-hidden
      />
      {/* Layer 6 — top blend so navbar reads continuous with hero */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(100,38,18,0.28)_0%,rgba(45,16,8,0)_26%)]"
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
