import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Agency Project Manager",
    template: "%s | Agency Project Manager",
  },
  description:
    "A project management workspace for tracking clients, projects, tasks, and delivery progress.",
  applicationName: "Agency Project Manager",
  metadataBase: new URL("https://example.com"),
};

const navigation = [
  { href: "/", label: "Dashboard" },
  { href: "/dashboard/projects", label: "Projects" },
  { href: "/dashboard/clients", label: "Clients" },
];

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
                <nav
                  aria-label="Primary"
                  className="flex items-center gap-6 text-sm font-medium text-muted-foreground"
                >
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
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