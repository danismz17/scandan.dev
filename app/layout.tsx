import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "SCANDAN.DEV",
  description: "Portfolio estilo hacker retro-futurista",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="text-[#FC6351] h-screen overflow-hidden">
        <div className="grid grid-cols-[16rem_1fr] grid-rows-[6rem_1fr] h-full">
          {/* Sidebar (ocupa 2 filas) */}
          <div className="row-span-2">
            <Sidebar />
          </div>

          {/* Header */}
          <div>
            <Header />
          </div>

          {/* Main content */}
          <main className="w-full h-full overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
