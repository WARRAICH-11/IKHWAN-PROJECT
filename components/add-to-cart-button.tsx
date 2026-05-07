"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";

export function AddToCartButton({ productId }: { productId: string }) {
  const [label, setLabel] = useState("Add to cart");
  return (
    <button
      className="raw-cta"
      aria-label={`Add product ${productId} to cart`}
      onClick={() => {
        addToCart(productId);
        setLabel("Added");
        setTimeout(() => setLabel("Add to cart"), 1200);
      }}
      type="button"
    >
      <span>{label}</span>
    </button>
  );
}
