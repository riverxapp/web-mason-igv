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
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-10 px-6 py-20 md:px-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Main hero content */}
          <div className="space-y-10">
            <div className="space-y-5">
              <Badge variant="outline" className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/50 text-muted-foreground mb-1">
                Startup OS
              </Badge>
              <h1 className="app-heading max-w-3xl">
                Run projects, track delivery, and keep the team aligned in one workspace.
              </h1>
              <p className="app-subheading max-w-xl">
                A cleaner entry point for founders and operators to review priorities, open the dashboard, and manage day-to-day work without losing context.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="text-base h-12 px-7"
              >
                <Link href="/dashboard/projects">
                  Open project dashboard
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base h-12 px-7"
              >
                <a href="#overview">Explore workspace overview</a>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 mt-3">
              {stats.map((stat) => (
                <Card key={stat.label} className="flex flex-col items-center text-center p-5 shadow bg-background border-border">
                  <CardTitle className="text-3xl font-extrabold mb-1">{stat.value}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground font-medium">{stat.label}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
          {/* Dashboard overview panel */}
          <aside
            id="overview"
            className="flex flex-col gap-8"
            aria-label="Dashboard overview"
          >
            <Card className="shadow border-border bg-card mb-2">
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="uppercase tracking-widest text-xs font-bold mb-2">
                  Dashboard overview
                </Badge>
                <CardTitle className="text-xl mt-2">
                  A focused operational view for startup execution
                </CardTitle>
                <CardDescription className="mt-2 text-sm">
                  Start with projects, then expand into the supporting workflow surfaces as your product grows.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-0">
                <Separator className="my-3" />
                <div className="flex flex-col gap-3">
                  {workflows.map((item) => (
                    <Card
                      key={item.title}
                      className="bg-background border border-border/65 rounded-lg mb-2"
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
                <div className="rounded-lg bg-secondary/50 p-4 mt-2 flex flex-col gap-2">
                  <p className="text-sm font-medium text-secondary-foreground">
                    Open the projects workspace to create initiatives, assign owners, set deadlines, and track execution in one place.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="pl-0 text-secondary-foreground hover:text-primary"
                  >
                    <Link href="/dashboard/projects">
                      Go to projects
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section className="border-b border-border bg-card/30 py-16">
        <div className="app-section max-w-7xl">
          <div className="max-w-2xl mb-8 space-y-4">
            <Badge variant="outline" className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/40 text-muted-foreground mb-2">
              Key workflow modules
            </Badge>
            <h2 className="app-heading text-2xl sm:text-3xl">
              Plan, manage, and deliver with a single operating view
            </h2>
            <p className="app-subheading">
              The product foundation centers on the operational building blocks most startups need first: a reliable place to manage projects, tasks, owners, statuses, deadlines, and working notes.
            </p>
          </div>
          <div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            aria-label="Workflow modules"
          >
            {modules.map((module) => (
              <Card
                key={module.title}
                className="flex flex-col gap-2 border-border hover:shadow-md transition-shadow"
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
            <Button
              asChild
              size="lg"
              className="h-11 px-7 text-base"
            >
              <Link href="/dashboard/projects">
                Launch dashboard
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 px-7 text-base"
            >
              <a href="#startup-readiness">
                Review startup readiness
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* STARTUP READINESS SECTION */}
      <section id="startup-readiness" className="py-16">
        <div className="app-section max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="space-y-5 max-w-xl">
              <Badge variant="outline" className="text-xs px-3 py-1 tracking-widest uppercase bg-muted/40 text-muted-foreground mb-2">
                Startup readiness
              </Badge>
              <h2 className="app-heading text-2xl sm:text-3xl">
                A practical entry point for an end-to-end project management tool
              </h2>
              <p className="app-subheading">
                Begin with the core delivery surface in projects, then expand into supporting workflows such as client tracking, team views, reporting, and operational automations as your product grows.
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