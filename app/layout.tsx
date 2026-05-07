import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { CartCount } from "@/components/cart-count";

export const metadata: Metadata = {
  title: "Ikhwan Unstitched",
  description: "Timeless Elegance, Unstitched."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav">
            <Link href="/" className="brand">
              Ikhwan Unstitched
            </Link>
            <nav>
              <Link href="/seasonal">Seasonal Essentials</Link>
              <Link href="/fabrics">Fabric Specialists</Link>
              <Link href="/atelier">The Atelier</Link>
              <Link href="/suite-variations">Suite Variations</Link>
              <Link href="/stitch-finder">Stitch-Finder</Link>
              <Link href="/elite-circle">Elite Circle</Link>
              <Link href="/checkout">Checkout</Link>
              <Link href="/orders">Orders</Link>
              <CartCount />
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="stack">
              <strong>Customer Care</strong>
              <Link href="/orders">Order Status</Link>
              <Link href="/shipping">Shipping & Delivery</Link>
              <Link href="/size-charts">Size Charts</Link>
            </div>
            <div className="stack">
              <strong>Featured Categories</strong>
              <Link href="/seasonal?season=winter">Top Winter Wear</Link>
              <Link href="/suite-variations?suite=3-piece&fabric=chiffon">3-Piece Chiffon Ensembles</Link>
            </div>
            <div className="stack">
              <strong>Brand</strong>
              <Link href="/elite-circle">Ikhwan Elite Circle</Link>
              <Link href="/atelier">Bridal Gallery</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
