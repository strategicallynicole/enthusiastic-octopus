const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const tailwind = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwind({
      config: ['./tailwind.config.js']
    }
    ),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
    purgecss({
      content: ['./public/**/*.html', './public/**/*.js', './public/**/*.jsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}