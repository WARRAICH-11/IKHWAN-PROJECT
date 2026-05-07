export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  description: string;
  season: "summer" | "winter";
  fabric: "lawn" | "cotton" | "silk" | "chiffon";
  suite: "2-piece" | "3-piece";
  atelier: boolean;
  featured: boolean;
  active: boolean;
};

export const products: Product[] = [
  {
    id: "ikh-premium-01",
    slug: "summer-lawn-ivory-bloom",
    title: "Summer Lawn Ivory Bloom",
    price: 4990,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    description: "Airy lawn weave with soft hand-feel for warm season daywear.",
    season: "summer",
    fabric: "lawn",
    suite: "3-piece",
    atelier: false,
    featured: true,
    active: true
  },
  {
    id: "ikh-premium-02",
    slug: "winter-cotton-regal-moss",
    title: "Winter Cotton Regal Moss",
    price: 5690,
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=80",
    description: "Structured cotton finish with balanced drape for cooler months.",
    season: "winter",
    fabric: "cotton",
    suite: "2-piece",
    atelier: false,
    featured: true,
    active: true
  },
  {
    id: "ikh-premium-03",
    slug: "atelier-silk-noor-reserve",
    title: "Atelier Silk Noor Reserve",
    price: 6290,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80",
    description: "Lustrous silk composition with artisanal detailing for formal edits.",
    season: "winter",
    fabric: "silk",
    suite: "3-piece",
    atelier: true,
    featured: true,
    active: true
  },
  {
    id: "ikh-premium-04",
    slug: "chiffon-rose-veil",
    title: "Chiffon Rose Veil",
    price: 5890,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
    description: "Featherlight chiffon layers with elegant fluidity for evening occasions.",
    season: "summer",
    fabric: "chiffon",
    suite: "3-piece",
    atelier: false,
    featured: true,
    active: true
  },
  {
    id: "ikh-premium-05",
    slug: "cotton-heritage-dune",
    title: "Cotton Heritage Dune",
    price: 5390,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=80",
    description: "Crafted cotton in a matte finish designed for daily timeless dressing.",
    season: "summer",
    fabric: "cotton",
    suite: "2-piece",
    atelier: false,
    featured: false,
    active: true
  },
  {
    id: "ikh-premium-06",
    slug: "bridal-silk-zareen",
    title: "Bridal Silk Zareen",
    price: 9490,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    description: "Atelier bridal silk with intricate surface artistry and rich texture.",
    season: "winter",
    fabric: "silk",
    suite: "3-piece",
    atelier: true,
    featured: true,
    active: true
  }
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id && p.active);
}

export function getActiveProducts() {
  return products.filter((p) => p.active);
}
