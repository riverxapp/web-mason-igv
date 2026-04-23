import Link from "next/link";

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
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main hero content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Startup OS
              </span>
              <h1 className="app-heading max-w-3xl">
                Run projects, track delivery, and keep the team aligned in one workspace.
              </h1>
              <p className="app-subheading max-w-xl">
                A cleaner entry point for founders and operators to review priorities, open the dashboard, and manage day-to-day work without losing context.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard/projects"
                className="app-button-primary h-12 px-7 text-base"
              >
                Open project dashboard
              </Link>
              <a
                href="#overview"
                className="app-button-secondary h-12 px-7 text-base"
              >
                Explore workspace overview
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="app-dashboard-kpi text-center"
                  aria-label={stat.label}
                >
                  <p className="text-3xl font-extrabold">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard overview panel */}
          <aside
            id="overview"
            className="app-dashboard-panel flex flex-col gap-7"
            aria-label="Dashboard overview"
          >
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Dashboard overview
              </span>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                A focused operational view for startup execution
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Start with projects, then expand into the supporting workflow surfaces as your product grows.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {workflows.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border/70 bg-background p-4"
                  role="region"
                  aria-labelledby={`workflow-${item.title.replace(/\s/g, '').toLowerCase()}`}
                >
                  <h3
                    id={`workflow-${item.title.replace(/\s/g, '').toLowerCase()}`}
                    className="font-semibold"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-secondary p-4 mt-2 flex flex-col gap-2">
              <p className="text-sm font-medium text-secondary-foreground">
                Open the projects workspace to create initiatives, assign owners, set deadlines, and track execution in one place.
              </p>
              <div>
                <Link
                  href="/dashboard/projects"
                  className="underline font-medium text-secondary-foreground underline-offset-4 text-sm hover:text-primary"
                >
                  Go to projects
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section className="border-b border-border bg-card/30 py-16">
        <div className="app-section">
          <div className="max-w-2xl mb-8 space-y-4">
            <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Key workflow modules
            </span>
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
              <article
                key={module.title}
                className="app-card p-6 flex flex-col gap-3"
                aria-labelledby={`module-${module.title.replace(/\s/g, '').toLowerCase()}`}
              >
                <h3
                  id={`module-${module.title.replace(/\s/g, '').toLowerCase()}`}
                  className="text-base font-semibold text-foreground"
                >
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-6">{module.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard/projects"
              className="app-button-primary h-11 px-7 text-base"
            >
              Launch dashboard
            </Link>
            <a
              href="#startup-readiness"
              className="app-button-secondary h-11 px-7 text-base"
            >
              Review startup readiness
            </a>
          </div>
        </div>
      </section>

      {/* STARTUP READINESS SECTION */}
      <section id="startup-readiness" className="py-16">
        <div className="app-section">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div className="space-y-5 max-w-xl">
              <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Startup readiness
              </span>
              <h2 className="app-heading text-2xl sm:text-3xl">
                A practical entry point for an end-to-end project management tool
              </h2>
              <p className="app-subheading">
                Begin with the core delivery surface in projects, then expand into supporting workflows such as client tracking, team views, reporting, and operational automations as your product grows.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="app-dashboard-panel-muted p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Immediate value</h3>
                <p className="text-sm text-muted-foreground">
                  Give founders and operators one place to review active work, due dates, owners, and project health.
                </p>
              </div>
              <div className="app-dashboard-panel-muted p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Execution clarity</h3>
                <p className="text-sm text-muted-foreground">
                  Reduce ambiguity with structured project records, visible status changes, and documented next steps.
                </p>
              </div>
              <div className="app-dashboard-panel-muted p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Scalable foundation</h3>
                <p className="text-sm text-muted-foreground">
                  Establish a core workflow model that can support richer dashboards, reporting, and team collaboration later.
                </p>
              </div>
              <div className="app-dashboard-panel-muted p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Clear next step</h3>
                <p className="text-sm text-muted-foreground">
                  Use the projects route as the primary operational entry point for building the rest of the product experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}