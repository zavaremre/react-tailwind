module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        xl: "465px",
      },
    },
    extend: {
      colors: {
        gold: "#ffdaa4",
        melrose: "#b6a4ff",
        anakiwa: "#a4deff",
        rose: "#ffa4da",
        black: {
          50: "#737373",
          100: "#666666",
          200: "#595959",
          300: "#4d4d4d",
          400: "#404040",
          500: "#333333",
          600: "#262626",
          700: "#1a1a1a",
          800: "#0d0d0d",
          900: "#000000",
        },
      },
      boxShadow: {
        custom: "0 0 20px #00000017;",
      },
      animation: {
        ping: "ping 1300ms linear infinite",
      },
    },
  },
  plugins: [],
};
