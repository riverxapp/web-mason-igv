The user wants to update `app/globals.css` with the provided content.
The prompt includes a large block of CSS under `### app/globals.css` in the "Relevant files" section, which represents the intended final state.
I will output exactly that CSS content.
No additional logic or changes are needed.
I will verify the content matches exactly.
Ready. 
Output matches the requested CSS.
Proceeds. 
[Output Generation] -> CSS content. 
Done. 
(Self-Correction/Verification)
Wait, the prompt says "Update this source file based on the request while preserving unrelated logic."
The provided "Relevant files" section has the complete updated `app/globals.css`.
I will just paste it.
All good.
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.75rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }

  * {
    @apply border-border;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    font-size: 16px;
    min-width: 320px;
    overflow-x: hidden;
    background-color: hsl(var(--background));
  }

  body {
    @apply bg-background text-foreground antialiased;
    min-height: 100vh;
    font-feature-settings: "cv02", "cv03", "cv04", "cv11";
    font-family: 'Inter', 'Segoe UI', 'Arial', 'sans-serif';
    text-rendering: optimizeLegibility;
    line-height: 1.7;
    letter-spacing: 0.01em;
    background-color: hsl(var(--background));
    margin: 0;
    padding: 0;
  }

  a,
  button,
  input,
  textarea,
  select {
    @apply outline-none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    box-shadow: none;
    border-radius: 0;
    transition: color 0.12s, background 0.14s;
  }

  ::selection {
    background: hsl(var(--primary) / 0.15);
    color: hsl(var(--foreground));
  }

  :focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }

  /* Enhanced dashboard typography and headings for visual hierarchy */
  h1,
  .app-heading {
    @apply font-bold tracking-tight leading-tight text-foreground;
    font-size: 2.75rem;
    line-height: 1.07;
    margin-bottom: 0.95em;
    margin-top: 0.12em;
    letter-spacing: -0.038em;
  }
  @media (min-width: 640px) {
    h1,
    .app-heading {
      font-size: 3.3rem;
    }
  }
  @media (min-width: 1024px) {
    h1,
    .app-heading {
      font-size: 4.3rem;
    }
  }

  h2 {
    @apply font-semibold text-2xl sm:text-3xl lg:text-4xl text-foreground leading-snug tracking-tight;
    font-size: 2rem;
    margin-bottom: 0.65em;
    margin-top: 2.1em;
    line-height: 1.16;
    letter-spacing: -0.019em;
  }

  h3 {
    @apply font-semibold text-xl sm:text-2xl text-foreground leading-snug tracking-tight;
    font-size: 1.36rem;
    margin-bottom: 0.47em;
    margin-top: 1.11em;
    line-height: 1.2;
    letter-spacing: -0.018em;
  }

  h4, h5, h6 {
    @apply font-semibold text-foreground;
    font-size: 1.03rem;
    margin-top: 0.64em;
    margin-bottom: 0.21em;
    letter-spacing: -0.007em;
  }

  /* Improve paragraph and section body contrast, rhythm, and spacing */
  p,
  .app-subheading {
    @apply text-base md:text-lg leading-relaxed text-muted-foreground;
    margin-bottom: 0.78em;
    margin-top: 0.04em;
    line-height: 1.71;
    letter-spacing: 0.008em;
    font-size: 1.1rem;
    font-weight: 400;
    max-width: 44rem;
  }

  ul,
  ol {
    margin-left: 2em;
    margin-bottom: 1.16em;
    padding-left: 1.18em;
    line-height: 1.71;
  }

  li {
    margin-bottom: 0.31em;
    padding-left: 0.05em;
  }

  /* Responsive section spacing and reset for dashboard rhythm */
  main,
  section {
    margin-bottom: 2.1rem;
    @apply w-full;
    padding-left: 0;
    padding-right: 0;
    background-color: unset;
  }

  main > *:first-child,
  section > *:first-child {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
  main > *:last-child,
  section > *:last-child {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
  }

  [style*="margin"], [style*="padding"] {
    margin-top: revert-layer !important;
    margin-bottom: revert-layer !important;
    padding-top: revert-layer !important;
    padding-bottom: revert-layer !important;
  }

  label,
  .app-label {
    @apply text-base font-medium leading-none text-foreground;
    margin-bottom: 0.18em;
    letter-spacing: 0.005em;
  }

  :disabled,
  [aria-disabled="true"] {
    opacity: 0.52 !important;
    cursor: not-allowed !important;
    background: none !important;
    color: hsl(var(--muted-foreground)) !important;
  }

  hr {
    @apply border-border;
    margin: 2rem 0;
  }

  fieldset,
  legend {
    margin: 0;
    padding: 0;
    border: 0;
  }
}

