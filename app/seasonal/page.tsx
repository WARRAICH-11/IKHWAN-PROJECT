import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";
import { CategoryDivider } from "@/components/category-divider";

export default function SeasonalPage({
  searchParams
}: {
  searchParams?: { season?: string };
}) {
  const season = searchParams?.season;
  const all = getActiveProducts();
  const products = season === "summer" || season === "winter" ? all.filter((p) => p.season === season) : all;

  return (
    <main className="raw-main">
      <CategoryDivider title="Seasonal Essentials" />
      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h1>Seasonal Essentials</h1>
          <p className="raw-muted">Summer and Winter editions curated for climate and occasion.</p>
        </div>
        <div className="raw-content">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
