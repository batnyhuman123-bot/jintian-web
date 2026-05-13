import { NadiNavbar } from "./NadiNavbar";

/**
 * Hero background matches Figma gradient stops (horizontal):
 * 0% #461901 · 50% #7B3306 · 100% #973C00
 */
export function NadiHero() {
  return (
    <section className="relative isolate min-h-[min(100vh,520px)] overflow-hidden bg-[#461901] lg:min-h-0">
      {/* Primary — exact Figma linear gradient (horizontal) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#461901_0%,#7B3306_50%,#973C00_100%)]"
        aria-hidden
      />
      {/* Soft vignette — same hue family, keeps edges cinematic without new palette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_105%_95%_at_50%_48%,rgba(70,25,1,0)_52%,rgba(70,25,1,0.45)_100%)]"
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
