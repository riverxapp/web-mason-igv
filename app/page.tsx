The user wants to redesign the landing page `app/page.tsx` to be marketing-focused, emphasizing conversion, testimonials, use cases, contact form, trust building, etc.
I need to update `app/page.tsx` with a marketing-focused layout.
The current `app/page.tsx` already has a marketing-focused layout with Hero, Features, Testimonials, and CTA sections.
Wait, the user request says: "Redesign the landing page to be a marketing focused page, focused on conversion, testimonials, use cases, contact form, trust building ,etc"
The current file already has most of this, but I need to add a contact form, enhance use cases, and improve conversion focus.
I should also ensure the code compiles and matches the existing UI conventions (shadcn/ui, Tailwind, `app-heading`, `app-subheading`, etc.).

Let's construct the new `app/page.tsx`.
It should include:
- Hero section (strong conversion focus, clear CTA)
- Trusted by / Logos section (trust building)
- Use cases section (new)
- Features section
- Testimonials section
- Contact form section (new)
- Final CTA section

I will use the existing components: `Card`, `CardHeader`, `CardTitle`, `CardContent`, `CardDescription`, `Button`, `Separator`, `Badge`, and icons from `lucide-react`.
I'll add a contact form with standard inputs, using the `app-input` and `app-button-primary` classes from `globals.css`, or Tailwind directly.

Let's design the structure:
1. Hero: "Ship Faster With Less Stress" -> CTA buttons, trust indicators, stats.
2. Trusted by logos strip.
3. Use Cases: For Founders, For Product Teams, For Operations.
4. Features: (Keep existing)
5. Testimonials: (Keep existing)
6. Contact Form: Simple form with Name, Email, Company, Message, Submit button.
7. Final CTA.

I will make sure to keep imports intact and match the existing styling conventions.
Since the previous attempt failed with `DIFF_NOT_APPLICABLE`, I will output the full file content correctly.

Let's draft the `app/page.tsx`:

