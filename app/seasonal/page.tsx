import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";

export default function SeasonalPage({
  searchParams
}: {
  searchParams?: { season?: string };
}) {
  const season = searchParams?.season;
  const all = getActiveProducts();
  const products = season === "summer" || season === "winter" ? all.filter((p) => p.season === season) : all;

  return (
    <main className="container page">
      <h1>Seasonal Essentials</h1>
      <p className="muted">Summer and Winter editions curated for climate and occasion.</p>
      <ProductGrid products={products} />
    </main>
  );
}
