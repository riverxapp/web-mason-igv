import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  const projects = [
    {
      name: "Northstar Rebrand",
      client: "Northstar Labs",
      status: "In progress",
      due: "Fri",
    },
    {
      name: "Q2 Campaign Sprint",
      client: "BluePeak Health",
      status: "Review",
      due: "Tue",
    },
    {
      name: "Website Launch",
      client: "Harbor & Co.",
      status: "Planning",
      due: "Next week",
    },
  ];

  const pipeline = [
    { label: "Backlog", count: 12 },
    { label: "In progress", count: 8 },
    { label: "Client review", count: 4 },
    { label: "Done", count: 19 },
  ];

  const clients = [
    { name: "Northstar Labs", health: "Healthy", touchpoint: "Weekly sync today" },
    { name: "BluePeak Health", health: "At risk", touchpoint: "Approval pending" },
    { name: "Harbor & Co.", health: "Healthy", touchpoint: "Kickoff complete" },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <section className="border-t border-border bg-background">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="space-y-3">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Agency command center
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-card-foreground md:text-4xl">
                      Keep projects, tasks, and client updates moving in sync.
                    </h2>
                    <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                      Track deliverables, monitor approvals, and manage delivery
                      status across every active client engagement.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:min-w-64">
                    <div className="rounded-xl border border-border bg-background p-4">
                      <p className="text-sm text-muted-foreground">Active projects</p>
                      <p className="mt-2 text-2xl font-semibold text-foreground">12</p>
                    </div>
                    <div className="rounded-xl border border-border bg-background p-4">
                      <p className="text-sm text-muted-foreground">Due this week</p>
                      <p className="mt-2 text-2xl font-semibold text-foreground">5</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-card-foreground">Task pipeline</h3>
                <div className="mt-5 space-y-4">
                  {pipeline.map((stage) => (
                    <div key={stage.label} className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
                      <span className="text-sm font-medium text-foreground">{stage.label}</span>
                      <span className="text-sm text-muted-foreground">{stage.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-card-foreground">Project list</h3>
                <div className="mt-5 space-y-4">
                  {projects.map((project) => (
                    <div key={project.name} className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-4">
                      <div>
                        <p className="font-medium text-foreground">{project.name}</p>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{project.status}</p>
                        <p className="text-sm text-muted-foreground">Due {project.due}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-card-foreground">Client summary</h3>
                <div className="mt-5 space-y-4">
                  {clients.map((client) => (
                    <div key={client.name} className="rounded-xl border border-border bg-background px-4 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-medium text-foreground">{client.name}</p>
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                          {client.health}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{client.touchpoint}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
