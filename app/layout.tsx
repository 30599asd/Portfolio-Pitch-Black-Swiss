import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { LenisProvider } from "@/components/lenis-provider";

// Harmond - Display font (fallback: Playfair Display)
const harmond = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-harmond",
  display: "swap",
  preload: true,
});

// Nohemi - Body font (fallback: Inter)
const nohemi = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nohemi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "创意开发者 | 暗黑风个人作品集", // 原为 Creative Developer | Digital Noir Portfolio
  description:
    "屡获殊荣的创意开发者，专注于互动数字体验、高端 UI 界面与 3D 网页开发。",
  keywords: [
    "创意开发者",
    "前端开发",
    "UI/UX 设计",
    "Three.js",
    "React",
    "Next.js",
    "个人作品集",
  ],
  authors: [{ name: "张三" }], // 建议改成客户的名字
  openGraph: {
    title: "创意开发者 | 暗黑风个人作品集",
    description:
      "屡获殊荣的创意开发者，专注于互动数字体验。",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN" // 修改了语言属性
      className={`${harmond.variable} ${nohemi.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white font-nohemi antialiased overflow-x-hidden">
        <LenisProvider>
          {/* Noise overlay - Film grain effect */}
          <NoiseOverlay />
          
          {/* Custom cursor - Desktop only */}
          <CustomCursor />
          
          {/* Main content */}
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
