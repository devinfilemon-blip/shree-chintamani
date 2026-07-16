import { footerCompanyLinks, footerProductLinks, footerServiceLinks } from "../data/homeContent";
import { companyInfo } from "../data/companyInfo";
import CookieSettingsTrigger from "./CookieSettingsTrigger";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-10 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-3">
            <Logo variant="light" className="mb-5" />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {companyInfo.bannerSlogan}. Pune-based logistics, exports, ethanol, molasses, ENA, ginger &amp; garlic supply.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-orange font-bold text-xs uppercase tracking-[0.15em] mb-5">Company</h4>
            <ul className="space-y-3">
              {footerCompanyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-orange text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-orange transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-orange font-bold text-xs uppercase tracking-[0.15em] mb-5">Products</h4>
            <ul className="space-y-3">
              {footerProductLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-orange text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-orange transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-orange font-bold text-xs uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServiceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/70 hover:text-orange text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-orange transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-orange font-bold text-xs uppercase tracking-[0.15em] mb-5">Quick Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {companyInfo.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="hover:text-orange transition-colors block">
                    <span className="text-white/50 text-xs">{p.label}</span>
                    <br />
                    {p.display}
                  </a>
                </li>
              ))}
              {companyInfo.displayEmails.map((addr) => (
                <li key={addr}>
                  <a href={`mailto:${addr}`} className="hover:text-orange transition-colors break-all">
                    {addr}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={companyInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @shree_chintamani_logistics
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#2a2a2a] py-3 border-t border-white/10">
        <p className="text-center text-white/90 font-bold text-xs uppercase tracking-[0.2em]">
          {companyInfo.bannerSlogan}
        </p>
      </div>

      <div className="bg-[#001a33] border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            <a href="/cookie-policy" className="hover:text-orange transition-colors">Cookie Policy</a>
            <CookieSettingsTrigger />
          </div>
        </div>
      </div>
    </footer>
  );
}
