# Design System: Health Tracker Dashboard
**Project ID:** 4723060439879161280

## 1. Visual Theme & Atmosphere
The design embodies a **Professional Health Monitor** aesthetic—clean, trustworthy, and data-centric. It balances a utilitarian medical feel with a modern, consumer-friendly interface. The interface is **"Card-Forward,"** utilizing distinct content containers to organize complex health data into digestible chunks. It supports a robust **Dark Mode** that feels deep and immersive, using navy-tinted blacks rather than true black for a softer, more premium look. The overall mood is **Calm and Precise**, essential for a health application.

## 2. Color Palette & Roles
### Primary Brand
*   **Bright Royal Blue (#135bec):** Used for primary actions (buttons), active states, and key highlights. It conveys trust and energy.

### Backgrounds & Surfaces
*   **Deep Navy Night (#101622):** The main background color in dark mode, providing a rich, high-contrast canvas.
*   **Dark Blue-Grey Surface (#1c263a):** Used for cards and elevated containers in dark mode, distinguishing them from the background.
*   **Very Pale Grey (#f6f6f8):** The main background in light mode, clean and airy.
*   **Pure White (#ffffff):** Card backgrounds in light mode.

### Text & Neutral
*   **Dark Slate (#0f172a):** Primary text in light mode (e.g., "slate-900").
*   **Medium Slate (#64748b):** Secondary text, labels, and metadata (e.g., "slate-500").
*   **Light Slate (#94a3b8):** Placeholder text or subtle details (e.g., "slate-400").
*   **White (#ffffff):** Primary text in dark mode.

### Functional Status
*   **Emerald Green (#10b981):** specific shade varies (e.g., `emerald-500`), used for positive trends, improvement indicators, and success states.
*   **Vibrant Orange (#ea580c):** specific shade varies (e.g., `orange-600`), used for severe records or warnings ("Severe Migraine").
*   **Calm Blue (#2563eb):** specific shade varies (e.g., `blue-600`), used for informational tags ("Mild Pressure").

## 3. Typography Rules
**Font Family:** `Inter`, sans-serif.

*   **Headings:** Thick and bold (`font-extrabold`, `font-bold`). Used for statistics ("3") and section titles ("Recent Trends").
*   **Body:** Clean and legible (`font-medium` or `font-normal`).
*   **Labels:** often Uppercase, smaller size (`text-xs` or `text-[10px]`), and tracking-wider for clarity (e.g., "INCIDENTS THIS WEEK", "INTENSITY").
*   **Data:** Large, clear numerals are a focal point.

## 4. Component Stylings
*   **Buttons (Primary):** Pill-shaped or generously rounded (`rounded-xl` or `rounded-full`). filled with **Bright Royal Blue**, often featuring a colored shadow (`shadow-md` or `shadow-lg shadow-primary/20`) to create a "floating" effect.
*   **Cards/Containers:** "Standard Rounded" corners (`rounded-xl`). They have a subtle stroke (`border border-slate-200` or `dark:border-slate-800`) and a soft shadow (`shadow-sm`) to lift them from the background.
*   **Tags/Badges:** Softly colored backgrounds (e.g., `bg-emerald-100`) with matching dark text (`text-emerald-600`). Fully rounded or pill-shaped (`rounded-lg` or `rounded-full`).
*   **Icons:** Often contained in rounded squares (`rounded-lg`) with a pastel background in light mode or translucent background in dark mode.

## 5. Layout Principles
*   **Mobile-First Construction:** The layout is constrained to a maximum width (e.g., `max-w-[480px]`) centered on screen, imitating a mobile app environment even on desktop.
*   **Padding & Spacing:** Generous internal padding in cards (`p-4` or `p-5`) creates a spacious feel. Components are separated by consistent gaps (`gap-3` or `gap-4`).
*   **Edge-to-Edge feel:** Sections often span the full width of the container with padding applied internally to content.
*   **Glassmorphism:** Sticky navigation elements (top bar, bottom bar) use `backdrop-blur-md` or `xl` with high transparency, adding a modern, layered depth.
