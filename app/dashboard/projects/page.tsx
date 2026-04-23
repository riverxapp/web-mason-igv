"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ApiProjectStatus = "planned" | "active" | "completed";
type ProjectStatus = "Planning" | "In progress" | "Review" | "Complete";
type ViewState = "list" | "create" | "details" | "edit";

type ApiProject = {
  id: string;
  name: string;
  client?: string;
  description?: string;
  status: ApiProjectStatus;
  owner?: string;
  dueDate?: string;
  priority?: string;
  updatedAt?: string;
  createdAt?: string;
};

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

type CreateProjectForm = {
  name: string;
  client: string;
  owner: string;
  dueDate: string;
  summary: string;
  status: ApiProjectStatus;
};

const fallbackProjects: Project[] = [
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

const defaultFormState: CreateProjectForm = {
  name: "",
  client: "",
  owner: "",
  dueDate: "",
  summary: "",
  status: "planned",
};

const statusStyles: Record<ProjectStatus, string> = {
  Planning: "bg-slate-100 text-slate-700",
  "In progress": "bg-blue-100 text-blue-700",
  Review: "bg-amber-100 text-amber-700",
  Complete: "bg-emerald-100 text-emerald-700",
};

function mapApiStatusToUi(status: ApiProjectStatus): ProjectStatus {
  switch (status) {
    case "completed":
      return "Complete";
    case "active":
      return "In progress";
    case "planned":
    default:
      return "Planning";
  }
}

function estimateProgress(status: ApiProjectStatus) {
  switch (status) {
    case "completed":
      return 100;
    case "active":
      return 60;
    case "planned":
    default:
      return 15;
  }
}

function mapApiProjectToUi(project: ApiProject): Project {
  return {
    id: project.id,
    name: project.name,
    client: project.client?.trim() || "Unassigned client",
    owner: project.owner?.trim() || "Unassigned owner",
    status: mapApiStatusToUi(project.status),
    dueDate: project.dueDate || "No due date",
    progress: estimateProgress(project.status),
    summary: project.description?.trim() || "No project summary provided yet.",
  };
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [viewState, setViewState] = useState<ViewState>("list");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [usingFallbackData, setUsingFallbackData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [createForm, setCreateForm] = useState<CreateProjectForm>(defaultFormState);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? null,
    [projects, selectedId],
  );

  const emptyState = !loading && projects.length === 0;

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      setError(null);
      setUsingFallbackData(false);

      try {
        const response = await fetch("/api/projects", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load projects.");
        }

        const data = (await response.json()) as { projects?: ApiProject[] };
        const nextProjects = Array.isArray(data.projects)
          ? data.projects.map(mapApiProjectToUi)
          : [];

        setProjects(nextProjects);
        setSelectedId((current) => current ?? nextProjects[0]?.id ?? null);
      } catch {
        setProjects(fallbackProjects);
        setSelectedId((current) => current ?? fallbackProjects[0]?.id ?? null);
        setUsingFallbackData(true);
        setError(
          "We could not load live project data, so a starter workspace is shown instead.",
        );
      } finally {
        setLoading(false);
      }
    }

    void loadProjects();
  }, []);

  function handleSelectProject(project: Project) {
    setSelectedId(project.id);
    setViewState("details");
    setError(null);
    setFormError(null);
  }

  function handleEditProject() {
    if (!selectedProject) return;
    setViewState("edit");
    setError(null);
  }

  function handleCreateClick() {
    setCreateForm({
      ...defaultFormState,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    setFormError(null);
    setError(null);
    setViewState("create");
  }

  function handleChangeForm<K extends keyof CreateProjectForm>(
    field: K,
    value: CreateProjectForm[K],
  ) {
    setCreateForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmitCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setError(null);

    if (!createForm.name.trim() || !createForm.client.trim()) {
      setFormError("Project name and client are required.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: createForm.name.trim(),
          client: createForm.client.trim(),
          owner: createForm.owner.trim() || "Unassigned owner",
          dueDate: createForm.dueDate,
          description: createForm.summary.trim(),
          status: createForm.status,
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        project?: ApiProject;
      };

      if (!response.ok || !data.project) {
        throw new Error(data.error || "Unable to create project.");
      }

      const nextProject = mapApiProjectToUi(data.project);

      setProjects((current) => [nextProject, ...current]);
      setSelectedId(nextProject.id);
      setViewState("details");
      setUsingFallbackData(false);
      setCreateForm(defaultFormState);
    } catch (submissionError) {
      setFormError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to create project.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleCompleteEdit() {
    if (!selectedProject) return;

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
    setError(null);
  }

  function handleSimulateError() {
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
            onClick={handleCreateClick}
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

      {usingFallbackData ? (
        <div className="mb-6 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Demo data is currently shown because the live API could not be reached.
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-foreground">Projects</h2>
              <p className="text-sm text-muted-foreground">
                Review current delivery work and choose a project to inspect.
              </p>
            </div>
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
              className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-4 text-sm text-destructive"
            >
              {error}
            </div>
          ) : null}

          {emptyState ? (
            <div className="rounded-md border border-dashed border-border px-4 py-10 text-center">
              <p className="text-sm font-medium text-foreground">No projects yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Create your first project to start tracking delivery milestones.
              </p>
            </div>
          ) : !loading ? (
            <div className="space-y-3" role="list" aria-label="Project list">
              {projects.map((project) => {
                const isActive = project.id === selectedId;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => handleSelectProject(project)}
                    aria-pressed={isActive}
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
          ) : null}
        </div>

        <aside className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold text-foreground">
              {viewState === "create" ? "Create project" : "Project details"}
            </h2>
            {viewState !== "create" ? (
              <button
                type="button"
                onClick={handleEditProject}
                disabled={!selectedProject}
                className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                Edit
              </button>
            ) : null}
          </div>

          {viewState === "create" ? (
            <form className="space-y-4" onSubmit={handleSubmitCreate}>
              <div className="space-y-2">
                <label
                  htmlFor="project-name"
                  className="text-sm font-medium text-foreground"
                >
                  Project name
                </label>
                <input
                  id="project-name"
                  name="name"
                  value={createForm.name}
                  onChange={(event) => handleChangeForm("name", event.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-ring"
                  placeholder="Q3 onboarding redesign"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="project-client"
                    className="text-sm font-medium text-foreground"
                  >
                    Client
                  </label>
                  <input
                    id="project-client"
                    name="client"
                    value={createForm.client}
                    onChange={(event) => handleChangeForm("client", event.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-ring"
                    placeholder="Northstar Group"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="project-owner"
                    className="text-sm font-medium text-foreground"
                  >
                    Owner
                  </label>
                  <input
                    id="project-owner"
                    name="owner"
                    value={createForm.owner}
                    onChange={(event) => handleChangeForm("owner", event.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-ring"
                    placeholder="Maya"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="project-status"
                    className="text-sm font-medium text-foreground"
                  >
                    Status
                  </label>
                  <select
                    id="project-status"
                    name="status"
                    value={createForm.status}
                    onChange={(event) =>
                      handleChangeForm(
                        "status",
                        event.target.value as CreateProjectForm["status"],
                      )
                    }
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-ring"
                  >
                    <option value="planned">Planned</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="project-due-date"
                    className="text-sm font-medium text-foreground"
                  >
                    Due date
                  </label>
                  <input
                    id="project-due-date"
                    name="dueDate"
                    type="date"
                    value={createForm.dueDate}
                    onChange={(event) => handleChangeForm("dueDate", event.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="project-summary"
                  className="text-sm font-medium text-foreground"
                >
                  Summary
                </label>
                <textarea
                  id="project-summary"
                  name="summary"
                  value={createForm.summary}
                  onChange={(event) => handleChangeForm("summary", event.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-ring"
                  placeholder="Scope, milestones, and rollout notes."
                />
              </div>

              {formError ? (
                <div
                  role="alert"
                  className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  {formError}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Creating…" : "Save project"}
                </button>
                <button
                  type="button"
                  onClick={() => setViewState(selectedProject ? "details" : "list")}
                  className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : selectedProject ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {viewState === "edit" ? "Editing" : "Viewing"}
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
                <div aria-hidden="true" className="h-2 rounded-full bg-secondary">
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