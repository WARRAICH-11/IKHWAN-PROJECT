import Image from "next/image";
import { Product } from "@/lib/products";
import { AddToCartButton } from "@/components/add-to-cart-button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="raw-product" data-reveal>
      <div className="raw-image-frame">
        <Image src={product.image} alt={product.title} fill className="raw-image" />
      </div>
      <div className="raw-product-body">
        <strong>{product.title}</strong>
        <span className="raw-meta">
          {product.fabric.toUpperCase()} | {product.suite} | {product.season}
        </span>
        <span className="raw-muted">{product.description}</span>
        <strong className="raw-price">Rs. {product.price.toLocaleString()}</strong>
        <AddToCartButton productId={product.id} />
      </div>
    </article>
  );
}
