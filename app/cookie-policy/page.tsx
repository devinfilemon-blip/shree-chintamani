import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialSidebar from "../components/SocialSidebar";
import { companyInfo } from "../data/companyInfo";

export const metadata: Metadata = {
  title: `Cookie Policy | ${companyInfo.shortName}`,
  description: `Learn how ${companyInfo.shortName} uses cookies on scleindia.com and how you can manage your preferences.`,
};

const cookieRows = [
  {
    name: "scle-cookie-consent",
    type: "Essential",
    purpose: "Stores your cookie consent choices so we do not ask again on every visit.",
    duration: "1 year",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main className="pt-[80px] lg:pt-[96px]">
        <section className="bg-section-bg py-14 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 lg:px-10">
            <p className="text-orange text-xs font-bold uppercase tracking-[0.2em] mb-3">Legal</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Cookie Policy</h1>
            <p className="text-muted leading-relaxed">
              This Cookie Policy explains how {companyInfo.name} (&quot;SCLE India&quot;, &quot;we&quot;, &quot;us&quot;)
              uses cookies and similar technologies on{" "}
              <a href="https://scleindia.com" className="text-navy font-semibold hover:text-orange">
                scleindia.com
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-14 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 lg:px-10 space-y-10 text-muted leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">What are cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help websites
                remember preferences, keep sessions secure, and understand how pages are used.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">How we use cookies</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-navy">Essential cookies</strong> are required for basic website
                  functionality, including remembering your cookie consent choice.
                </li>
                <li>
                  <strong className="text-navy">Analytics cookies</strong> are optional and help us measure traffic
                  and improve our website. These load only if you accept them.
                </li>
                <li>
                  <strong className="text-navy">Marketing cookies</strong> are optional and may be used in the
                  future to measure advertising performance. These also load only with your consent.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-4">Cookies we use</h2>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-sm">
                  <thead className="bg-section-bg text-navy">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Name</th>
                      <th className="px-4 py-3 text-left font-semibold">Type</th>
                      <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                      <th className="px-4 py-3 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieRows.map((row) => (
                      <tr key={row.name} className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-xs text-navy">{row.name}</td>
                        <td className="px-4 py-3">{row.type}</td>
                        <td className="px-4 py-3">{row.purpose}</td>
                        <td className="px-4 py-3">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm">
                If analytics or marketing tools are enabled later, this page will be updated to list those cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">Managing your preferences</h2>
              <p>
                When you first visit our website, you can accept all cookies, allow essential cookies only, or
                choose specific categories. You can change your choice at any time using the{" "}
                <strong className="text-navy">Cookie Settings</strong> link in the website footer.
              </p>
              <p className="mt-3">
                You can also control cookies through your browser settings. Blocking essential cookies may affect
                how the consent banner behaves on return visits.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">Contact</h2>
              <p>
                Questions about this Cookie Policy can be sent to{" "}
                <a href={`mailto:${companyInfo.email}`} className="text-navy font-semibold hover:text-orange">
                  {companyInfo.email}
                </a>
                .
              </p>
              <p className="mt-3 text-sm">Last updated: June 2026</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