```tsx
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  BarChart,
  UserCheck,
  Star,
  Users,
  ShieldCheck,
  ThumbsUp,
  Rocket,
  Target,
  LayoutDashboard,
  MessageSquare,
  Mail,
  Building2,
  User,
} from "lucide-react";

// Hero and feature demo data:
const stats = [
  { label: "Active projects", value: "24" },
  { label: "Tasks completed this week", value: "1,284" },
  { label: "On-time delivery", value: "96%" },
];

const useCases = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "For Founders",
    description: "Get a bird's-eye view of every initiative, track investor milestones, and keep the team aligned without micromanagement.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "For Product Teams",
    description: "Ship features faster with clear roadmaps, automated progress tracking, and seamless stakeholder updates.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "For Operations",
    description: "Centralize workflows, standardize reporting, and eliminate the chaos of scattered spreadsheets and email threads.",
  },
];

const features = [
  {
    icon: <CheckCircle className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Clarity at a glance",
    description: "Instantly see priorities, deadlines, and task status for every initiative.",
  },
  {
    icon: <BarChart className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Performance insights",
    description: "Measure progress, highlight wins, and eliminate delivery slowdowns.",
  },
  {
    icon: <UserCheck className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Accountability built-in",
    description: "Assign clear project owners so everyone knows who's driving what.",
  },
];

const testimonials = [
  {
    quote: "Startup OS transformed the way our team collaborates — no more missed deadlines or buried updates.",
    name: "Priya Sundaram",
    title: "Founder, Horizon Studio",
  },
  {
    quote: "The dashboard makes keeping our operations aligned effortless. We ship faster and with confidence.",
    name: "Daniel Kim",
    title: "COO, Apollo Labs",
  },
  {
    quote: "We cut our weekly sync time by 40% because the dashboard tells us exactly what we need to know.",
    name: "Elena Rodriguez",
    title: "VP of Engineering, NovaTech",
  },
];

const trustedLogos = ["Acme Corp", "Northstar", "Horizon Studio", "Apollo Labs", "NovaTech", "Vertex AI"];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-background/95 via-background/90 to-background/80 border-b border-border overflow-hidden">
        <div className="mx-auto grid min-h-[85vh] w-full max-w-6xl items-center gap-12 px-6 py-24 md:px-8 lg:grid-cols-2">
          {/* Hero left */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="w-fit text-xs px-3 py-1 tracking-widest uppercase bg-primary/10 text-primary mb-1">
                Startup OS v2.0
              </Badge>
              <h1 className="app-heading max-w-2xl text-balance">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Ship Faster
                </span>
                <br className="hidden sm:block" />
                With Less Stress
              </h1>
              <p className="app-subheading max-w-lg text-lg">
                The startup execution platform that helps growing teams deliver projects on time, every time. Get crystal-clear visibility into what's shipping next.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-1.5">
              <Button asChild size="lg" className="app-button-primary h-12 px-8 text-base shadow-lg hover:shadow-primary/20">
                <Link href="/dashboard/projects">Get Started - Free Forever</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="app-button-secondary h-12 px-8 text-base border">
                <a href="#demo" className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" aria-hidden="true" />
                <span>Secure & compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" aria-hidden="true" />
                <span>Trusted by 500+ teams</span>
              </div>
            </div>

            {/* Quick key stats */}
            <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3 w-full" aria-label="Product statistics">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="app-dashboard-kpi flex flex-col items-center justify-center text-center py-6 px-4 bg-background/90 border-border/75 hover:shadow-md transition-shadow"
                  tabIndex={0}
                  aria-label={stat.label}
                >
                  <CardTitle className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-[0.95rem] text-muted-foreground font-medium">
                    {stat.label}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero right: visual shell preview */}
          <aside className="flex flex-col justify-center gap-7" aria-label="App overview" id="demo">
            <Card className="rounded-2xl bg-card/95 border border-border/80 shadow-xl min-h-[28rem] flex flex-col justify-between overflow-hidden">
              <CardHeader className="pb-0">
                <Badge variant="secondary" className="uppercase tracking-widest text-xs font-bold mb-2 w-fit">
                  Live Preview
                </Badge>
                <CardTitle as="h2" className="text-xl mt-2">
                  Your Projects At a Glance
                </CardTitle>
                <CardDescription as="p" className="mt-2 text-base text-muted-foreground">
                  See what your team will experience with Startup OS
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-secondary/40">
                    <Users className="w-5 h-5 text-primary mr-1" aria-hidden="true" />
                    <span className="font-medium text-foreground">Project: Website Relaunch</span>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                    <ShieldCheck className="w-5 h-5 text-green-500 mr-1" aria-hidden="true" />
                    <span className="font-medium text-green-600 dark:text-green-400">Status: Active</span>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <ThumbsUp className="w-5 h-5 text-blue-500 mr-1" aria-hidden="true" />
                    <span className="font-medium text-blue-700 dark:text-blue-400">On-time delivery</span>
                  </div>
                </div>
                <Separator className="my-2" />
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 items-start sm:items-center text-sm">
                  <span className="text-muted-foreground">
                    Try the full dashboard for live project tracking!
                  </span>
                  <Button asChild size="sm" className="mt-1 sm:mt-0 px-5 h-9">
                    <Link href="/dashboard/projects">Explore projects</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* TRUSTED BY STRIP */}
      <section className="py-10 bg-muted/30 border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6 tracking-wide uppercase">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {trustedLogos.map((logo) => (
              <span key={logo} className="text-lg font-bold text-foreground">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section id="use-cases" className="py-20 bg-background">
        <div className="app-section max-w-6xl">
          <header className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Badge variant="secondary" className="text-xs px-3 py-1 tracking-widest uppercase">
              Tailored workflows
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">Built for the people who build</h2>
            <p className="app-subheading mx-auto">
              Whether you're raising capital, shipping code, or scaling operations, Startup OS adapts to how your team actually works.
            </p>
          </header>
          <section className="grid gap-8 md:grid-cols-3" aria-label="Use cases">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="app-card border-border bg-background/80 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
                <CardHeader className="pb-3">
                  <div className="mb-2">{useCase.icon}</div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-card/50 border-b border-border py-20">
        <div className="app-section max-w-7xl">
          <header className="max-w-2xl mb-10 space-y-2">
            <Badge variant="outline" className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/40 text-muted-foreground mb-1 w-fit">
              Product value
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Stop managing projects in spreadsheets
            </h2>
            <p className="app-subheading">
              Upgrade to a workspace that is purpose-built for startup execution — with every delivery detail always visible and actionable.
            </p>
          </header>
          <section className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3" aria-label="Key product features">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="app-card hover:shadow-lg transition-shadow border-border bg-background/80 p-7 py-10"
                tabIndex={0}
                aria-labelledby={`feature-${feature.title.replace(/\s/g, '').toLowerCase()}`}
              >
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <CardTitle id={`feature-${feature.title.replace(/\s/g, '').toLowerCase()}`} className="text-lg font-semibold">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mt-0 leading-7">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="app-button-primary h-11 px-7 text-base">
              <Link href="/dashboard/projects">Try dashboard now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="app-button-secondary h-11 px-7 text-base border">
              <a href="#testimonials">Why choose us?</a>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <section id="testimonials" className="py-20 bg-background/90 border-b border-border">
        <div className="app-section max-w-6xl">
          <header className="max-w-2xl mb-10 space-y-2">
            <Badge variant="secondary" className="text-xs px-3 py-1 tracking-widest uppercase bg-secondary/30 text-secondary-foreground mb-1 w-fit">
              Testimonials
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Teams trust Startup OS for delivery clarity
            </h2>
            <p className="app-subheading">
              Don't just take our word for it — see how real teams win with a single source of truth.
            </p>
          </header>
          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" aria-label="User testimonials">
            {testimonials.map((testimonial, idx) => (
              <Card key={testimonial.name} className="flex flex-col app-card-muted border border-border/70 rounded-2xl shadow-none p-8 h-full">
                <div className="flex items-center gap-1 mb-3 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-4 text-base text-foreground font-medium leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex flex-row gap-2 items-center mt-auto pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground text-sm">{testimonial.name}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.title}</span>
                  </div>
                </div>
              </Card>
            ))}
          </section>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="app-button-primary h-12 px-8 text-base">
              <Link href="/dashboard/projects">Start for free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="app-button-secondary h-12 px-8 text-base border">
              <a href="#features">Back to features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 bg-card/40 border-b border-border">
        <div className="app-section max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2 space-y-4">
              <Badge variant="outline" className="text-xs px-3 py-1 tracking-widest uppercase w-fit">Get in touch</Badge>
              <h2 className="app-heading text-2xl sm:text-3xl">Let's build something great together</h2>
              <p className="app-subheading">
                Have questions about enterprise plans, custom onboarding, or integrations? Drop us a line.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground pt-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@startupos.com</span>
              </div>
            </div>
            <form className="md:col-span-3 space-y-5 bg-background p-6 rounded-2xl border border-border shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="app-label">Full name</label>
                  <input id="contact-name" type="text" placeholder="Alex Johnson" className="app-input" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="app-label">Work email</label>
                  <input id="contact-email" type="email" placeholder="alex@company.com" className="app-input" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-company" className="app-label">Company</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input id="contact-company" type="text" placeholder="Acme Corp" className="app-input pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="app-label">How can we help?</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <textarea id="contact-message" rows={4} placeholder="Tell us about your team's workflow..." className="app-input pl-10 resize-none" />
                </div>
              </div>
              <Button type="submit" className="app-button-primary w-full sm:w-auto h-12 px-8 text-base">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section aria-label="final-cta" className="py-20 bg-primary/95">
        <div className="app-section max-w-5xl flex flex-col items-center gap-8 text-center px-6">
          <Badge variant="secondary" className="text-xs px-3 py-1 tracking-widest uppercase bg-white/20 text-primary-foreground border-0">
            Ready to scale?
          </Badge>
          <h2 className="app-heading text-white text-3xl md:text-5xl max-w-3xl mb-2">
            Ready to modernize your project management?
          </h2>
          <p className="app-subheading text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-4">
            Join hundreds of startups shipping faster. Centralize execution, keep every stakeholder aligned, and move from planning to launch with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button asChild size="lg" className="app-button-primary bg-white text-primary hover:bg-white/90 h-14 px-10 text-lg font-semibold shadow-xl">
              <Link href="/dashboard/projects">Create your workspace</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href="#contact">Talk to sales</a>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-4">No credit card required · Free forever for small teams · Setup in under 2 minutes</p>
        </div>
      </section>
    </main>
  );
}
```

