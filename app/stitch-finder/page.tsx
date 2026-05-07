"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";
import { CategoryDivider } from "@/components/category-divider";

export default function StitchFinderPage() {
  const [occasion, setOccasion] = useState("daywear");
  const [fabric, setFabric] = useState("lawn");

  const products = useMemo(() => {
    const all = getActiveProducts();
    const targetSuite = occasion === "formal" || occasion === "bridal" ? "3-piece" : "2-piece";
    return all.filter((p) => p.fabric === fabric && p.suite === targetSuite);
  }, [occasion, fabric]);

  return (
    <main className="raw-main">
      <CategoryDivider title="Stitch Finder" />
      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h1>Stitch-Finder</h1>
          <p className="raw-muted">Choose your occasion and textile preference to find ideal 2-piece or 3-piece layouts.</p>
        </div>
        <section className="raw-content raw-two-col raw-cardless" data-reveal>
          <label className="raw-form-label">
          Occasion
            <select className="raw-form-select" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option value="daywear">Daywear</option>
              <option value="festive">Festive</option>
              <option value="formal">Formal</option>
              <option value="bridal">Bridal</option>
            </select>
          </label>
          <label className="raw-form-label">
            Fabric
            <select className="raw-form-select" value={fabric} onChange={(e) => setFabric(e.target.value)}>
              <option value="lawn">Lawn</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="chiffon">Chiffon</option>
            </select>
          </label>
        </section>
        <div className="raw-content">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
