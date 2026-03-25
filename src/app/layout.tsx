import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Saket Dixit | Software Developer",
  description: "Portfolio of Saket Dixit — Software Developer, Full Stack Developer & ML enthusiast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
