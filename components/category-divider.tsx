export function CategoryDivider({ title }: { title: string }) {
  return (
    <section className="raw-divider-wrap" data-reveal>
      <div className="raw-divider-blob" />
      <h2 className="raw-divider">{title}</h2>
    </section>
  );
}

