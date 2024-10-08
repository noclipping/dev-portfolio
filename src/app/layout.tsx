import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ParticlesBackground from './components/ParticlesBackground';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className="relative bg-black min-h-screen">
        <ParticlesBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none">
        <div className="bg-black bg-opacity-60 border border-red-500 p-8 rounded-lg max-w-xl w-full text-center overflow-hidden pointer-events-auto animate-expand-horizontal">
          {children}
        </div>
</div>

      </body>
    </html>
  );
}
