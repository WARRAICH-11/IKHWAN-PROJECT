"use server";

import { z } from "zod";
import { getProductById } from "@/lib/products";
import { CheckoutInput, OrderRecord } from "@/lib/order-types";
import { saveOrder } from "@/lib/order-store";

const schema = z.object({
  customerName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  address: z.string().min(10),
  notes: z.string().optional(),
  items: z.array(
    z.object({
      productId: z.string().min(1),
      quantity: z.number().int().min(1).max(20)
    })
  ).min(1)
});

function generateOrderNumber() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const rnd = Math.floor(Math.random() * 9000 + 1000);
  return `IKH-${date}-${rnd}`;
}

export async function placeOrder(raw: CheckoutInput) {
  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: "Invalid checkout data." };
  }

  const shipping = 150;
  const items = parsed.data.items.map((item) => {
    const product = getProductById(item.productId);
    if (!product) {
      throw new Error(`Product missing: ${item.productId}`);
    }
    const lineTotal = product.price * item.quantity;
    return {
      productId: product.id,
      title: product.title,
      quantity: item.quantity,
      unitPrice: product.price,
      lineTotal
    };
  });

  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const order: OrderRecord = {
    id: crypto.randomUUID(),
    orderNumber: generateOrderNumber(),
    customerName: parsed.data.customerName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    address: parsed.data.address,
    notes: parsed.data.notes ?? null,
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
    createdAt: new Date().toISOString()
  };

  await saveOrder(order);
  return { ok: true, orderNumber: order.orderNumber };
}
