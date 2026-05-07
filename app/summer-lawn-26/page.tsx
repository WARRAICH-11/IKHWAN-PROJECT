import { CategoryDivider } from "@/components/category-divider";
import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";

export default function SummerLawn26Page() {
  const products = getActiveProducts().filter((p) => p.season === "summer" && p.fabric === "lawn");

  return (
    <main className="raw-main">
      <CategoryDivider title="Summer Lawn 26" />
      <section className="raw-shell">
        <div className="raw-content">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}

