import { NextResponse } from "next/server";

type ProjectStatus = "planned" | "active" | "completed";

type Project = {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  updatedAt: string;
};

const seedProjects: Project[] = [
  {
    id: "proj_001",
    name: "Website relaunch",
    client: "Northstar Co.",
    status: "active",
    updatedAt: new Date().toISOString(),
  },
];

function isProjectStatus(value: unknown): value is ProjectStatus {
  return value === "planned" || value === "active" || value === "completed";
}

function serializeProject(project: Project) {
  return project;
}

export async function GET() {
  return NextResponse.json({
    projects: seedProjects.map(serializeProject),
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Project payload is required." },
      { status: 400 },
    );
  }

  const { name, client, status } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof client !== "string" || !isProjectStatus(status)) {
    return NextResponse.json(
      { error: "name, client, and status are required." },
      { status: 400 },
    );
  }

  const project: Project = {
    id: `proj_${Date.now()}`,
    name,
    client,
    status,
    updatedAt: new Date().toISOString(),
  };

  seedProjects.unshift(project);

  return NextResponse.json({ project: serializeProject(project) }, { status: 201 });
}
