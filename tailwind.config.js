/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        /* Canvas ramp — four steps of near-black instead of one flat gray.
           Depth comes from these, not from drop shadows. */
        canvas: "#0A0C0E",
        surface: "#101316",
        "surface-2": "#171B20",
        line: "#232930",
        "line-strong": "#333C45",

        /* Text ramp */
        fg: "#E8ECF1",
        "fg-muted": "#98A4B0",
        "fg-dim": "#65717D",

        /* Signal colours. accent is reserved for state + interaction,
           never for decoration. */
        accent: "#4FDD93",
        "accent-dim": "#2C8E5D",
        /* named 'warn', not 'amber', so Tailwind's amber-* scale survives */
        warn: "#E3B341",
        danger: "#F0616D",
        info: "#5BA9F7",

        /* Legacy aliases, retuned so older components stay coherent */
        primary: "#4FDD93",
        gray: "#98A4B0",
        background: "#0A0C0E",
        white: "#E8ECF1",
      },
      fontFamily: {
        /* Display/body carries the prose; mono is demoted to data + labels */
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "'JetBrains Mono'", "monospace"],
        jet: ["'JetBrains Mono'", "var(--font-geist-mono)", "monospace"],
        fira: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        label: ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.12em" }],
        display: ["clamp(2.5rem, 6vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-sm": ["clamp(1.875rem, 4vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      backgroundImage: {
        /* Faint engineering grid for control-room surfaces */
        grid: `linear-gradient(to right, #232930 1px, transparent 1px),
               linear-gradient(to bottom, #232930 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: "72px 72px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        flow: {
          to: { strokeDashoffset: "-24" },
        },
        riseIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        /* Pulses a few times to catch the eye on arrival, then rests.
           An indefinitely animating element is noise, not signal. */
        "pulse-dot": "pulseDot 2.4s ease-in-out 4",
        flow: "flow 1s linear infinite",
        "rise-in": "riseIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
}
