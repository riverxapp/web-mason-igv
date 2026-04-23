import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agency Project Manager",
  description:
    "An agency project management app for tracking clients, projects, tasks, and delivery progress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
              <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Agency OS
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Project management workspace
                  </p>
                </div>
                <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                  <a href="/" className="transition-colors hover:text-foreground">
                    Dashboard
                  </a>
                  <a href="#projects" className="transition-colors hover:text-foreground">
                    Projects
                  </a>
                  <a href="#clients" className="transition-colors hover:text-foreground">
                    Clients
                  </a>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}