
import { supabaseServer } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("API 오류:", msg);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}