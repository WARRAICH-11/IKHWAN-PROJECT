import Link from "next/link";
import { getActiveProducts } from "@/lib/products";
import { ProductGrid } from "@/components/product-grid";

export default function HomePage() {
  const products = getActiveProducts();
  const featured = products.filter((p) => p.featured);
  const silkDrops = products.filter((p) => p.fabric === "silk").slice(0, 3);
  const cotton = products.filter((p) => p.fabric === "cotton").slice(0, 3);
  const chiffon = products.filter((p) => p.fabric === "chiffon").slice(0, 3);

  return (
    <main className="container">
      <section className="hero luxury-hero">
        <p className="tag">Heritage Reimagined</p>
        <h1>Ikhwan Unstitched Summer Lawn &apos;26 Collection</h1>
        <p className="muted">Timeless Elegance, Unstitched.</p>
        <div className="hero-actions">
          <Link href="/seasonal?season=summer" className="btn">Explore Summer Lawn</Link>
          <Link href="/elite-circle" className="btn btn-alt">Join Ikhwan Elite Circle</Link>
        </div>
      </section>

      <section className="section">
        <h2>Artisanal Drop Calendar</h2>
        <p className="muted">Upcoming limited-edition Silk releases.</p>
        <ProductGrid products={silkDrops} />
      </section>

      <section className="section">
        <h2>Crafted for Generations</h2>
        <p className="muted">Cotton collections built for long-wear structure and graceful drape.</p>
        <ProductGrid products={cotton} />
      </section>

      <section className="section">
        <h2>Ethereal Grace</h2>
        <p className="muted">Chiffon textures with fluid movement and refined layering.</p>
        <ProductGrid products={chiffon} />
      </section>

      <section className="section">
        <h2>Featured Collection</h2>
        <ProductGrid products={featured} />
      </section>
    </main>
  );
}
