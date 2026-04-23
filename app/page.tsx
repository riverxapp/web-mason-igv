import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <section className="border-t border-border bg-background">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 md:px-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Agency project management
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Keep client work, deliverables, and team progress in one place.
              </h2>
              <p className="text-base leading-7 text-muted-foreground md:text-lg">
                Track campaigns, assign tasks, and monitor deadlines with a
                workflow that stays organized from kickoff to delivery.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:w-[28rem]">
              {[
                "Project timelines",
                "Task ownership",
                "Client approvals",
                "Team visibility",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-card p-4 text-sm font-medium text-card-foreground shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
