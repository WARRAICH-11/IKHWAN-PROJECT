import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";

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
    <main className="container page">
      <h1>Fabric Specialists</h1>
      <p className="muted">Lawn, Cotton, Silk, and Chiffon with textile-led curation.</p>
      <ProductGrid products={products} />
    </main>
  );
}
