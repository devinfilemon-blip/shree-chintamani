import { footerCompanyLinks, footerProductLinks, footerServiceLinks } from "../data/homeContent";
import { companyInfo } from "../data/companyInfo";
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
              <li>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-orange transition-colors break-all">
                  {companyInfo.email}
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
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
