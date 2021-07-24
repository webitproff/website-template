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
        'site-image': 'url(https://source.unsplash.com/5f0QAmE7I3Q)',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
