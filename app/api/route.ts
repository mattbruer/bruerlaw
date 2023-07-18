import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  //this is the data from the contact form.  what do i do with it?
  const body = await req.json();

  return NextResponse.json(body);
}
