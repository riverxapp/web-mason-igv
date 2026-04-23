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

/** Dashboard KPIs/statistics */
const stats = [
  { label: "Active projects", value: "24" },
  { label: "Tasks completed this week", value: "1,284" },
  { label: "On-time delivery", value: "96%" },
];

const workflows = [
  {
    title: "Projects and ownership",
    description:
      "Organize every initiative with clear project briefs, owners, priorities, and delivery accountability.",
  },
  {
    title: "Tasks and status tracking",
    description:
      "Break work into tasks, monitor status changes, and keep progress visible from planning through completion.",
  },
  {
    title: "Deadlines and delivery notes",
    description:
      "Track due dates, capture execution notes, and keep important context attached to the work itself.",
  },
];

const modules = [
  {
    title: "Projects",
    description:
      "Create and manage projects for launches, internal operations, and customer delivery work.",
  },
  {
    title: "Tasks",
    description:
      "Turn strategy into execution with structured work items, priorities, and completion tracking.",
  },
  {
    title: "Owners",
    description:
      "Assign clear responsibility so every project and task has an accountable teammate.",
  },
  {
    title: "Status",
    description:
      "Use visible workflow states to understand what is planned, active, blocked, under review, or done.",
  },
  {
    title: "Deadlines",
    description:
      "Keep delivery schedules on track with due dates that surface urgency before work slips.",
  },
  {
    title: "Notes",
    description:
      "Capture updates, blockers, decisions, and handoff context in one shared workspace.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.1fr_0.95fr]">
          {/* Hero left: Headline & Actions */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/60 text-muted-foreground mb-2"
              >
                Startup OS
              </Badge>
              <h1 className="app-heading max-w-2xl text-balance">
                Run projects, track delivery, and keep the team aligned in one workspace.
              </h1>
              <p className="app-subheading max-w-lg">
                A production-focused entry point for founders and operators to review priorities, open the dashboard, and manage work in context.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="app-button-primary h-12 px-8 text-base">
                <Link href="/dashboard/projects">Open project dashboard</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="app-button-secondary h-12 px-8 text-base border"
              >
                <a href="#overview">Explore workspace overview</a>
              </Button>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="app-dashboard-kpi items-center text-center p-5 bg-background border-border shadow-sm">
                  <CardTitle className="text-3xl font-extrabold mb-1">{stat.value}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>
          {/* Hero right: Dashboard panel/overview */}
          <aside
            id="overview"
            className="flex flex-col justify-center gap-6"
            aria-label="Dashboard overview"
          >
            <Card className="app-dashboard-panel shadow bg-card mb-2">
              <CardHeader className="pb-1">
                <Badge variant="secondary" className="uppercase tracking-widest text-xs font-bold mb-2">
                  Dashboard overview
                </Badge>
                <CardTitle className="text-xl mt-2">
                  A focused operational view for startup execution
                </CardTitle>
                <CardDescription className="mt-2 text-sm">
                  Start with key projects, then expand into supporting workflow surfaces as your product grows.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-0">
                <Separator className="my-2" />
                <div className="flex flex-col gap-2">
                  {workflows.map((item) => (
                    <Card
                      key={item.title}
                      className="app-card-muted border border-border/65 rounded-lg"
                      role="region"
                      aria-labelledby={`workflow-${item.title.replace(/\s/g, '').toLowerCase()}`}
                    >
                      <CardHeader className="pb-1 pt-2">
                        <CardTitle
                          id={`workflow-${item.title.replace(/\s/g, '').toLowerCase()}`}
                          className="text-base font-semibold"
                        >
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
                <Separator className="my-3 mt-4" />
                <div className="rounded-lg bg-secondary/60 p-4 mt-2 flex flex-col gap-2">
                  <p className="text-sm font-medium text-secondary-foreground">
                    Go to the projects workspace to manage initiatives, owners, deadlines, and track execution.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="pl-0 text-secondary-foreground hover:text-primary"
                  >
                    <Link href="/dashboard/projects">Go to projects</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section className="border-b border-border bg-card/40 py-16">
        <div className="app-section max-w-7xl">
          <div className="max-w-2xl mb-9 space-y-2">
            <Badge
              variant="outline"
              className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/40 text-muted-foreground mb-1"
            >
              Key workflow modules
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Plan, manage, and deliver with a single operating view
            </h2>
            <p className="app-subheading">
              Core operational building blocks for startups: manage projects, tasks, owners, statuses, due dates, and notes.
            </p>
          </div>
          <div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            aria-label="Workflow modules"
          >
            {modules.map((module) => (
              <Card
                key={module.title}
                className="app-card hover:shadow-md transition-shadow border-border"
                aria-labelledby={`module-${module.title.replace(/\s/g, '').toLowerCase()}`}
              >
                <CardHeader className="pb-2">
                  <CardTitle
                    id={`module-${module.title.replace(/\s/g, '').toLowerCase()}`}
                    className="text-base font-semibold"
                  >
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mt-0 leading-6">
                    {module.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="app-button-primary h-11 px-7 text-base">
              <Link href="/dashboard/projects">Launch dashboard</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="app-button-secondary h-11 px-7 text-base border"
            >
              <a href="#startup-readiness">Review startup readiness</a>
            </Button>
          </div>
        </div>
      </section>

      {/* STARTUP READINESS SECTION */}
      <section id="startup-readiness" className="py-16 bg-background">
        <div className="app-section max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="space-y-5 max-w-xl">
              <Badge
                variant="outline"
                className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/40 text-muted-foreground mb-2"
              >
                Startup readiness
              </Badge>
              <h2 className="app-heading text-2xl sm:text-3xl">
                A practical entry point for an end-to-end project management tool
              </h2>
              <p className="app-subheading">
                Start with the core project delivery surface, then expand to client tracking, team views, reporting, and automations as you grow.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="app-dashboard-panel-muted p-6 flex flex-col gap-2 shadow-none">
                <CardTitle className="font-semibold text-base mb-1">Immediate value</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Give founders and operators one place to review active work, due dates, owners, and project health.
                </CardDescription>
              </Card>
              <Card className="app-dashboard-panel-muted p-6 flex flex-col gap-2 shadow-none">
                <CardTitle className="font-semibold text-base mb-1">Execution clarity</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Reduce ambiguity with structured project records, visible status changes, and documented next steps.
                </CardDescription>
              </Card>
              <Card className="app-dashboard-panel-muted p-6 flex flex-col gap-2 shadow-none">
                <CardTitle className="font-semibold text-base mb-1">Scalable foundation</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Establish a core workflow model that can support richer dashboards, reporting, and team collaboration later.
                </CardDescription>
              </Card>
              <Card className="app-dashboard-panel-muted p-6 flex flex-col gap-2 shadow-none">
                <CardTitle className="font-semibold text-base mb-1">Clear next step</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Use the projects route as the primary operational entry point for building the rest of the product experience.
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}