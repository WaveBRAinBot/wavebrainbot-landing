"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WA_LINK } from "@/lib/constants";
import LangSwitcher from "@/components/LangSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation("common");

  const navItems = [
    { key: "nav.home",         href: "/" },
    { key: "nav.how_it_works", href: "/como-funciona" },
    { key: "nav.niches",       href: "/para-quem" },
    { key: "nav.pricing",      href: "/precos" },
    { key: "nav.blog",         href: "/blog" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt=""
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="brand-name text-lg">WaveBRAinBot</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === item.href
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop right: lang + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LangSwitcher />
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "font-semibold text-black"
              )}
              style={{ background: "var(--brand-green)" }}
            >
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                )}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-2 flex items-center justify-between gap-3">
              <LangSwitcher className="flex-1 justify-center" />
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "flex-1 font-semibold text-black justify-center"
                )}
                style={{ background: "var(--brand-green)" }}
              >
                {t("nav.cta")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
