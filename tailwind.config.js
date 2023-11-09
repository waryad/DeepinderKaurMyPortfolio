// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-gradient': 'linear-gradient(90deg, #b0b0b0 0%, #808080 100%)',
      },
    },
  },
  plugins: [
    require('postcss-nesting'),
    // Add your Tailwind CSS plugins here, if any
  ],
};
