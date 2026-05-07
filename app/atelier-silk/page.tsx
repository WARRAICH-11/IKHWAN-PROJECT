import { CategoryDivider } from "@/components/category-divider";
import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";

export default function AtelierSilkPage() {
  const products = getActiveProducts().filter((p) => p.fabric === "silk");

  return (
    <main className="raw-main">
      <CategoryDivider title="Atelier Silk" />
      <section className="raw-shell">
        <div className="raw-content">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}

