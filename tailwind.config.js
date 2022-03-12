module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './dist/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