Check imports:
```tsx
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  BarChart,
  UserCheck,
  Star,
  Users,
  ShieldCheck,
  ThumbsUp,
  Rocket,
  Target,
  LayoutDashboard,
  MessageSquare,
  Mail,
  Building2,
  User,
} from "lucide-react";
```
`User` is imported but not used in the new draft. I will remove it to keep it clean.
Wait, `User` was used in `useCases`? No, `useCases` uses `Rocket`, `Target`, `LayoutDashboard`.
I'll remove unused imports to prevent lint warnings.

Let's verify the layout and styling.
- Uses existing `app-heading`, `app-subheading`, `app-section`, `app-card`, `app-card-muted`, `app-button-primary`, `app-button-secondary`, `app-input`, `app-label`, `app-dashboard-kpi`.
- All these classes are defined in `globals.css`.
- The structure is strictly `app/page.tsx`.
- It includes Hero, Trusted By, Use Cases, Features, Testimonials, Contact Form, Final CTA.
- Matches the request perfectly: marketing-focused, conversion emphasis, testimonials, use cases, contact form, trust building.

One minor thing: `app-input` and `app-label` classes are used directly in the form. They are defined in `@layer components` in `globals.css`.
`app-input`: `@apply w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background;`
`app-label`: `@apply text-base font-medium leading-none text-foreground;`

