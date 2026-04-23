import Link from "next/link";

const stats = [
  { label: "Active projects", value: "24" },
  { label: "Tasks completed", value: "1,284" },
  { label: "On-time delivery", value: "96%" },
];

const workflows = [
  {
    title: "Plan work",
    description:
      "Create project briefs, define milestones, and assign ownership without switching tools.",
  },
  {
    title: "Track delivery",
    description:
      "See status, due dates, blockers, and progress at a glance across every client account.",
  },
  {
    title: "Keep stakeholders aligned",
    description:
      "Share a clean workspace that makes updates, reviews, and handoffs easy to follow.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Agency OS
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Run projects, deliver work, and keep your startup aligned.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                A focused project management workspace for tracking clients,
                projects, tasks, and delivery progress from one place.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard/projects"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open project dashboard
              </Link>
              <a
                href="#overview"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Explore product overview
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
                  Core entry points
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Everything your team needs to get started
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
                  Ready to start? Head into the dashboard to manage projects,
                  review status, and organize work.
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/projects"
                    className="inline-flex text-sm font-medium text-secondary-foreground underline underline-offset-4"
                  >
                    Go to dashboard
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
