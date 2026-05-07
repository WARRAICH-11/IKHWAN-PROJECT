import Link from "next/link";

export default function EliteCirclePage() {
  return (
    <main className="container page">
      <h1>Ikhwan Elite Circle</h1>
      <p className="muted">Private access to Bridal Vault previews and seasonal lawn pre-orders.</p>
      <section className="card pad stack">
        <strong>Membership Benefits</strong>
        <span>Early access to The Atelier Bridal Gallery.</span>
        <span>Priority booking for Summer Lawn pre-orders.</span>
        <span>First look at Artisanal Drop Calendar releases.</span>
        <Link href="/atelier" className="btn">Enter Bridal Vault</Link>
      </section>
    </main>
  );
}
