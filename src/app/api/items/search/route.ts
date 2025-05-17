import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") ?? "";
  const limit = searchParams.get("limit") ?? 5;

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("items")
    .select("*")
    .textSearch("content", query)
    .limit(Number(limit));

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
