/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '700px',
    },
    colors: {
      main: 'rgb(0, 0, 127)',
      link: '#1971C2',
      gray: {
        text: '#4E5968',
        span: '#B7BABE',
        bg: '#f2f4f6',
      },
    },
    extend: {},
  },
  plugins: [],
};
