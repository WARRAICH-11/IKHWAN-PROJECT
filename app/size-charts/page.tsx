import { CategoryDivider } from "@/components/category-divider";

export default function SizeChartsPage() {
  return (
    <main className="raw-main">
      <CategoryDivider title="Size Charts" />
      <section className="raw-shell">
        <div className="raw-content raw-cardless raw-form-stack" data-reveal>
          <h1>Size Charts</h1>
          <span>2-piece standard yardage: 4.25m to 4.75m.</span>
          <span>3-piece standard yardage: 6.75m to 7.25m including dupatta.</span>
          <span>Expected shrinkage: Lawn 2-3%, Cotton 3-4%, Silk 1-2%, Chiffon 1-2%.</span>
          <span>Always pre-soak before tailoring for precise fit outcomes.</span>
        </div>
      </section>
    </main>
  );
}
