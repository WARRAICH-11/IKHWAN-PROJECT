"use client";

import Link from "next/link";
import { useState } from "react";
import { CartCount } from "@/components/cart-count";

const navLinks = [
  { href: "/seasonal", label: "Seasonal Essentials" },
  { href: "/fabrics", label: "Fabric Specialists" },
  { href: "/atelier", label: "The Atelier" },
  { href: "/suite-variations", label: "Suite Variations" },
  { href: "/stitch-finder", label: "Stitch-Finder" },
  { href: "/elite-circle", label: "Elite Circle" },
  { href: "/checkout", label: "Checkout" },
  { href: "/orders", label: "Orders" }
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="raw-nav-wrap" data-reveal>
      <div className="raw-nav">
        <Link href="/" className="raw-logo" aria-label="Ikhwan Unstitched home">
          Ikhwan Unstitched
        </Link>
        <nav className="raw-nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <CartCount />
        </nav>
        <button
          type="button"
          className="raw-menu-button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="raw-mobile-overlay" role="dialog" aria-modal="true">
          <button
            type="button"
            className="raw-menu-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <div className="raw-mobile-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/checkout" onClick={() => setOpen(false)}>
              Cart
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

