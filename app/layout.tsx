import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "에코원 | 칠보세라믹",
  description: "단순한 활력을 넘어 몸속 깊은 곳의 균형까지",
  keywords: [
  "칠보세라믹",
  "에코원",
  "온열매트",
  "온열침대",
  "복부통증",
  "전신온열",
  "온열",
  "온돌방",
  "온돌",
],
  openGraph: {
    title: "에코원 | 칠보세라믹",
    description: "단순한 활력을 넘어 몸속 깊은 곳의 균형까지",
    url: "https://...",
    siteName: "에코원",
    images: [
      {
        url: "https://.../images/og_image.png",
        width: 1200,
        height: 630,
        alt: "에코원",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    other: {
      "naver-site-verification": "",
    }
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
