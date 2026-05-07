export type CartState = Record<string, number>;

const CART_KEY = "ikhwan_cart_v1";

export function readCart(): CartState {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) ?? "{}") as CartState;
  } catch {
    return {};
  }
}

export function writeCart(cart: CartState) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-change"));
}

export function addToCart(productId: string) {
  const cart = readCart();
  cart[productId] = (cart[productId] ?? 0) + 1;
  writeCart(cart);
}

export function clearCart() {
  writeCart({});
}
