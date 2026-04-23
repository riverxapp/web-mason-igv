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
import { CheckCircle, BarChart, UserCheck, Star, Users, ShieldCheck, ThumbsUp } from "lucide-react";

// Hero and feature demo data:
const stats = [
  { label: "Active projects", value: "24" },
  { label: "Tasks completed this week", value: "1,284" },
  { label: "On-time delivery", value: "96%" },
];

// Showcase core value props (icons and concise messaging)
const features = [
  {
    icon: <CheckCircle className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Clarity at a glance",
    description:
      "Instantly see priorities, deadlines, and task status for every initiative.",
  },
  {
    icon: <BarChart className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Performance insights",
    description:
      "Measure progress, highlight wins, and eliminate delivery slowdowns.",
  },
  {
    icon: <UserCheck className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Accountability built-in",
    description:
      "Assign clear project owners so everyone knows who's driving what.",
  },
];

// Demo testimonials/social proof for credibility
const testimonials = [
  {
    quote:
      "Startup OS transformed the way our team collaborates — no more missed deadlines or buried updates.",
    name: "Priya Sundaram",
    title: "Founder, Horizon Studio",
    icon: <Star className="w-5 h-5 text-yellow-500 inline-block align-text-bottom mr-1" aria-hidden="true" />,
  },
  {
    quote:
      "The dashboard makes keeping our operations aligned effortless. We ship faster and with confidence.",
    name: "Daniel Kim",
    title: "COO, Apollo Labs",
    icon: <Star className="w-5 h-5 text-yellow-500 inline-block align-text-bottom mr-1" aria-hidden="true" />,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-background/95 via-background/90 to-background/80 border-b border-border">
        <div className="mx-auto grid min-h-[80vh] w-full max-w-6xl items-center gap-12 px-6 py-20 md:px-8 lg:grid-cols-2">
          {/* Hero left: headline, value prop, CTA */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex flex-col gap-6">
              <Badge
                variant="outline"
                className="w-fit text-xs px-3 py-1 tracking-widest uppercase bg-primary/10 text-primary mb-1"
              >
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="app-button-secondary h-12 px-8 text-base border"
              >
                <a href="#demo" className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Secure & compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Trusted by 500+ teams</span>
              </div>
            </div>

            {/* Quick key stats for trust/credibility */}
            <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3 w-full" aria-label="Product statistics">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="app-dashboard-kpi flex flex-col items-center justify-center text-center py-7 px-4 bg-background/90 border-border/75 hover:shadow-md transition-shadow"
                  tabIndex={0}
                  aria-label={stat.label}
                >
                  <CardTitle className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-[1rem] text-muted-foreground font-medium">
                    {stat.label}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
          {/* Hero right: visual shell preview */}
          <aside className="flex flex-col justify-center gap-7" aria-label="App overview" id="demo">
            <Card className="rounded-2xl bg-card/95 border border-border/80 shadow-xl min-h-[25rem] flex flex-col justify-between overflow-hidden">
              <CardHeader className="pb-0">
                <Badge variant="secondary" className="uppercase tracking-widest text-xs font-bold mb-2">
                  Live Preview
                </Badge>
                <CardTitle as="h2" className="text-xl mt-2">
                  Your Projects At a Glance
                </CardTitle>
                <CardDescription as="p" className="mt-2 text-base text-muted-foreground">
                  See what your team will experience with Startup OS
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-3 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-center">
                    <Users className="w-5 h-5 text-primary mr-1" aria-hidden="true" />
                    <span className="font-medium text-foreground">Project: Website Relaunch</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <ShieldCheck className="w-5 h-5 text-green-500 mr-1" aria-hidden="true" />
                    <span className="font-medium text-green-600 dark:text-green-400">Status: Active</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <ThumbsUp className="w-5 h-5 text-blue-500 mr-1" aria-hidden="true" />
                    <span className="font-medium text-blue-700 dark:text-blue-400">On-time delivery</span>
                  </div>
                </div>
                <Separator className="my-2" />
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 items-start sm:items-center text-sm">
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

      {/* FEATURES SECTION */}
      <section id="features" className="bg-card/50 border-b border-border py-20">
        <div className="app-section max-w-7xl">
          <header className="max-w-2xl mb-10 space-y-2">
            <Badge
              variant="outline"
              className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/40 text-muted-foreground mb-1"
            >
              Product value
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Stop managing projects in spreadsheets
            </h2>
            <p className="app-subheading">
              Upgrade to a workspace that is purpose-built for startup execution — with every delivery detail always visible and actionable.
            </p>
          </header>
          <section
            className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
            aria-label="Key product features"
          >
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
                    <CardTitle
                      id={`feature-${feature.title.replace(/\s/g, '').toLowerCase()}`}
                      className="text-lg font-semibold"
                    >
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mt-0 leading-7">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="app-button-primary h-11 px-7 text-base">
              <Link href="/dashboard/projects">Try dashboard now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="app-button-secondary h-11 px-7 text-base border"
            >
              <a href="#testimonials">Why choose us?</a>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <section id="testimonials" className="py-20 bg-background/90 border-b border-border">
        <div className="app-section max-w-6xl">
          <header className="max-w-2xl mb-10 space-y-2">
            <Badge
              variant="secondary"
              className="text-xs px-3 py-1 tracking-widest uppercase bg-secondary/30 text-secondary-foreground mb-1"
            >
              Testimonials
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Teams trust Startup OS for delivery clarity
            </h2>
            <p className="app-subheading">
              Don't just take our word for it — see how real teams win with a single source of truth.
            </p>
          </header>
          <section className="grid gap-8 md:grid-cols-2" aria-label="User testimonials">
            {testimonials.map((testimonial, idx) => (
              <Card key={testimonial.name} className="flex flex-col app-card-muted border border-border/70 rounded-2xl shadow-none p-8">
                <div className="flex items-center gap-2 mb-2">
                  {testimonial.icon}
                  {testimonial.icon}
                  {testimonial.icon}
                  {testimonial.icon}
                  {testimonial.icon}
                </div>
                <blockquote className="mb-3 text-xl text-foreground font-medium leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className="flex flex-row gap-2 items-center">
                  <span className="font-semibold text-foreground">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground"> &middot; {testimonial.title}</span>
                </div>
              </Card>
            ))}
          </section>
          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="app-button-primary h-12 px-8 text-base">
              <Link href="/dashboard/projects">Start for free</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="app-button-secondary h-12 px-8 text-base border"
            >
              <a href="#features">Back to features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION (optional strong close) */}
      <section aria-label="final-cta" className="py-16 bg-primary/90">
        <div className="app-section max-w-6xl flex flex-col items-center gap-6 text-center">
          <h2 className="app-heading text-white text-3xl md:text-4xl mb-2">
            Ready to modernize your project management?
          </h2>
          <p className="app-subheading text-lg text-primary-foreground/85 mb-2 max-w-3xl mx-auto">
            No more missed deadlines or confusion. Centralize execution, keep every stakeholder aligned, and move from planning to launch with confidence.
          </p>
          <Button asChild size="lg" className="app-button-primary h-14 px-12 text-lg font-semibold shadow-xl">
            <Link href="/dashboard/projects">Create your workspace</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
