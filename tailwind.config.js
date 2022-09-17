module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        twitterBlue: {
          DEFAULT: '#00C7FF',
        },
        twitterHover: {
          DEFAULT: '#1A8CD8',
        },
        lightBlack: {
          DEFAULT: '#1D1D1B',
        },
        darkBlack: {
          DEFAULT: '#0D0D0D',
        },
      },
      fontFamily: {
        poppins: "'Nunito', sans-serif",
      },
    },
  },
  plugins: [],
};
