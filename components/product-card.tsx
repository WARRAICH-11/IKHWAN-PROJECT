import Image from "next/image";
import { Product } from "@/lib/products";
import { AddToCartButton } from "@/components/add-to-cart-button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <div style={{ position: "relative", aspectRatio: "3 / 4" }}>
        <Image src={product.image} alt={product.title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="pad stack">
        <strong>{product.title}</strong>
        <span className="meta-line">
          {product.fabric.toUpperCase()} | {product.suite} | {product.season}
        </span>
        <span className="muted">{product.description}</span>
        <strong>Rs. {product.price.toLocaleString()}</strong>
        <AddToCartButton productId={product.id} />
      </div>
    </article>
  );
}
