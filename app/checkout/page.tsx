"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { clearCart, readCart } from "@/lib/cart";
import { products } from "@/lib/products";

type Line = {
  productId: string;
  title: string;
  unitPrice: number;
  quantity: number;
};

export default function CheckoutPage() {
  const [lines, setLines] = useState<Line[]>([]);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cart = readCart();
    const next = Object.entries(cart)
      .map(([productId, quantity]) => {
        const p = products.find((x) => x.id === productId && x.active);
        if (!p) return null;
        return { productId, quantity, title: p.title, unitPrice: p.price };
      })
      .filter(Boolean) as Line[];
    setLines(next);
  }, []);

  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0), [lines]);
  const shipping = lines.length > 0 ? 150 : 0;
  const total = subtotal + shipping;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lines.length === 0) {
      setStatus("Cart is empty.");
      return;
    }

    setLoading(true);
    setStatus("");
    const formData = new FormData(event.currentTarget);
    const payload = {
      customerName: String(formData.get("customerName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      address: String(formData.get("address") || ""),
      notes: String(formData.get("notes") || ""),
      items: lines.map((l) => ({ productId: l.productId, quantity: l.quantity }))
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (json.ok) {
        clearCart();
        setLines([]);
        setStatus(`Order placed: ${json.orderNumber}`);
        event.currentTarget.reset();
        return;
      }
      setStatus(json.error || "Order failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container" style={{ padding: "30px 16px 50px" }}>
      <h1>Checkout</h1>
      <div className="grid" style={{ alignItems: "start" }}>
        <section className="card pad stack">
          <h2 style={{ margin: 0 }}>Customer Details</h2>
          <form className="stack" onSubmit={onSubmit}>
            <input className="input" name="customerName" placeholder="Full name" required />
            <input className="input" name="email" type="email" placeholder="Email" required />
            <input className="input" name="phone" placeholder="Phone" required />
            <textarea className="textarea" name="address" placeholder="Shipping address" required rows={4} />
            <textarea className="textarea" name="notes" placeholder="Notes (optional)" rows={3} />
            <button disabled={loading} className="btn" type="submit">
              {loading ? "Placing..." : "Place COD Order"}
            </button>
            <small className="muted">{status}</small>
          </form>
        </section>

        <section className="card pad stack">
          <h2 style={{ margin: 0 }}>Order Summary</h2>
          {lines.map((line) => (
            <div key={line.productId} style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <span>{line.title} x {line.quantity}</span>
              <span>Rs. {(line.unitPrice * line.quantity).toLocaleString()}</span>
            </div>
          ))}
          <hr style={{ border: 0, borderTop: "1px solid var(--border)" }} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Subtotal</span>
            <strong>Rs. {subtotal.toLocaleString()}</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Shipping</span>
            <strong>Rs. {shipping.toLocaleString()}</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Total</span>
            <strong>Rs. {total.toLocaleString()}</strong>
          </div>
        </section>
      </div>
    </main>
  );
}
