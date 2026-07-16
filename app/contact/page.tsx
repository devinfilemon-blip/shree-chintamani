import type { Metadata } from "next";
import Header from "../components/Header";
import SocialSidebar from "../components/SocialSidebar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { companyInfo } from "../data/companyInfo";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description: `Get in touch with ${companyInfo.shortName} for logistics, exports, ethanol, molasses, ENA, ginger, and garlic supply inquiries.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main className="pt-[80px] lg:pt-[96px]">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
