import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";
import { CategoryDivider } from "@/components/category-divider";

export default function SuiteVariationsPage({
  searchParams
}: {
  searchParams?: { suite?: string; fabric?: string };
}) {
  const all = getActiveProducts();
  const suite = searchParams?.suite;
  const fabric = searchParams?.fabric;

  const products = all.filter((p) => {
    const suiteMatch = suite === "2-piece" || suite === "3-piece" ? p.suite === suite : true;
    const fabricMatch = fabric ? p.fabric === fabric : true;
    return suiteMatch && fabricMatch;
  });

  return (
    <main className="raw-main">
      <CategoryDivider title="Suite Variations" />
      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h1>Suite Variations</h1>
          <p className="raw-muted">Explore 2-piece and 3-piece unstitched compositions by occasion.</p>
        </div>
        <div className="raw-content">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
