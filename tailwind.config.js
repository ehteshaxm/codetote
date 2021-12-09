module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backblack: {
          DEFAULT: "#161616",
        },
        linkBack: {
          DEFAULT: "#c8deec22",
        },
        linkBlue: {
          DEFAULT: "#366183",
        },
      },
      animation: {
        blob: "blob 2s",
      },
      keyframes: {
        blob: {
          "0%": {
            opacity: "0%",
          },
          "33%": {
            opacity: "25%",
          },
          "66%": {
            opacity: "75%",
          },
          "100%": {
            opacity: "1000%",
          },
        },
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        fira: "'Fira Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
