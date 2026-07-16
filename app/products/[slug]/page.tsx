import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import SocialSidebar from "../../components/SocialSidebar";
import Footer from "../../components/Footer";
import SaleProductDetail from "../../components/SaleProductDetail";
import { getSaleProduct, saleProducts } from "../../data/productPages";
import { createPageMetadata } from "../../lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return saleProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getSaleProduct(slug);
  if (!product) return { title: "Product" };
  return createPageMetadata({
    title: `${product.title} For Sale`,
    description: product.description,
    path: `/products/${product.slug}`,
    image: product.heroImage,
    keywords: [product.title, "SCLE India", "bulk supply", "export India"],
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getSaleProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <SocialSidebar />
      <main>
        <SaleProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
