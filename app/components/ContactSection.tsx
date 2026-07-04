import { companyInfo } from "../data/companyInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-11 h-11 rounded-full bg-orange/15 border border-orange/30 flex items-center justify-center text-orange shrink-0 mx-auto">
      {children}
    </span>
  );
}

export default function ContactSection() {
  return (
    <section className="border-t-4 border-orange bg-[#002847]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-10 py-12 lg:py-14">
        <h1 className="text-center text-lg lg:text-xl font-bold uppercase tracking-[0.2em] text-white mb-2">
          Contact Us
        </h1>
        <p className="text-center text-white/50 text-xs uppercase tracking-widest mb-10">
          {companyInfo.motto}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
          {companyInfo.representatives.map((rep) => (
            <a
              key={rep.tel}
              href={`tel:${rep.tel}`}
              className="group flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange/40 hover:bg-white/[0.08] transition-all text-center"
            >
              <ContactIcon>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8z" />
                </svg>
              </ContactIcon>
              <p className="text-white font-semibold text-sm mt-4">{rep.name}</p>
              <p className="text-orange font-bold text-lg mt-1 group-hover:scale-105 transition-transform">
                {rep.display}
              </p>
            </a>
          ))}

          <a
            href={`mailto:${companyInfo.email}`}
            className="group flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange/40 hover:bg-white/[0.08] transition-all text-center"
          >
            <ContactIcon>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </ContactIcon>
            <p className="text-orange text-xs font-bold uppercase tracking-widest mt-4 mb-1">Email</p>
            <p className="text-white font-semibold text-sm group-hover:text-orange transition-colors break-all">
              {companyInfo.email}
            </p>
          </a>

          <a
            href={companyInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange/40 hover:bg-white/[0.08] transition-all text-center group"
          >
            <ContactIcon>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </ContactIcon>
            <p className="text-orange text-xs font-bold uppercase tracking-widest mt-4 mb-1">Address</p>
            <p className="text-white/85 text-sm leading-relaxed group-hover:text-white transition-colors">
              {companyInfo.address.line1}
              <br />
              {companyInfo.address.line2}
              <br />
              {companyInfo.address.pincode}
            </p>
            <span className="mt-3 text-orange text-xs font-semibold">View on map →</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <ContactForm />
          <ContactMap />
        </div>
      </div>
    </section>
  );
}
