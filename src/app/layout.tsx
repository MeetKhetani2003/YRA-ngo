import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yra.example"),
  title: { default: "Yuva Rojgar Abhiyan | Empowering Youth, Building Future", template: "%s | Yuva Rojgar Abhiyan" },
  description: "A modern digital registration platform for youth exploring employment, self-employment, skills and related support pathways.",
  applicationName: "Yuva Rojgar Abhiyan",
  openGraph: { title: "Yuva Rojgar Abhiyan", description: "Empowering Youth, Building Future", type: "website", images: [{url:"/images/hero/yra-youth.jpg",width:1536,height:1024,alt:"Young Indian students and professionals"}] },
};
export const viewport: Viewport = { width:"device-width", initialScale:1, themeColor:"#0f7b40" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
