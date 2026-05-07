import { listOrders } from "@/lib/order-store";

export default async function OrdersPage() {
  const orders = await listOrders();
  return (
    <main className="container" style={{ padding: "30px 16px 50px" }}>
      <h1>Orders</h1>
      <p className="muted">Use this to manually send confirmation emails or review purchases.</p>
      <section className="stack">
        {orders.length === 0 ? <p>No orders yet.</p> : null}
        {orders.map((order) => (
          <article key={order.id} className="card pad stack">
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
    </main>
  );
}
