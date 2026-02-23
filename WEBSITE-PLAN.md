# Website Implementation Plan: The Holistic Care Clinic

## Objective
Build a complete, functional, and visually striking frontend website for "The Holistic Care Clinic" based on the established design system (warm, editorial, empathetic) and the Impeccable frontend-design guidelines.

## Tech Stack
*   **Framework:** Next.js (App Router) using React.
*   **Styling:** Tailwind CSS (configured with our specific OKLCH color tokens and modular typography).
*   **Icons:** Lucide React or similar lightweight SVG icons.
*   **Fonts:** 
    *   Display/Serif (e.g., Playfair Display or equivalent Google Font) for headings.
    *   Sans-serif (e.g., Lato or Inter's structural cousin, but distinct) for highly legible body copy.

## Design System Integration (Tailwind Configuration)
We will extend the Tailwind theme using the CSS variables gathered in `GEMINI.md`:
*   **Colors:**
    *   `background`: Warm off-white (`#FAF7F2`)
    *   `text-primary`: Warm black/dark brown (`#2B2824`)
    *   `text-secondary`: Muted brown (`#5C5346`)
    *   `accent-primary`: Muted green (`hsl(117.69, 10.92%, 53.33%)`)
    *   `accent-secondary`: Sand/beige (`#8A7961`)
    *   `footer-bg`: Deep charcoal/olive (`#1A1815`)
*   **Typography:** Implement fluid typography using `clamp()` for responsive, editorial sizing.

## Component & Page Structure
1.  **Global Layout (`app/layout.tsx`):**
    *   Implement a custom Navigation Bar (transparent blending into background, sticky on scroll).
    *   Integrate the existing `Footer.tsx` component.
2.  **Homepage (`app/page.tsx`):**
    *   Integrate the `HeroSection.tsx` component.
    *   Integrate the `ServiceGrid.tsx` component.
    *   **New Section: "About Us / The Clinic":** A brief, editorial-style section introducing the holistic philosophy and the "in-clinic or telehealth" hybrid model.
    *   **New Section: "Enquiries / Contact Form":** A beautifully designed, accessible form capturing the fields required in the original copy (Name, Phone, Email, Enquiry Type, Message).
3.  **Refinements (Impeccable Guidelines):**
    *   **Motion:** Add subtle, staggered fade-up animations on page load (using CSS transitions/keyframes, avoiding heavy JS libraries if possible, or Framer Motion for high-impact reveals).
    *   **Anti-Slop:** Ensure no glowing buttons, generic nested cards, or pure black/white hex codes are used. 

## Development Steps
1.  Initialize Next.js project in the current directory (`/Users/simonheikkila/dev/holistic`).
2.  Configure `tailwind.config.ts` and `globals.css` with the design tokens.
3.  Migrate the existing React components (`HeroSection`, `ServiceGrid`, `Footer`) into the Next.js structure.
4.  Build the Navigation and Contact Form sections.
5.  Assemble the homepage, apply global typography, and refine responsive behavior.
6.  Run a final visual polish pass to ensure the "editorial, empathetic" brand personality shines through.

---
*Awaiting user approval to begin implementation.*