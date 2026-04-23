"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ProjectStatus = "Planning" | "In progress" | "Review" | "Complete";

type Project = {
  id: string;
  name: string;
  client: string;
  owner: string;
  status: ProjectStatus;
  dueDate: string;
  progress: number;
  summary: string;
};

type ViewState = "list" | "create" | "details" | "edit";

const seedProjects: Project[] = [
  {
    id: "apollo-website",
    name: "Apollo Launch Website",
    client: "Apollo Labs",
    owner: "Maya",
    status: "In progress",
    dueDate: "2026-05-12",
    progress: 68,
    summary:
      "Design, content, and performance tuning for the product launch experience.",
  },
  {
    id: "northstar-crm",
    name: "Northstar CRM Revamp",
    client: "Northstar Group",
    owner: "Daniel",
    status: "Review",
    dueDate: "2026-05-28",
    progress: 84,
    summary:
      "Finalize CRM workflow updates, QA, and stakeholder feedback for handoff.",
  },
  {
    id: "horizon-portal",
    name: "Horizon Client Portal",
    client: "Horizon Studio",
    owner: "Priya",
    status: "Planning",
    dueDate: "2026-06-08",
    progress: 18,
    summary:
      "Discovery and scoping for a secure client portal with approvals and file sharing.",
  },
];

const statusStyles: Record<ProjectStatus, string> = {
  Planning: "bg-slate-100 text-slate-700",
  "In progress": "bg-blue-100 text-blue-700",
  Review: "bg-amber-100 text-amber-700",
  Complete: "bg-emerald-100 text-emerald-700",
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(seedProjects);
  const [viewState, setViewState] = useState<ViewState>("list");
  const [selectedId, setSelectedId] = useState<string | null>(seedProjects[0]?.id ?? null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? null,
    [projects, selectedId],
  );

  const emptyState = projects.length === 0;

  function handleCreateProject() {
    setError(null);
    setViewState("create");
    const newProject: Project = {
      id: `project-${Date.now()}`,
      name: "New client project",
      client: "Unassigned",
      owner: "Unassigned",
      status: "Planning",
      dueDate: new Date().toISOString().slice(0, 10),
      progress: 0,
      summary: "Draft scope, milestones, and delivery requirements.",
    };

    setLoading(true);
    window.setTimeout(() => {
      setProjects((current) => [newProject, ...current]);
      setSelectedId(newProject.id);
      setViewState("details");
      setLoading(false);
    }, 350);
  }

  function handleSelectProject(project: Project) {
    setSelectedId(project.id);
    setViewState("details");
    setError(null);
  }

  function handleEditProject() {
    if (!selectedProject) return;
    setViewState("edit");
  }

  function handleCompleteEdit() {
    if (!selectedProject) return;

    setLoading(true);
    setError(null);

    window.setTimeout(() => {
      setProjects((current) =>
        current.map((project) =>
          project.id === selectedProject.id
            ? {
                ...project,
                progress: Math.min(100, project.progress + 5),
                status: project.progress >= 95 ? "Complete" : "Review",
              }
            : project,
        ),
      );
      setViewState("details");
      setLoading(false);
    }, 250);
  }

  function handleSimulateError() {
    setLoading(false);
    setError("Unable to sync project data right now. Please try again.");
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:px-8 md:py-14">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Projects
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Project management workspace
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Track active client work, review delivery status, and move projects
            through planning, execution, and handoff.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCreateProject}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Create project
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Back to dashboard
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold text-foreground">Projects</h2>
            <button
              type="button"
              onClick={handleSimulateError}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Simulate error
            </button>
          </div>

          {loading ? (
            <div
              role="status"
              aria-live="polite"
              className="rounded-md border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground"
            >
              Loading project updates…
            </div>
          ) : error ? (
            <div
              role="alert"
              className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-4 text-sm text-destructive"
            >
              {error}
            </div>
          ) : emptyState ? (
            <div className="rounded-md border border-dashed border-border px-4 py-10 text-center">
              <p className="text-sm font-medium text-foreground">No projects yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Create your first project to start tracking delivery milestones.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {projects.map((project) => {
                const isActive = project.id === selectedId;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => handleSelectProject(project)}
                    className={`w-full rounded-lg border p-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-border bg-background hover:bg-accent/40"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-medium text-foreground">{project.name}</h3>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {project.client} · Owner: {project.owner}
                        </p>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {project.summary}
                        </p>
                      </div>

                      <div className="min-w-[7rem] text-sm text-muted-foreground sm:text-right">
                        <p>Due {project.dueDate}</p>
                        <p className="mt-1 font-medium text-foreground">
                          {project.progress}% complete
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <aside className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold text-foreground">Project details</h2>
            <button
              type="button"
              onClick={handleEditProject}
              disabled={!selectedProject}
              className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              Edit
            </button>
          </div>

          {selectedProject ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {viewState === "create"
                    ? "Creating"
                    : viewState === "edit"
                      ? "Editing"
                      : "Viewing"}
                </p>
                <h3 className="text-2xl font-semibold text-foreground">
                  {selectedProject.name}
                </h3>
                <p className="text-sm text-muted-foreground">{selectedProject.summary}</p>
              </div>

              <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                <div className="rounded-md border border-border p-3">
                  <dt className="text-muted-foreground">Client</dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {selectedProject.client}
                  </dd>
                </div>
                <div className="rounded-md border border-border p-3">
                  <dt className="text-muted-foreground">Owner</dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {selectedProject.owner}
                  </dd>
                </div>
                <div className="rounded-md border border-border p-3">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {selectedProject.status}
                  </dd>
                </div>
                <div className="rounded-md border border-border p-3">
                  <dt className="text-muted-foreground">Due date</dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {selectedProject.dueDate}
                  </dd>
                </div>
              </dl>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">
                    {selectedProject.progress}%
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  className="h-2 rounded-full bg-secondary"
                >
                  <div
                    className="h-2 rounded-full bg-primary transition-all"
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCompleteEdit}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  Save changes
                </button>
                <button
                  type="button"
                  onClick={() => setViewState("list")}
                  className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  Return to list
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-border px-4 py-10 text-center">
              <p className="text-sm font-medium text-foreground">No project selected</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Select a project to review details and updates.
              </p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}