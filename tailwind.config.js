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
