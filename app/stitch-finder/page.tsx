"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/product-grid";
import { getActiveProducts } from "@/lib/products";

export default function StitchFinderPage() {
  const [occasion, setOccasion] = useState("daywear");
  const [fabric, setFabric] = useState("lawn");

  const products = useMemo(() => {
    const all = getActiveProducts();
    const targetSuite = occasion === "formal" || occasion === "bridal" ? "3-piece" : "2-piece";
    return all.filter((p) => p.fabric === fabric && p.suite === targetSuite);
  }, [occasion, fabric]);

  return (
    <main className="container page">
      <h1>Stitch-Finder</h1>
      <p className="muted">Choose your occasion and textile preference to find ideal 2-piece or 3-piece layouts.</p>
      <section className="card pad finder">
        <label>
          Occasion
          <select className="input" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="daywear">Daywear</option>
            <option value="festive">Festive</option>
            <option value="formal">Formal</option>
            <option value="bridal">Bridal</option>
          </select>
        </label>
        <label>
          Fabric
          <select className="input" value={fabric} onChange={(e) => setFabric(e.target.value)}>
            <option value="lawn">Lawn</option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="chiffon">Chiffon</option>
          </select>
        </label>
      </section>
      <ProductGrid products={products} />
    </main>
  );
}
