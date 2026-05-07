# Ikhwan Unstitched

Luxury storefront built with Next.js App Router.  
Products are code-managed, checkout is COD, and orders are stored in Firebase Firestore.

## Stack

- Next.js 16 (App Router)
- React 18
- Firebase Admin SDK (server-side order persistence)

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Required Environment Variables

Create `.env.local`:

```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## Deploy to Vercel (Full Functionality)

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. In Vercel Project Settings -> Environment Variables, add:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`
4. Deploy.

This project is configured for server deployment.  
`/api/checkout` works on Vercel and writes orders to Firestore.

## Notes

- Do not use GitHub Pages for this project if you need checkout/order APIs.
- If a Firebase write fails, local fallback may be used depending on runtime permissions.
