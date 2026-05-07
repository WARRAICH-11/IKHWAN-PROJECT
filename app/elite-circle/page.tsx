import Link from "next/link";
import { CategoryDivider } from "@/components/category-divider";

export default function EliteCirclePage() {
  return (
    <main className="raw-main">
      <CategoryDivider title="Elite Circle" />
      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h1>Ikhwan Elite Circle</h1>
          <p className="raw-muted">Private access to Bridal Vault previews and seasonal lawn pre-orders.</p>
        </div>
        <section className="raw-content raw-cardless raw-form-stack" data-reveal>
        <strong>Membership Benefits</strong>
        <span>Early access to The Atelier Bridal Gallery.</span>
        <span>Priority booking for Summer Lawn pre-orders.</span>
        <span>First look at Artisanal Drop Calendar releases.</span>
          <Link href="/atelier" className="raw-cta"><span>Enter Bridal Vault</span></Link>
        </section>
      </section>
    </main>
  );
}
