import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { MotionInit } from "@/components/motion-init";

export const metadata: Metadata = {
  title: "Ikhwan Unstitched",
  description: "Timeless Elegance, Unstitched."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionInit />
        <SiteNav />
        {children}
        <footer className="raw-footer">
          <p className="raw-footer-year">2024</p>
          <div className="raw-footer-grid">
            <div className="raw-form-stack">
              <strong>Customer Care</strong>
              <Link href="/orders">Order Status</Link>
              <Link href="/shipping">Shipping & Delivery</Link>
              <Link href="/size-charts">Size Charts</Link>
            </div>
            <div className="raw-form-stack">
              <strong>Featured Categories</strong>
              <Link href="/seasonal?season=winter">Top Winter Wear</Link>
              <Link href="/suite-variations?suite=3-piece&fabric=chiffon">3-Piece Chiffon Ensembles</Link>
            </div>
            <div className="raw-form-stack">
              <strong>Brand</strong>
              <Link href="/elite-circle">Ikhwan Elite Circle</Link>
              <Link href="/atelier">Bridal Gallery</Link>
            </div>
            <div className="raw-form-stack">
              <strong>Collections</strong>
              <Link href="/seasonal?season=summer">Summer Lawn &apos;26</Link>
              <Link href="/atelier">Noor Reserve</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
