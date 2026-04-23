"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  BarChart3,
  Users2,
  Star,
  ShieldCheck,
  Rocket,
  Target,
  LayoutDashboard,
  Mail,
  Building2,
  ArrowRight,
  Loader2,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Demo / Marketing Data
// ---------------------------------------------------------------------------
const stats = [
  { label: "Active workspaces", value: "1,200+" },
  { label: "Tasks delivered weekly", value: "84,500" },
  { label: "On-time shipping rate", value: "98.2%" },
];

const useCases = [
  {
    icon: <Rocket className="w-9 h-9 text-primary" aria-hidden="true" />,
    title: "For Founders & CEOs",
    description: "Stop juggling scattered updates. Get a single source of truth for milestones, investor milestones, and cross-team alignment.",
  },
  {
    icon: <Target className="w-9 h-9 text-primary" aria-hidden="true" />,
    title: "For Product & Engineering",
    description: "Ship predictably with automated roadmaps, dependency tracking, and stakeholder visibility baked in.",
  },
  {
    icon: <LayoutDashboard className="w-9 h-9 text-primary" aria-hidden="true" />,
    title: "For Operations & RevOps",
    description: "Standardize workflows, eliminate manual reporting, and scale processes without adding headcount.",
  },
];

const features = [
  {
    icon: <CheckCircle2 className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Instant execution clarity",
    description: "Surface priorities, deadlines, and blockers before they stall delivery.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Real-time performance insights",
    description: "Track velocity, spot bottlenecks, and optimize team throughput automatically.",
  },
  {
    icon: <Users2 className="w-7 h-7 text-primary" aria-hidden="true" />,
    title: "Built-in accountability",
    description: "Assign clear owners, set expectations, and remove the 'who's doing what?' friction.",
  },
];

const testimonials = [
  {
    quote: "Startup OS cut our weekly alignment meetings by 60%. We finally know exactly what ships next and who owns it.",
    name: "Priya Sundaram",
    title: "Founder, Horizon Studio",
  },
  {
    quote: "We replaced three disconnected tools with one dashboard. Our engineering velocity jumped almost overnight.",
    name: "Daniel Kim",
    title: "COO, Apollo Labs",
  },
  {
    quote: "Clear visibility eliminated our delivery anxiety. Leadership trusts the roadmap, and the team executes with focus.",
    name: "Elena Rodriguez",
    title: "VP of Engineering, NovaTech",
  },
];

const trustedLogos = ["Acme Corp", "Northstar", "Horizon Studio", "Apollo Labs", "NovaTech", "Vertex AI"];

