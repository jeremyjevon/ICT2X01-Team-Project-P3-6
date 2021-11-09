module.exports = {
  mode: "jit",
  purge: ["./templates/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        colors: {
          primary: "#F59E0B",
          secondary: {
            100: "#E2E2D5",
            200: "#888883",
          },
        },
        body: ["Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
