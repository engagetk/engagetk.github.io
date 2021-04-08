module.exports = () => ({
    //plugins: [require("tailwindcss")(`./src/css/tailwind.css`)],
    // plugins: {
    //     tailwindcss: {},
    //     autoprefixer: {},
    //   },
      plugins: [
        require('tailwindcss')('./src/css/tailwind.css'),
        require('autoprefixer'),
      ]
  })