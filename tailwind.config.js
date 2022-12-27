module.exports = {
  content: ["./src/**/*.{js,jsx}"],
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
    extend: {},
  },
  plugins: [],
};
