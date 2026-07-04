import Header from "./components/Header";
import SocialSidebar from "./components/SocialSidebar";
import HeroSection from "./components/HeroSection";
import ProductsGrid from "./components/ProductsGrid";
import AboutSection from "./components/AboutSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import GlanceSection from "./components/GlanceSection";
import CompanyPromoSection from "./components/CompanyPromoSection";
import AnnualReportVideos from "./components/AnnualReportVideos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main>
        <HeroSection />
        <ProductsGrid />
        <CompanyPromoSection />
        <AboutSection />
        <CaseStudiesSection />
        <GlanceSection />
        <AnnualReportVideos />
      </main>
      <Footer />
    </>
  );
}
