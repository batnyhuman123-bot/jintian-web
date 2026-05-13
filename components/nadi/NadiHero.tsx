import { NadiNavbar } from "./NadiNavbar";

export function NadiHero() {
  return (
    <section className="relative isolate min-h-[min(100vh,520px)] overflow-hidden bg-[#2a1812] lg:min-h-0">
      {/* Base + vertical depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#3d261d] via-[#2d1b14] to-[#1f110d]"
        aria-hidden
      />
      {/* Cinematic radial glow */}
      <div
        className="pointer-events-none absolute inset-0 animate-hero-glow bg-[radial-gradient(ellipse_55%_48%_at_50%_42%,rgba(92,58,44,0.55)_0%,rgba(45,27,20,0.08)_55%,rgba(26,15,12,0)_78%)]"
        aria-hidden
      />

      <div className="relative flex min-h-[420px] flex-col lg:min-h-[440px]">
        <NadiNavbar />

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-14 pt-4 text-center sm:px-10 lg:pb-16 lg:pt-2">
          <p className="opacity-0-animate animate-fade-up mb-7 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-white/90 sm:text-[11px]">
            <span className="h-px w-8 bg-white/35 sm:w-10" aria-hidden />
            <span>BUILT FOR PERFORMANCE</span>
            <span className="h-px w-8 bg-white/35 sm:w-10" aria-hidden />
          </p>

          <h1 className="opacity-0-animate animate-fade-up animation-delay-100 mb-7 text-[clamp(2.35rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
            OUR STORY
          </h1>

          <p className="opacity-0-animate animate-fade-up animation-delay-200 max-w-hero-copy text-[15px] leading-[1.65] text-[#D1C7BD]">
            What started as a mission to improve everyday performance has grown into a brand
            focused on energy, strength, and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
