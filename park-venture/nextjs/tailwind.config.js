module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    extend: {
      backgroundImage: theme => ({
        'about-me': "url(/undraw_Fall_is_coming.svg)",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
