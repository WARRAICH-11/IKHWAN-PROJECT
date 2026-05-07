"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readCart } from "@/lib/cart";

export function CartCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const cart = readCart();
      const total = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
      setCount(total);
    };
    update();
    window.addEventListener("cart-change", update);
    return () => window.removeEventListener("cart-change", update);
  }, []);

  return <Link href="/checkout">Cart ({count})</Link>;
}
