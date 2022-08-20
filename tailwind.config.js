module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        backblack: {
          DEFAULT: '#161616',
        },
        linkBack: {
          DEFAULT: '#c8deec22',
        },
        linkBlue: {
          DEFAULT: '#366183',
        },
        twitterBlue: {
          DEFAULT: '#00C7FF',
        },
        twitterHover: {
          DEFAULT: '#1A8CD8',
        },
      },
      animation: {
        blob: 'blob 2s',
      },
      keyframes: {
        blob: {
          '0%': {
            opacity: '0%',
          },
          '33%': {
            opacity: '25%',
          },
          '66%': {
            opacity: '75%',
          },
          '100%': {
            opacity: '1000%',
          },
        },
      },
      fontFamily: {
        poppins: "'Nunito', sans-serif",
        fira: "'Nunito', sans-serif",
      },
    },
  },
  plugins: [],
};
