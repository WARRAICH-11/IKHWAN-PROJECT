import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";
import { CategoryDivider } from "@/components/category-divider";

const fabrics = ["lawn", "cotton", "silk", "chiffon"] as const;

export default function FabricsPage({
  searchParams
}: {
  searchParams?: { fabric?: string };
}) {
  const selected = searchParams?.fabric;
  const all = getActiveProducts();
  const products = fabrics.includes(selected as (typeof fabrics)[number])
    ? all.filter((p) => p.fabric === selected)
    : all;

  return (
    <main className="raw-main">
      <CategoryDivider title="Fabric Specialists" />
      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h1>Fabric Specialists</h1>
          <p className="raw-muted">Lawn, Cotton, Silk, and Chiffon with textile-led curation.</p>
        </div>
        <div className="raw-content">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
