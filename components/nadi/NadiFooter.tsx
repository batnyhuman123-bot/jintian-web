import Link from "next/link";
import {
  IconSocialFacebook,
  IconSocialInstagram,
  IconSocialTiktok,
  IconSocialX,
} from "./NadiIcons";

const quickLinks = [
  { href: "#", label: "Shop" },
  { href: "#", label: "Take Our Quiz" },
  { href: "#", label: "Our Story" },
  { href: "#", label: "Blog" },
] as const;

const social = [
  { href: "#", label: "Instagram", Icon: IconSocialInstagram },
  { href: "#", label: "Facebook", Icon: IconSocialFacebook },
  { href: "#", label: "X", Icon: IconSocialX },
  { href: "#", label: "TikTok", Icon: IconSocialTiktok },
] as const;

export function NadiFooter() {
  return (
    <footer className="border-t border-[#E3DDD6] bg-nadi-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-[4.5rem] xl:px-[4.5rem]">
        <div className="grid gap-14 opacity-0-animate animate-fade-up animation-delay-100 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-16">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-nadi-ink">
              NADI
            </p>
            <p className="mb-8 max-w-sm text-[14px] leading-[1.65] text-nadi-muted sm:text-[15px]">
              Premium supplements designed to support your health, energy, and performance. Built
              with quality ingredients you can trust every day.
            </p>
            <div className="flex flex-wrap gap-3">
              {social.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-[#D8D2CA] text-nadi-muted transition-colors duration-300 hover:border-nadi-muted hover:text-nadi-ink"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </Link>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-4" aria-label="Footer">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-luxury text-nadi-ink">
              QUICK LINKS
            </p>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-nadi-muted transition-colors duration-300 hover:text-nadi-ink sm:text-[15px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:col-span-3 lg:block" aria-hidden />
        </div>

        <div className="mt-14 border-t border-[#E3DDD6] pt-8 sm:mt-16 sm:pt-9">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-nadi-muted-light sm:text-[11px]">
            © 2026 NADI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
