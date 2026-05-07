import { promises as fs } from "fs";
import path from "path";
import { OrderRecord } from "@/lib/order-types";
import { getFirebaseDb } from "@/lib/firebase-admin";

const FALLBACK_FILE = path.join(process.cwd(), "data", "orders.json");

async function ensureDataDir() {
  const dir = path.dirname(FALLBACK_FILE);
  await fs.mkdir(dir, { recursive: true });
}

async function readLocalOrders(): Promise<OrderRecord[]> {
  try {
    const raw = await fs.readFile(FALLBACK_FILE, "utf8");
    return JSON.parse(raw) as OrderRecord[];
  } catch {
    return [];
  }
}

async function writeLocalOrders(orders: OrderRecord[]) {
  await ensureDataDir();
  await fs.writeFile(FALLBACK_FILE, JSON.stringify(orders, null, 2), "utf8");
}

export async function saveOrder(order: OrderRecord) {
  const db = getFirebaseDb();
  if (db) {
    try {
      await db.collection("orders").doc(order.id).set(order);
      return;
    } catch {
      // Fallback below.
    }
  }

  const all = await readLocalOrders();
  all.unshift(order);
  await writeLocalOrders(all);
}

export async function listOrders(): Promise<OrderRecord[]> {
  const db = getFirebaseDb();
  if (db) {
    try {
      const snapshot = await db
        .collection("orders")
        .orderBy("createdAt", "desc")
        .limit(200)
        .get();
      return snapshot.docs.map((doc) => doc.data() as OrderRecord);
    } catch {
      // Fallback below.
    }
  }
  return readLocalOrders();
}