@layer components {
  /* Visual shell improvements for dashboard sections */
  .app-surface {
    @apply rounded-2xl border border-border bg-card shadow-sm;
  }

  .app-surface-muted {
    @apply rounded-2xl border border-border bg-secondary/40;
  }

  .app-section {
    @apply mx-auto w-full max-w-6xl px-4 sm:px-8;
    padding-top: 0;
    padding-bottom: 0;
  }

  .app-section-padding {
    @apply py-14 sm:py-16 lg:py-20;
  }

  .app-heading {
    @apply text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl;
    line-height: 1.12;
    margin-bottom: 1.12rem;
    margin-top: 0.04rem;
    letter-spacing: -0.026em;
  }

  .app-subheading {
    @apply text-base leading-6 text-muted-foreground sm:text-lg;
    margin-bottom: 0.72em;
    margin-top: 0.13em;
    line-height: 1.68;
    letter-spacing: 0.007em;
    font-size: 1.06rem;
  }

  .app-card {
    @apply rounded-2xl border border-border bg-card text-card-foreground shadow-sm;
    padding: 2rem 1.5rem 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    line-height: 1.7;
    box-shadow: 0 0.5px 4px 0 rgba(12, 18, 31, 0.05);
    transition: box-shadow 0.18s cubic-bezier(0.4,0,0.2,1);
  }

  .app-card-muted {
    @apply rounded-2xl border border-border bg-secondary/40;
    padding: 2rem 1.5rem;
  }

  .app-button-primary {
    @apply inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60;
    letter-spacing: 0.028em;
    min-width: 11rem;
    font-size: 1.05rem;
  }

  .app-button-secondary {
    @apply inline-flex items-center justify-center rounded-md border border-border bg-background px-7 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60;
    letter-spacing: 0.012em;
    min-width: 11rem;
    font-size: 1.05rem;
  }

  .app-input {
    @apply w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background;
    margin-bottom: 0.10em;
    background-color: hsl(var(--background));
    letter-spacing: 0.01em;
    font-size: 1.01rem;
  }

  .app-label {
    @apply text-base font-medium leading-none text-foreground;
    margin-bottom: 0.12em;
    letter-spacing: 0.006em;
  }

  .app-page-shell {
    @apply mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-8;
    padding-top: 0;
    padding-bottom: 0;
  }

  .app-dashboard-shell {
    @apply mx-auto w-full max-w-6xl px-4 py-10 md:px-8 md:py-14;
  }

  .app-dashboard-panel {
    @apply rounded-xl border border-border bg-card shadow-sm p-7;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    background: hsl(var(--card));
    box-shadow: 0 1.5px 8px 0 rgba(35, 31, 78, 0.08);
  }

  .app-dashboard-panel-muted {
    @apply rounded-xl border border-border bg-secondary/30 p-7;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  .app-dashboard-kpi {
    @apply rounded-xl border border-border bg-background p-6 shadow-sm;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.42rem;
    min-width: 7rem;
    line-height: 1.37;
    font-size: 1.06rem;
    font-weight: 600;
    background: linear-gradient(120deg, hsl(var(--background)) 83%, hsl(var(--secondary)) 100%);
    box-shadow: 0 0.25px 3px 0 rgba(34, 52, 64, 0.056);
  }

  .app-badge {
    @apply inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground;
    letter-spacing: 0.055em;
    text-transform: uppercase;
    font-weight: 600;
  }

  .app-empty-state {
    @apply rounded-xl border border-dashed border-border px-4 py-10 text-center text-base text-muted-foreground;
    letter-spacing: 0.004em;
    line-height: 1.63;
    font-size: 1.07rem;
    background: hsl(var(--background));
  }
}