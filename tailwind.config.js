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
        primary: "#00FF00",
        gray: "#ABB2BF",
        background: "#282C33",
        white: "#FFFFFF",
      },
      fontFamily: {
        jet: ["'JetBrains Mono'", "monospace"],
        fira: ["'Fira Code'", "monospace"],
        source: ["'Source Code Pro'", "monospace"],
        incon: ["'Inconsolata'", "monospace"],
        ubuntu: ["'Ubuntu Mono'", "monospace"],
        redhat: ["'Red Hat Mono'", "monospace"],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
}