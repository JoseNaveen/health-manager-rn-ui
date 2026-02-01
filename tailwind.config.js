/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "surface-dark": "#1c263a",
        slate: {
          900: "#0f172a",
          500: "#64748b",
          400: "#94a3b8",
        },
        emerald: {
          500: "#10b981",
        },
        orange: {
          600: "#ea580c",
        },
        blue: {
          600: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["Inter_400Regular", "Inter_500Medium", "Inter_600SemiBold", "Inter_700Bold"],
        display: ["Inter_700Bold"],
      },
      borderRadius: {
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};