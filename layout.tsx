We need to output final file content for layout.tsx. The user says "Compile only for target file: layout.tsx" and "Return ONLY the final file content text." So we need to provide the updated layout.tsx content. The request is part of a larger plan to update the landing page marketing focus. The layout.tsx likely needs to be updated to include any necessary imports or structure for the new landing page? Possibly they want to add a footer, or adjust the header. The existing layout.tsx includes header with navigation and a product shell aside. For a marketing landing page, perhaps we want a simpler header without the product shell aside on the landing page? Or we might want to adjust it to be more marketing-friendly. But the plan step says "update layout.tsx using unified diff." Without seeing the request details for that step, we need to infer based on the overall goal: redesign landing page to be marketing-focused, conversion-oriented, with testimonials, use cases, contact form, trust building. The layout.tsx might need to accommodate a footer with links, or maybe add a top banner, or adjust the navigation. However, the landing page already resides in page.tsx, and the layout wraps all pages. The current layout has a header with "Startup OS" branding and nav links "Home" and "Projects". It also has a product shell aside (Product shell: shared workspace entry points). That aside might be too product-centric for a marketing landing page, but it appears on all pages. Maybe they want to conditionally show it only on non-landing pages? The task says "update layout.tsx" but doesn't specify what to change. Since we are recompiling for that file, we need to output a version that supports the new landing page design. Given the policy of preserving unrelated behavior, we might just add a footer component, or perhaps remove the product shell aside? But we have to consider that the aside is inside the main layout, and the landing page is rendered as children. Removing it entirely might break the dashboard pages that still will be rendered. But the plan might have intended to update layout.tsx to add a footer for marketing purposes. Looking at the user's plan steps: "Task 4: update layout.tsx using unified diff." That's vague. However, the overall request is to redesign the landing page. The layout.tsx is likely to be updated to include a global announcement bar, or to include a custom footer for the marketing site, or to remove the product shell aside when on the homepage (maybe via a conditional). But since the instruction says "preserve unrelated logic", we must keep existing navigation and structure intact, only add what's necessary for the marketing landing page. Possibly the landing page requires a distinct header/footer not shared with the dashboard. But the current layout is global. One approach: we can add a check for the route, e.g., if it's the homepage, show a marketing header and footer; otherwise show the current layout. But that would be a bigger change. Alternatively, the plan might have just wanted to ensure that the layout.tsx imports any new components or styles needed. But the landing page is self-contained; it doesn't require layout changes.

Maybe the intended change is to add a footer that includes links to privacy, terms, contact, etc., which is common for marketing pages. The current layout has no footer. So adding a proper footer would be a reasonable update for a marketing-focused site. The plan step 5 was to update globals.css, maybe for design tokens. So layout.tsx likely gets a footer.

Thus, we will add a footer component to the layout, preserving the existing header and shell. The footer will be a simple marketing footer with company info and links. We'll wrap it in a <footer> element. We need to ensure it remains accessible and responsive.

We'll output the final layout.tsx with the added footer.

But the instruction says "Return ONLY the final file content text." so we'll give the entire updated file.

We also need to make sure we don't break anything. The footer should be after the main content. The layout currently has: html -> body -> ThemeProvider -> div.min-h-screen... -> header ... -> div.mx-auto... main... So we'll add footer after the main div.

We'll also consider adding an id="footer" or just a class.

We'll produce the final code.
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

const footerNavigation = [
  { href: "/", label: "Home" },
  { href: "/dashboard/projects", label: "Projects" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#contact", label: "Contact" },
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

            <footer className="border-t border-border bg-background py-12">
              <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row md:px-8">
                <div className="space-y-2 text-center sm:text-left">
                  <p className="text-sm font-semibold text-foreground">Startup OS</p>
                  <p className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Startup OS. All rights reserved.
                  </p>
                </div>
                <nav
                  aria-label="Footer"
                  className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
                >
                  {footerNavigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}