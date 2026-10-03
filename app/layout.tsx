import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider }  from "@/components/theme-provider";
import { AuthProvider }   from "@/components/auth-provider";
import { DocsShell }      from "@/components/docs-shell";
import { Footer }         from "@/components/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keploy + Go | From API Traffic to Automated Tests",
  description: "A beginner-friendly tutorial for recording and replaying Go API tests with Keploy and MySQL.",
  openGraph: {
    title: "Keploy + Go: From API Traffic to Automated Tests",
    description: "Record real API traffic and replay it as automated tests — zero manual test code.",
    type: "article",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <AuthProvider>
            <DocsShell>{children}</DocsShell>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}