Everything looks solid. I will generate the final code.
I'll make sure to output only the file content as requested.
Checking for any missing pieces: `Separator` is imported and used. `Badge` is used. `Button` is used. `Card` components are used. `Link` is used.
Icons from `lucide-react` are all standard.

The code is ready.
I will produce the final response. 
One detail: `User` import removed. `MessageSquare`, `Mail`, `Building2`, `Rocket`, `Target`, `LayoutDashboard` added.
All good.
Output matches exactly.
Proceeding. 
Self-Correction/Verification during thought:
Wait, `app/page.tsx` in the prompt had `import { CheckCircle, BarChart, UserCheck, Star, Users, ShieldCheck, ThumbsUp } from "lucide-react";`
I will just replace the imports list with the full list I need.
The code structure is completely valid Next.js App Router page.
I will ensure the formatting matches standard TSX.
All good. 
Proceeds. 
Output Generation. 
```tsx
...
```
Done. 
Let's produce the response. 
[Final Check]
- Request: "Redesign the landing page to be a marketing focused page, focused on conversion, testimonials, use cases, contact form, trust building ,etc"
- File: `app/page.tsx`
- Content: Updated with all requested sections, preserving existing styling conventions and component imports.
- Matches instructions: Yes.
- Output format: ONLY the final file content text.
Ready. 
[Output Generation] -> *Proceeds*
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  BarChart,
  UserCheck,
  Star,
  Users,
  ShieldCheck,
  ThumbsUp,
  Rocket,
  Target,
  LayoutDashboard,
  MessageSquare,
  Mail,
  Building2,
} from "lucide-react";

// Hero and feature demo data:
const stats = [
  { label: "Active projects", value: "24" },
  { label: "Tasks completed this week", value: "1,284" },
  { label: "On-time delivery", value: "96%" },
];

const useCases = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "For Founders",
    description: "Get a bird's-eye view of every initiative, track investor milestones, and keep the team aligned without micromanagement.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "For Product Teams",
    description: "Ship features faster with clear roadmaps, automated progress tracking, and seamless stakeholder updates.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" aria-hidden="true" />,
    title: "For Operations",
    description: "Centralize workflows, standardize reporting, and eliminate the chaos of scattered spreadsheets and email threads.",
  },
];

const features = [
  {
    icon: <CheckCircle className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Clarity at a glance",
    description: "Instantly see priorities, deadlines, and task status for every initiative.",
  },
  {
    icon: <BarChart className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Performance insights",
    description: "Measure progress, highlight wins, and eliminate delivery slowdowns.",
  },
  {
    icon: <UserCheck className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Accountability built-in",
    description: "Assign clear project owners so everyone knows who's driving what.",
  },
];

const testimonials = [
  {
    quote: "Startup OS transformed the way our team collaborates — no more missed deadlines or buried updates.",
    name: "Priya Sundaram",
    title: "Founder, Horizon Studio",
  },
  {
    quote: "The dashboard makes keeping our operations aligned effortless. We ship faster and with confidence.",
    name: "Daniel Kim",
    title: "COO, Apollo Labs",
  },
  {
    quote: "We cut our weekly sync time by 40% because the dashboard tells us exactly what we need to know.",
    name: "Elena Rodriguez",
    title: "VP of Engineering, NovaTech",
  },
];

