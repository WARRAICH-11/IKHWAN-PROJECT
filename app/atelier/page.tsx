import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";
import { CategoryDivider } from "@/components/category-divider";

export default function AtelierPage() {
  const products = getActiveProducts().filter((p) => p.atelier);

  return (
    <main className="raw-main">
      <CategoryDivider title="Bridal Gallery" />
      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h1>The Atelier</h1>
          <p className="raw-muted">Bridal Gallery with premium artisanal silk reserves.</p>
        </div>
        <div className="raw-content">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
