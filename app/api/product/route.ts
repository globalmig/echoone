import { supabaseServer } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabaseServer
    .from("products")
    .select("*");

  if (error) {
    console.error("Supabase 에러:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json([]);
  }

  return NextResponse.json(data);
}