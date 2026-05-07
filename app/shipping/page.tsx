import { CategoryDivider } from "@/components/category-divider";

export default function ShippingPage() {
  return (
    <main className="raw-main">
      <CategoryDivider title="Shipping Delivery" />
      <section className="raw-shell">
        <div className="raw-content raw-cardless raw-form-stack" data-reveal>
          <h1>Shipping & Delivery</h1>
          <span>Orders are dispatched within 2-4 working days.</span>
          <span>Delivery windows may vary during artisanal drop periods.</span>
          <span>COD confirmation calls are made before dispatch.</span>
        </div>
      </section>
    </main>
  );
}
