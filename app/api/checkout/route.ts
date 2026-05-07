import { NextResponse } from "next/server";
import { placeOrder } from "@/app/actions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await placeOrder(body);
    if (!result.ok) {
      return NextResponse.json(result, { status: 400 });
    }
    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
