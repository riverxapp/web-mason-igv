Unified scope document:
- intent_summary: Improve the main landing page and dashboard design for a Next.js project management app while preserving existing behavior.
- requested_outcome: A cleaner homepage and a more polished dashboard UI with consistent spacing, hierarchy, and visual treatment.
- in_scope: Update the landing page presentation, refine the dashboard layout and card styles, and adjust shared globals if needed for consistent visual polish.
- out_of_scope: Backend/API logic changes, route restructuring, unrelated refactors, and content rewrites beyond layout/design improvements.
- constraints: Preserve unrelated logic, keep changes file-scoped and deterministic, respect App Router boundaries, and avoid broad style churn.
- assumptions: The repository is App Router-based and the listed paths are the primary surfaces needed for the tool.
- affected_surfaces: app/page.tsx, app/dashboard/projects/page.tsx, app/globals.css.
- target_file_candidates:
  1. app/page.tsx — main landing page cleanup and visual hierarchy improvements.
  2. app/dashboard/projects/page.tsx — dashboard design polish and layout refinement.
  3. app/globals.css — shared styling adjustments to support the updated surfaces.
  4. app/layout.tsx — only if shell-level spacing/navigation needs alignment with the refreshed UI.
- risk_notes: Styling changes may need coordinated updates across shared layout and page-specific classes; ensure existing interactions and API behavior remain intact.
- success_checks: Homepage reads cleaner, dashboard feels more polished and usable, shared styling remains consistent, and navigation still reaches the projects workspace.

Task 5: validate cross-file integration across app/page.tsx, app/dashboard/projects/page.tsx, app/api/projects/route.ts, and app/layout.tsx by checking navigation links, route consistency, and basic end-to-end behavior assumptions for Next.js app router.
