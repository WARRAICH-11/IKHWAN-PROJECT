import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";

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
    <main className="container page">
      <h1>Suite Variations</h1>
      <p className="muted">Explore 2-piece and 3-piece unstitched compositions by occasion.</p>
      <ProductGrid products={products} />
    </main>
  );
}
