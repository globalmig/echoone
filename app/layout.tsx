import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
    url: "https://www.echoone.co.kr",
    siteName: "에코원",
    images: [
      {
        url: "https://www.echoone.co.kr/images/og_image.png",
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
      "naver-site-verification": "", //3a17332ea1896a52b33e1e507622a86310ec67d8
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
    <html lang="ko" className={cn("font-sans", geist.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
