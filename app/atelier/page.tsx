import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";

export default function AtelierPage() {
  const products = getActiveProducts().filter((p) => p.atelier);

  return (
    <main className="container page">
      <h1>The Atelier</h1>
      <p className="muted">Bridal Gallery with premium artisanal silk reserves.</p>
      <ProductGrid products={products} />
    </main>
  );
}