// ---------------------------------------------------------------------------
// Main Page Component
// ---------------------------------------------------------------------------
export default function HomePage() {
  // Contact form state management (per UX state coverage requirements)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleContactChange = (field: string, value: string) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) {
      setFormState("error");
      return;
    }

    setFormState("submitting");
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1200));
    setFormState("success");
    setContactForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setFormState("idle"), 5000);
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-background via-background/95 to-background/90 border-b border-border overflow-hidden">
        <div className="mx-auto grid min-h-[85vh] w-full max-w-6xl items-center gap-12 px-6 py-24 md:px-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="w-fit text-xs px-3 py-1.5 tracking-widest uppercase bg-primary/10 text-primary border-primary/20">
                Startup OS 2.0
              </Badge>
              <h1 className="app-heading max-w-2xl text-balance">
                Ship products{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  faster
                </span>
                , stress less.
              </h1>
              <p className="app-subheading max-w-lg text-lg">
                The execution platform for growing teams. Replace scattered spreadsheets with a single source of truth for roadmaps, owners, and delivery metrics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button asChild size="lg" className="app-button-primary h-13 px-8 text-base shadow-lg shadow-primary/10 hover:shadow-primary/20">
                <Link href="/dashboard/projects">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="app-button-secondary h-13 px-8 text-base">
                <a href="#demo" className="flex items-center">
                  Watch 2-min demo
                </a>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" aria-hidden="true" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                <span>4.9/5 from 1,200+ teams</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3 w-full" aria-label="Platform performance metrics">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="flex flex-col items-center justify-center text-center py-5 px-4 bg-background/80 backdrop-blur border-border/60"
                  aria-label={stat.label}
                >
                  <CardTitle className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {stat.label}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero right: visual shell preview */}
          <aside className="flex flex-col justify-center gap-6" aria-label="Platform dashboard preview" id="demo">
            <Card className="rounded-2xl bg-card/95 border border-border/80 shadow-2xl min-h-[28rem] flex flex-col justify-between overflow-hidden">
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="uppercase tracking-widest text-xs font-bold mb-2 w-fit">
                  Live Workspace
                </Badge>
                <CardTitle as="h2" className="text-xl mt-1">
                  Your delivery pipeline, simplified
                </CardTitle>
                <CardDescription as="p" className="mt-2 text-base text-muted-foreground">
                  See exactly what ships next, who owns it, and where it stands.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-secondary/50 border border-border/40">
                    <Users2 className="w-5 h-5 text-primary mr-1" aria-hidden="true" />
                    <span className="font-medium text-foreground">Initiative: Q3 Product Launch</span>
                    <Badge className="ml-auto bg-primary/10 text-primary hover:bg-primary/10">Active</Badge>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-green-50/50 dark:bg-green-950/20 border border-green-200/50 dark:border-green-800/50">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mr-1" aria-hidden="true" />
                    <span className="font-medium text-green-700 dark:text-green-300">Milestone: Design Freeze</span>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/50">
                    <Target className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-1" aria-hidden="true" />
                    <span className="font-medium text-blue-700 dark:text-blue-300">Next: Engineering Handoff</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 items-start sm:items-center text-sm pt-2 border-t border-border/50">
                  <span className="text-muted-foreground">
                    Try the full dashboard for live tracking
                  </span>
                  <Button asChild size="sm" className="px-5 h-9">
                    <Link href="/dashboard/projects">Explore projects</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* TRUSTED BY STRIP */}
      <section className="py-12 bg-muted/20 border-b border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8 text-center">
          <p className="text-xs font-semibold text-muted-foreground mb-6 tracking-widest uppercase">Trusted by high-growth teams</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {trustedLogos.map((logo) => (
              <span key={logo} className="text-lg font-bold text-foreground/80 tracking-tight">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section id="use-cases" className="py-24 bg-background">
        <div className="app-section max-w-6xl">
          <header className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Badge variant="secondary" className="text-xs px-3 py-1.5 tracking-widest uppercase">
              Built for execution
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">One platform, every builder</h2>
            <p className="app-subheading mx-auto">
              Whether you're raising capital, shipping features, or scaling operations, Startup OS adapts to your workflow, not the other way around.
            </p>
          </header>
          <section className="grid gap-8 md:grid-cols-3" aria-label="Role-based workflows">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="app-card border-border bg-background/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="mb-3 p-3 rounded-xl bg-primary/5 w-fit">{useCase.icon}</div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-card/30 border-y border-border py-24">
        <div className="app-section max-w-6xl">
          <header className="max-w-2xl mb-12 space-y-3">
            <Badge variant="outline" className="text-xs px-3 py-1.5 tracking-widest uppercase bg-background text-muted-foreground mb-1 w-fit">
              Why teams switch
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Stop managing delivery in spreadsheets
            </h2>
            <p className="app-subheading">
              Upgrade to a workspace purpose-built for startup execution. Every detail stays visible, actionable, and aligned.
            </p>
          </header>
          <section className="mt-8 grid gap-6 md:grid-cols-3" aria-label="Core platform capabilities">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="app-card hover:shadow-lg transition-shadow border-border bg-background/60 p-7"
                tabIndex={0}
              >
                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">{feature.icon}</div>
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7 text-foreground/80">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </section>
          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="app-button-primary h-12 px-8 text-base">
              <Link href="/dashboard/projects">Try the dashboard free</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="app-button-secondary h-12 px-6 text-base">
              <a href="#testimonials" className="flex items-center gap-2">See why teams choose us <ArrowRight className="w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <section id="testimonials" className="py-24 bg-background/90 border-b border-border">
        <div className="app-section max-w-6xl">
          <header className="max-w-2xl mb-14 space-y-3 text-center mx-auto">
            <Badge variant="secondary" className="text-xs px-3 py-1.5 tracking-widest uppercase bg-secondary/40 text-secondary-foreground mb-1 w-fit">
              Customer stories
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Trusted to keep teams shipping
            </h2>
            <p className="app-subheading mx-auto">
              Real outcomes from teams that replaced chaos with clarity.
            </p>
          </header>
          <section className="grid gap-8 md:grid-cols-3" aria-label="Verified user testimonials">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col app-card-muted border border-border/60 rounded-2xl p-8 h-full shadow-sm">
                <div className="flex items-center gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-6 text-base text-foreground/90 font-medium leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex flex-row gap-3 items-center mt-auto pt-4 border-t border-border/50">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">{testimonial.name}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.title}</span>
                  </div>
                </div>
              </Card>
            ))}
          </section>
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="app-button-primary h-13 px-9 text-base">
              <Link href="/dashboard/projects">Start your free workspace</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="app-button-secondary h-13 px-9 text-base border">
              <a href="#features">Explore features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 bg-muted/10 border-b border-border">
        <div className="app-section max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2 space-y-5">
              <Badge variant="outline" className="text-xs px-3 py-1.5 tracking-widest uppercase w-fit">Talk to us</Badge>
              <h2 className="app-heading text-2xl sm:text-3xl">Let's scale your execution</h2>
              <p className="app-subheading">
                Need enterprise SSO, custom onboarding, or volume pricing? Our team responds within 24 hours.
              </p>
              <div className="flex items-center gap-3 text-muted-foreground pt-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>growth@startupos.com</span>
              </div>
            </div>

            <div className="md:col-span-3">
              {formState === "success" ? (
                <Card className="p-8 bg-green-50/50 border-green-200 dark:bg-green-950/20 dark:border-green-800/50">
                  <CardContent className="flex flex-col items-center text-center pt-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600 mb-3" />
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">Message received!</h3>
                    <p className="text-muted-foreground mt-2">We'll be in touch shortly to discuss your workflow needs.</p>
                  </CardContent>
                </Card>
              ) : (
                <form className="space-y-5 bg-background p-8 rounded-2xl border border-border shadow-sm" onSubmit={handleContactSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="app-label">Full name</label>
                      <input id="contact-name" type="text" required placeholder="Alex Johnson" className="app-input" value={contactForm.name} onChange={(e) => handleContactChange("name", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="app-label">Work email</label>
                      <input id="contact-email" type="email" required placeholder="alex@company.com" className="app-input" value={contactForm.email} onChange={(e) => handleContactChange("email", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="app-label">Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                      <input id="contact-company" type="text" placeholder="Acme Corp" className="app-input pl-10" value={contactForm.company} onChange={(e) => handleContactChange("company", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="app-label">How can we help?</label>
                    <textarea id="contact-message" rows={4} placeholder="Tell us about your team size and current workflow..." className="app-input resize-none" value={contactForm.message} onChange={(e) => handleContactChange("message", e.target.value)} />
                  </div>

                  {formState === "error" && (
                    <p className="text-sm text-destructive font-medium" role="alert">Please fill in your name and email to continue.</p>
                  )}

                  <Button type="submit" disabled={formState === "submitting"} className="app-button-primary w-full sm:w-auto h-12 px-8 text-base">
                    {formState === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : "Send message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section aria-label="final-cta" className="py-24 bg-primary">
        <div className="app-section max-w-4xl flex flex-col items-center gap-6 text-center px-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight tracking-tight">
            Ready to replace project chaos with clarity?
          </h2>
          <p className="text-lg text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Join 1,200+ startups shipping faster. Centralize execution, align stakeholders, and move from planning to launch with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
            <Button asChild size="lg" className="app-button-primary bg-white text-primary hover:bg-white/90 h-14 px-10 text-lg font-semibold shadow-xl shadow-black/10">
              <Link href="/dashboard/projects">Create your workspace</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover:text-white">
              <a href="#contact">Talk to sales</a>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-3">No credit card required · Free for teams up to 5 · Setup in 2 minutes</p>
        </div>
      </section>
    </main>
  );
}
