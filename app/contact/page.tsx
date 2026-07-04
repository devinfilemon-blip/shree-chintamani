import type { Metadata } from "next";
import Header from "../components/Header";
import SocialSidebar from "../components/SocialSidebar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { companyInfo } from "../data/companyInfo";

export const metadata: Metadata = {
  title: `Contact Us | ${companyInfo.shortName}`,
  description: `Get in touch with ${companyInfo.shortName} for logistics, exports, and bulk supply inquiries.`,
};

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
