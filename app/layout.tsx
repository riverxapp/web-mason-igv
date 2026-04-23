import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Startup Project Management",
    template: "%s | Startup Project Management",
  },
  description:
    "A startup-focused project management workspace for organizing projects, tracking owners and deadlines, and keeping delivery aligned from planning through launch.",
  applicationName: "Startup Project Management",
  metadataBase: new URL("https://example.com"),
};

const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/dashboard/projects", label: "Projects" },
];

const productNavigation = [
  { href: "/dashboard/projects", label: "Project workspace" },
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
              <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-8">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Startup OS
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Project management tool
                  </p>
                </div>
                <nav
                  aria-label="Primary"
                  className="flex items-center gap-6 text-sm font-medium text-muted-foreground"
                >
                  {primaryNavigation.map((item) => (
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

            <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 md:px-8">
              <div className="flex flex-1 flex-col gap-6 py-6">
                <aside
                  aria-label="Product navigation"
                  className="rounded-lg border border-border bg-card px-4 py-3 shadow-sm"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Product shell
                      </p>
                      <p className="mt-1 text-sm text-foreground">
                        Shared workspace entry points for startup planning and delivery.
                      </p>
                    </div>

                    <nav
                      aria-label="Workspace"
                      className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground"
                    >
                      {productNavigation.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-md border border-border px-3 py-1.5 transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </aside>

                <main className="flex-1">{children}</main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}