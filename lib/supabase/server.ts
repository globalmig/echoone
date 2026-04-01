import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

// npm install @supabase/supabase-js

export const supabaseServer = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);


// // 관리자용 (SERVICE_ROLE_KEY) 기반으로 Supabase 클라이언트 생성
// export async function createAdminClient () {
//     return createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!,
//   )
// }

// // 유저 로그인/회원가입 API 호출 시, 사용자 쿠키(session) 기반으로 Supabase 클라이언트 생성
// export async function createUserClient() {
//   const cookieStore = await cookies()

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // Anon Key 사용
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll()
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) =>
//               cookieStore.set(name, value, options)
//             )
//           } catch {
//             // 서버 컴포넌트 환경 대응
//           }
//         },
//       },
//     }
//   )
// }
