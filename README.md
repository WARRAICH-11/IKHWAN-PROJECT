# Ikhwan Unstitched (Luxury Storefront + Firebase Orders)

Products are hardcoded in `lib/products.ts`.  
Customers can browse, add to cart, and place COD orders.

Order storage behavior:
- If Firebase Admin credentials are set: save to Firestore collection `orders`.
- If credentials are missing or Firestore write fails: fallback to local file `data/orders.json`.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configure Firebase (optional but recommended)

1. Create `.env.local` from `.env.example`.
2. Set:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`
4. Firestore collection used by app: `orders`.

## Product Management

Edit `lib/products.ts`:
- Add/remove products
- Set price/title/image
- Toggle `active`

No product database is needed.

## Routes Implemented

- `/` Home with Heritage Reimagined, Artisanal Drop Calendar, and feature modules
- `/seasonal` Seasonal Essentials
- `/fabrics` Fabric Specialists
- `/atelier` Bridal Gallery
- `/suite-variations` 2-piece / 3-piece taxonomy
- `/stitch-finder` occasion-based selector
- `/elite-circle` membership page
- `/checkout` checkout flow
- `/orders` order records (manual follow-up view)
