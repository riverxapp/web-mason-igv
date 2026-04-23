Unified scope document:
- intent_summary: Plan an end-to-end Next.js project management tool with landing, dashboard, API, and app shell coverage.
- requested_outcome: A concise, deterministic multi-file implementation plan that covers the core user journey from entry page to projects UI and API integration.
- in_scope: Cross-file route validation, navigation consistency, API path alignment, app-router layout integration, and end-to-end behavior assumptions for the project management surface.
- out_of_scope: Actual source code changes, unrelated landing-page content rewrites, backend architecture beyond the app router, and broad refactors.
- constraints: Preserve unrelated logic, keep the plan file-scoped and deterministic, respect App Router conventions, and avoid speculative extra files.
- assumptions: The repository is App Router-based and the listed paths are the primary surfaces needed for the tool.
- affected_surfaces: app/page.tsx, app/dashboard/projects/page.tsx, app/api/projects/route.ts, app/layout.tsx.
- target_file_candidates:
  1. app/layout.tsx — app-wide shell and navigation integrity.
  2. app/page.tsx — entry route and handoff into dashboard.
  3. app/dashboard/projects/page.tsx — main projects interface.
  4. app/api/projects/route.ts — project list/create API surface.
- risk_notes: Route mismatch between page links and API endpoints, App Router client/server boundary issues, and navigation elements that point to missing anchors or pages.
- success_checks: Route targets are consistent, navigation points to valid destinations, layout supports the intended shell, and the end-to-end journey is coherent across entry, dashboard, and API surfaces.

Task 5: validate cross-file integration across app/page.tsx, app/dashboard/projects/page.tsx, app/api/projects/route.ts, and app/layout.tsx by checking navigation links, route consistency, and basic end-to-end behavior assumptions for Next.js app router.
