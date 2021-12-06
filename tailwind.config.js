module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
       '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
       'quizOptionlist': 'repeat(1, minmax(250px, 400px))',
       'quizzesList': 'repeat(auto-fill, minmax(200px, 420px))'
      },
      minHeight: {
        'quizOptionHeight': '45px'
      },
      maxWidth: {
        'quizOptionMaxWidth': '500px',
      },
      minWidth: {
        'quizOptionMinWidth': '200px'
      },
      boxShadow: {
        'quizOptionBoxShadow': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
      },
      backgroundImage: {
        'btn-pink-gradient': 'linear-gradient(90deg,hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
