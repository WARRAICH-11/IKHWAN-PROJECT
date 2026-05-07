import Link from "next/link";
import { getActiveProducts } from "@/lib/products";
import { ProductGrid } from "@/components/product-grid";
import { CategoryDivider } from "@/components/category-divider";

export default function HomePage() {
  const products = getActiveProducts();
  const featured = products.filter((p) => p.featured);
  const silkDrops = products.filter((p) => p.fabric === "silk").slice(0, 3);
  const cotton = products.filter((p) => p.fabric === "cotton").slice(0, 3);
  const chiffon = products.filter((p) => p.fabric === "chiffon").slice(0, 3);

  return (
    <main className="raw-main">
      <section className="raw-hero">
        <div className="raw-blob hero-a" />
        <div className="raw-blob hero-b" />
        <div className="raw-hero-inner">
          <h1 className="raw-hero-line" data-reveal>Ikhwan</h1>
          <h1 className="raw-hero-line second" data-reveal>Unstitched</h1>
          <div className="raw-hero-meta" data-reveal>
            <Link href="/seasonal?season=summer" className="raw-cta">
              <span>Summer Lawn &apos;26</span>
            </Link>
            <Link href="/elite-circle" className="raw-cta">
              <span>Ikhwan Elite Circle</span>
            </Link>
          </div>
        </div>
      </section>

      <CategoryDivider title="Summer Lawn" />

      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h2>Artisanal Drop Calendar</h2>
          <p className="raw-muted">Limited-edition Silk compositions arriving in controlled releases.</p>
        </div>
        <div className="raw-content">
          <ProductGrid products={silkDrops} />
        </div>
      </section>

      <CategoryDivider title="Atelier Silk" />

      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h2>Crafted for Generations</h2>
          <p className="raw-muted">Cotton textiles engineered for enduring structure and tactile authority.</p>
        </div>
        <div className="raw-content">
          <ProductGrid products={cotton} />
        </div>
      </section>

      <CategoryDivider title="Noor Reserve" />

      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h2>Ethereal Grace</h2>
          <p className="raw-muted">Chiffon textures with fluid movement and pure editorial presence.</p>
        </div>
        <div className="raw-content">
          <ProductGrid products={chiffon} />
        </div>
      </section>

      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h2>Featured Collection</h2>
        </div>
        <div className="raw-content">
          <ProductGrid products={featured} />
        </div>
      </section>
    </main>
  );
}
