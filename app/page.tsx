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
    <main className="bg-background text-foreground">
      <section className="border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Agency OS
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Build a startup operating system for projects, tasks, and team
                delivery.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Centralize projects, task ownership, status updates, deadlines,
                and notes in one focused workspace built to help your startup
                plan clearly and execute faster.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard/projects"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open projects workspace
              </Link>
              <a
                href="#overview"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Explore workflow overview
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside
            id="overview"
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Core workflow
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Everything your startup team needs to stay aligned
                </h2>
              </div>

              <div className="space-y-3">
                {workflows.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border/70 bg-background p-4"
                  >
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-secondary p-4">
                <p className="text-sm font-medium text-secondary-foreground">
                  Start in the projects workspace to create initiatives, assign
                  owners, set deadlines, and track execution in one place.
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/projects"
                    className="inline-flex text-sm font-medium text-secondary-foreground underline underline-offset-4"
                  >
                    Go to projects
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Key workflow modules
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Plan, manage, and deliver with a single operating view
            </h2>
            <p className="text-sm leading-6 text-muted-foreground md:text-base">
              The product foundation centers on the operational building blocks
              most startups need first: a reliable place to manage projects,
              tasks, owners, statuses, deadlines, and working notes.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.title}
                className="rounded-xl border border-border bg-background p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold">{module.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {module.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard/projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Launch the project dashboard
            </Link>
            <a
              href="#startup-readiness"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Review startup readiness
            </a>
          </div>
        </div>
      </section>

      <section id="startup-readiness">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Startup readiness
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                A practical entry point for an end-to-end project management
                tool
              </h2>
              <p className="text-sm leading-6 text-muted-foreground md:text-base">
                Begin with the core delivery surface in projects, then expand
                into supporting workflows such as client tracking, team views,
                reporting, and operational automations as your product grows.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="text-base font-semibold">Immediate value</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Give founders and operators one place to review active work,
                  due dates, owners, and project health.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="text-base font-semibold">Execution clarity</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Reduce ambiguity with structured project records, visible
                  status changes, and documented next steps.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="text-base font-semibold">Scalable foundation</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Establish a core workflow model that can support richer
                  dashboards, reporting, and team collaboration later.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="text-base font-semibold">Clear next step</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Use the projects route as the primary operational entry point
                  for building the rest of the product experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}