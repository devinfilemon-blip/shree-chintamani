import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import SocialSidebar from "../../components/SocialSidebar";
import Footer from "../../components/Footer";
import ServiceDetail from "../../components/ServiceDetail";
import { getService, services } from "../../data/servicePages";
import { createPageMetadata } from "../../lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    keywords: [service.title, "SCLE India", "logistics Pune", "freight forwarding"],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <SocialSidebar />
      <main>
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </>
  );
}
