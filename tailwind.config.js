/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#48DD7E",
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
}
      
    },
  },
  

  plugins: [],
}