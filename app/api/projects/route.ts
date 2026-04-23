import { NextResponse } from "next/server";

type ProjectStatus = "planned" | "active" | "completed";
type ProjectPriority = "low" | "medium" | "high" | "urgent";

type Project = {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  owner: string;
  dueDate: string | null;
  priority: ProjectPriority;
  createdAt: string;
  updatedAt: string;
};

const projects: Project[] = [
  {
    id: "proj_001",
    name: "Website relaunch",
    description:
      "Refresh the public marketing site, improve messaging clarity, and ship performance upgrades.",
    status: "active",
    owner: "Maya Chen",
    dueDate: "2026-05-12",
    priority: "high",
    createdAt: new Date("2026-04-01T09:00:00.000Z").toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "proj_002",
    name: "Investor data room",
    description:
      "Organize fundraising materials, financial updates, and diligence requests for active conversations.",
    status: "planned",
    owner: "Daniel Kim",
    dueDate: "2026-05-25",
    priority: "urgent",
    createdAt: new Date("2026-04-03T13:30:00.000Z").toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

function isProjectStatus(value: unknown): value is ProjectStatus {
  return (
    value === "planned" ||
    value === "active" ||
    value === "completed"
  );
}

function isProjectPriority(value: unknown): value is ProjectPriority {
  return (
    value === "low" ||
    value === "medium" ||
    value === "high" ||
    value === "urgent"
  );
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidDueDate(value: unknown): value is string | null | undefined {
  if (value === undefined || value === null || value === "") {
    return true;
  }

  return (
    typeof value === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value))
  );
}

function serializeProject(project: Project) {
  return project;
}

function createValidationError(message: string, details?: Record<string, string>) {
  return NextResponse.json(
    {
      error: message,
      details,
    },
    { status: 400 },
  );
}

export async function GET() {
  return NextResponse.json({
    projects: projects.map(serializeProject),
    meta: {
      storage: "in-memory",
      note: "Temporary mock storage until repository-backed persistence is added.",
      count: projects.length,
    },
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return createValidationError("Request body must be valid JSON.");
  }

  if (!body || typeof body !== "object") {
    return createValidationError("Project payload is required.");
  }

  const { name, description, status, owner, dueDate, priority } = body as Record<
    string,
    unknown
  >;

  const validationErrors: Record<string, string> = {};

  if (!isNonEmptyString(name)) {
    validationErrors.name = "name is required.";
  }

  if (!isNonEmptyString(description)) {
    validationErrors.description = "description is required.";
  }

  if (!isProjectStatus(status)) {
    validationErrors.status =
      "status must be one of: planned, active, completed.";
  }

  if (!isNonEmptyString(owner)) {
    validationErrors.owner = "owner is required.";
  }

  if (!isValidDueDate(dueDate)) {
    validationErrors.dueDate = "dueDate must be a valid YYYY-MM-DD string or null.";
  }

  if (!isProjectPriority(priority)) {
    validationErrors.priority =
      "priority must be one of: low, medium, high, urgent.";
  }

  if (Object.keys(validationErrors).length > 0) {
    return createValidationError("Invalid project payload.", validationErrors);
  }

  const now = new Date().toISOString();

  const project: Project = {
    id: `proj_${Date.now()}`,
    name: name.trim(),
    description: description.trim(),
    status,
    owner: owner.trim(),
    dueDate: typeof dueDate === "string" && dueDate.length > 0 ? dueDate : null,
    priority,
    createdAt: now,
    updatedAt: now,
  };

  projects.unshift(project);

  return NextResponse.json(
    {
      project: serializeProject(project),
      meta: {
        storage: "in-memory",
      },
    },
    { status: 201 },
  );
}