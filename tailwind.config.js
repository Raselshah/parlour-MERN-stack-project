module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F63E7B",
          secondary: "#111430",
          accent: "#fff8f5",
          neutral: "#7a7a7a",
          "base-100": "#ffffff",
          "second-bg": "#E5E5E5",
          "second-line-bg": "#F5F6FA",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
