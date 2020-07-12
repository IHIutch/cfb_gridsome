module.exports = {
  purge: {
    enable: process.env.NODE_ENV === "production",
    content: ["./src/**/*.vue"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
