import { type NextRequest, NextResponse } from "next/server";
import { pinata } from "@/lib/pinata"

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const url = await pinata.gateways.createSignedURL({
        cid: data.cid,
        expires: 30
    })
    return NextResponse.json(url, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ text: "Error creating API Key:" }, { status: 500 });
  }
}
