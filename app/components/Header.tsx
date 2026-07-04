"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/homeContent";
import Logo from "./Logo";

/** Section IDs in top-to-bottom page order */
const SCROLL_SECTIONS = ["home", "products", "services", "about", "videos"] as const;

const LABEL_TO_SECTION: Record<string, string> = {
  Home: "home",
  "About Us": "about",
  Products: "products",
  Services: "services",
  Contact: "contact",
  Media: "videos",
};

const HEADER_OFFSET = 130;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const updateActiveFromScroll = useCallback(() => {
    if (pathname !== "/") return;

    const scrollY = window.scrollY + HEADER_OFFSET;
    let current = "home";

    for (const id of SCROLL_SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }

    setActiveSection(current);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.replace("#", "");
    if (hash && SCROLL_SECTIONS.includes(hash as (typeof SCROLL_SECTIONS)[number])) {
      setActiveSection(hash);
    } else {
      updateActiveFromScroll();
    }

    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("hashchange", updateActiveFromScroll);
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("hashchange", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
    };
  }, [pathname, updateActiveFromScroll]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded((current) => (current === label ? null : label));
  };

  const isActive = (label: string) => {
    if (label === "Products" && pathname.startsWith("/products")) return true;
    if (label === "Services" && pathname.startsWith("/services")) return true;
    if (label === "Contact" && pathname === "/contact") return true;
    if (pathname !== "/") return false;

    const section = LABEL_TO_SECTION[label];
    return section === activeSection;
  };

  const linkClass = (label: string, isDropdown = false) => {
    const active = isActive(label);
    const open = isDropdown && openDropdown === label;

    if (active) return "nav-active text-orange";
    if (open) return "text-orange";
    return "text-navy/85 hover:text-orange";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between h-[80px] lg:h-[96px]">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-stretch h-full gap-6 xl:gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`relative h-full flex items-center gap-1.5 px-1 text-[15px] lg:text-base font-semibold tracking-wide transition-colors ${linkClass(link.label, true)}`}
                  >
                    {link.label}
                    <svg className="w-3 h-3 text-orange" fill="currentColor" viewBox="0 0 10 6">
                      <path d="M5 6L0 0h10L5 6z" />
                    </svg>
                  </Link>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 min-w-[220px] bg-white border border-border shadow-lg rounded-b-lg py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm font-semibold text-navy hover:bg-orange-pale hover:text-orange transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative h-full flex items-center gap-1.5 px-1 text-[15px] lg:text-base font-semibold tracking-wide transition-colors ${linkClass(link.label)}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <button
            type="button"
            onClick={() => (menuOpen ? closeMobileMenu() : setMenuOpen(true))}
            className="lg:hidden p-2 text-navy"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 shadow-lg max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-gray-100 last:border-0">
              {link.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggleMobileExpanded(link.label)}
                    className={`flex w-full items-center justify-between py-3 font-semibold text-sm ${
                      isActive(link.label) ? "text-orange" : "text-navy"
                    }`}
                    aria-expanded={mobileExpanded === link.label}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 text-orange shrink-0 transition-transform duration-200 ${
                        mobileExpanded === link.label ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 10 6"
                    >
                      <path d="M5 6L0 0h10L5 6z" />
                    </svg>
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="pb-2 pl-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="block py-2.5 pl-3 text-sm text-muted hover:text-orange border-l-2 border-orange/20 hover:border-orange"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block py-3 font-semibold text-sm ${
                    isActive(link.label) ? "text-orange" : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
