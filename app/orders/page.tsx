import { listOrders } from "@/lib/order-store";
import { CategoryDivider } from "@/components/category-divider";

export default async function OrdersPage() {
  const orders = await listOrders();
  return (
    <main className="raw-main">
      <CategoryDivider title="Order Records" />
      <section className="raw-shell">
        <div className="raw-content raw-intro" data-reveal>
          <h1>Orders</h1>
          <p className="raw-muted">Use this to manually send confirmation emails or review purchases.</p>
        </div>
        <section className="raw-content raw-form-stack">
          {orders.length === 0 ? <p>No orders yet.</p> : null}
        {orders.map((order) => (
            <article key={order.id} className="raw-cardless raw-form-stack" data-reveal>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <strong>{order.orderNumber}</strong>
              <span>{new Date(order.createdAt).toLocaleString()}</span>
            </div>
            <span>{order.customerName} | {order.phone} | {order.email}</span>
            <span>{order.address}</span>
            {order.items.map((item) => (
              <span key={`${order.id}-${item.productId}`}>
                {item.title} x {item.quantity} = Rs. {item.lineTotal.toLocaleString()}
              </span>
            ))}
            <strong>Total: Rs. {order.total.toLocaleString()}</strong>
            </article>
        ))}
        </section>
      </section>
    </main>
  );
}
