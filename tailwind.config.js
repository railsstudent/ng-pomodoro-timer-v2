module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
