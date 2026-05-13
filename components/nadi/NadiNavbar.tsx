import Link from "next/link";
import { IconCart, IconUser } from "./NadiIcons";

const links = [
  { href: "#", label: "SHOP" },
  { href: "#", label: "TAKE QUIZ" },
  { href: "#", label: "OUR STORY" },
  { href: "#", label: "BLOG" },
] as const;

export function NadiNavbar() {
  return (
    <header className="relative z-10 grid h-[72px] w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch border-b border-[rgba(255,228,210,0.12)]">
      <div className="flex items-center border-r border-[rgba(255,228,210,0.12)] pl-6 pr-5 sm:pl-8 sm:pr-6 lg:pl-12 lg:pr-8 xl:pl-16">
        <Link
          href="/"
          className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-75"
        >
          NADI
        </Link>
      </div>

      <nav
        className="flex min-w-0 items-center justify-center gap-x-[clamp(0.65rem,1.8vw,1.85rem)] overflow-x-auto border-r border-[rgba(255,228,210,0.12)] px-3 py-2 sm:px-8 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Primary"
      >
        {links.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.11em] text-white/95 transition-opacity duration-300 hover:opacity-70 sm:text-[11px] sm:tracking-nav"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-x-5 pr-6 pl-4 sm:pr-8 sm:pl-5 lg:pr-12 lg:pl-6 xl:pr-16">
        <Link
          href="#"
          className="text-white transition-opacity duration-300 hover:opacity-70"
          aria-label="Account"
        >
          <IconUser className="h-[22px] w-[22px]" />
        </Link>
        <Link
          href="#"
          className="text-white transition-opacity duration-300 hover:opacity-70"
          aria-label="Cart"
        >
          <IconCart className="h-[22px] w-[22px]" />
        </Link>
      </div>
    </header>
  );
}