const trustedLogos = ["Acme Corp", "Northstar", "Horizon Studio", "Apollo Labs", "NovaTech", "Vertex AI"];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-background/95 via-background/90 to-background/80 border-b border-border overflow-hidden">
        <div className="mx-auto grid min-h-[85vh] w-full max-w-6xl items-center gap-12 px-6 py-24 md:px-8 lg:grid-cols-2">
          {/* Hero left */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="w-fit text-xs px-3 py-1 tracking-widest uppercase bg-primary/10 text-primary mb-1">
                Startup OS v2.0
              </Badge>
              <h1 className="app-heading max-w-2xl text-balance">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Ship Faster
                </span>
                <br className="hidden sm:block" />
                With Less Stress
              </h1>
              <p className="app-subheading max-w-lg text-lg">
                The startup execution platform that helps growing teams deliver projects on time, every time. Get crystal-clear visibility into what's shipping next.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-1.5">
              <Button asChild size="lg" className="app-button-primary h-12 px-8 text-base shadow-lg hover:shadow-primary/20">
                <Link href="/dashboard/projects">Get Started - Free Forever</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="app-button-secondary h-12 px-8 text-base border">
                <a href="#demo" className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" aria-hidden="true" />
                <span>Secure & compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" aria-hidden="true" />
                <span>Trusted by 500+ teams</span>
              </div>
            </div>

            {/* Quick key stats */}
            <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3 w-full" aria-label="Product statistics">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="app-dashboard-kpi flex flex-col items-center justify-center text-center py-6 px-4 bg-background/90 border-border/75 hover:shadow-md transition-shadow"
                  tabIndex={0}
                  aria-label={stat.label}
                >
                  <CardTitle className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-[0.95rem] text-muted-foreground font-medium">
                    {stat.label}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero right: visual shell preview */}
          <aside className="flex flex-col justify-center gap-7" aria-label="App overview" id="demo">
            <Card className="rounded-2xl bg-card/95 border border-border/80 shadow-xl min-h-[28rem] flex flex-col justify-between overflow-hidden">
              <CardHeader className="pb-0">
                <Badge variant="secondary" className="uppercase tracking-widest text-xs font-bold mb-2 w-fit">
                  Live Preview
                </Badge>
                <CardTitle as="h2" className="text-xl mt-2">
                  Your Projects At a Glance
                </CardTitle>
                <CardDescription as="p" className="mt-2 text-base text-muted-foreground">
                  See what your team will experience with Startup OS
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-secondary/40">
                    <Users className="w-5 h-5 text-primary mr-1" aria-hidden="true" />
                    <span className="font-medium text-foreground">Project: Website Relaunch</span>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                    <ShieldCheck className="w-5 h-5 text-green-500 mr-1" aria-hidden="true" />
                    <span className="font-medium text-green-600 dark:text-green-400">Status: Active</span>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <ThumbsUp className="w-5 h-5 text-blue-500 mr-1" aria-hidden="true" />
                    <span className="font-medium text-blue-700 dark:text-blue-400">On-time delivery</span>
                  </div>
                </div>
                <Separator className="my-2" />
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 items-start sm:items-center text-sm">
                  <span className="text-muted-foreground">
                    Try the full dashboard for live project tracking!
                  </span>
                  <Button asChild size="sm" className="mt-1 sm:mt-0 px-5 h-9">
                    <Link href="/dashboard/projects">Explore projects</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* TRUSTED BY STRIP */}
      <section className="py-10 bg-muted/30 border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6 tracking-wide uppercase">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {trustedLogos.map((logo) => (
              <span key={logo} className="text-lg font-bold text-foreground">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section id="use-cases" className="py-20 bg-background">
        <div className="app-section max-w-6xl">
          <header className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Badge variant="secondary" className="text-xs px-3 py-1 tracking-widest uppercase">
              Tailored workflows
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">Built for the people who build</h2>
            <p className="app-subheading mx-auto">
              Whether you're raising capital, shipping code, or scaling operations, Startup OS adapts to how your team actually works.
            </p>
          </header>
          <section className="grid gap-8 md:grid-cols-3" aria-label="Use cases">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="app-card border-border bg-background/80 hover:shadow-lg transition-all duration-200 flex flex-col h-full">
                <CardHeader className="pb-3">
                  <div className="mb-2">{useCase.icon}</div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-card/50 border-b border-border py-20">
        <div className="app-section max-w-7xl">
          <header className="max-w-2xl mb-10 space-y-2">
            <Badge variant="outline" className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/40 text-muted-foreground mb-1 w-fit">
              Product value
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Stop managing projects in spreadsheets
            </h2>
            <p className="app-subheading">
              Upgrade to a workspace that is purpose-built for startup execution — with every delivery detail always visible and actionable.
            </p>
          </header>
          <section className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3" aria-label="Key product features">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="app-card hover:shadow-lg transition-shadow border-border bg-background/80 p-7 py-10"
                tabIndex={0}
                aria-labelledby={`feature-${feature.title.replace(/\s/g, '').toLowerCase()}`}
              >
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <CardTitle id={`feature-${feature.title.replace(/\s/g, '').toLowerCase()}`} className="text-lg font-semibold">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mt-0 leading-7">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="app-button-primary h-11 px-7 text-base">
              <Link href="/dashboard/projects">Try dashboard now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="app-button-secondary h-11 px-7 text-base border">
              <a href="#testimonials">Why choose us?</a>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <section id="testimonials" className="py-20 bg-background/90 border-b border-border">
        <div className="app-section max-w-6xl">
          <header className="max-w-2xl mb-10 space-y-2">
            <Badge variant="secondary" className="text-xs px-3 py-1 tracking-widest uppercase bg-secondary/30 text-secondary-foreground mb-1 w-fit">
              Testimonials
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Teams trust Startup OS for delivery clarity
            </h2>
            <p className="app-subheading">
              Don't just take our word for it — see how real teams win with a single source of truth.
            </p>
          </header>
          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" aria-label="User testimonials">
            {testimonials.map((testimonial, idx) => (
              <Card key={testimonial.name} className="flex flex-col app-card-muted border border-border/70 rounded-2xl shadow-none p-8 h-full">
                <div className="flex items-center gap-1 mb-3 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-4 text-base text-foreground font-medium leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex flex-row gap-2 items-center mt-auto pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground text-sm">{testimonial.name}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.title}</span>
                  </div>
                </div>
              </Card>
            ))}
          </section>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="app-button-primary h-12 px-8 text-base">
              <Link href="/dashboard/projects">Start for free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="app-button-secondary h-12 px-8 text-base border">
              <a href="#features">Back to features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 bg-card/40 border-b border-border">
        <div className="app-section max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2 space-y-4">
              <Badge variant="outline" className="text-xs px-3 py-1 tracking-widest uppercase w-fit">Get in touch</Badge>
              <h2 className="app-heading text-2xl sm:text-3xl">Let's build something great together</h2>
              <p className="app-subheading">
                Have questions about enterprise plans, custom onboarding, or integrations? Drop us a line.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground pt-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@startupos.com</span>
              </div>
            </div>
            <form className="md:col-span-3 space-y-5 bg-background p-6 rounded-2xl border border-border shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="app-label">Full name</label>
                  <input id="contact-name" type="text" placeholder="Alex Johnson" className="app-input" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="app-label">Work email</label>
                  <input id="contact-email" type="email" placeholder="alex@company.com" className="app-input" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-company" className="app-label">Company</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input id="contact-company" type="text" placeholder="Acme Corp" className="app-input pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="app-label">How can we help?</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <textarea id="contact-message" rows={4} placeholder="Tell us about your team's workflow..." className="app-input pl-10 resize-none" />
                </div>
              </div>
              <Button type="submit" className="app-button-primary w-full sm:w-auto h-12 px-8 text-base">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section aria-label="final-cta" className="py-20 bg-primary/95">
        <div className="app-section max-w-5xl flex flex-col items-center gap-8 text-center px-6">
          <Badge variant="secondary" className="text-xs px-3 py-1 tracking-widest uppercase bg-white/20 text-primary-foreground border-0">
            Ready to scale?
          </Badge>
          <h2 className="app-heading text-white text-3xl md:text-5xl max-w-3xl mb-2">
            Ready to modernize your project management?
          </h2>
          <p className="app-subheading text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-4">
            Join hundreds of startups shipping faster. Centralize execution, keep every stakeholder aligned, and move from planning to launch with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button asChild size="lg" className="app-button-primary bg-white text-primary hover:bg-white/90 h-14 px-10 text-lg font-semibold shadow-xl">
              <Link href="/dashboard/projects">Create your workspace</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href="#contact">Talk to sales</a>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-4">No credit card required · Free forever for small teams · Setup in under 2 minutes</p>
        </div>
      </section>
    </main>
  );
}