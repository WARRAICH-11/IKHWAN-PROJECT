export type CartItemInput = {
  productId: string;
  quantity: number;
};

export type CheckoutInput = {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  notes?: string;
  items: CartItemInput[];
};

export type OrderRecord = {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  notes: string | null;
  items: Array<{
    productId: string;
    title: string;
    unitPrice: number;
    quantity: number;
    lineTotal: number;
  }>;
  subtotal: number;
  shipping: number;
  total: number;
  createdAt: string;
};
