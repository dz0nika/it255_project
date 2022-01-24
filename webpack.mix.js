const mix = require('laravel-mix')
const path = require('path')
const webpack = require('webpack')
require('mix-tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'css', [require('postcss-import'), require('autoprefixer')])
  .tailwind()
  .alias({
    '@': path.resolve('resources/js'),
  })
  .webpackConfig({
    output: {
      //publicPath: `${process.env.APP_URL}/assets/admin/`,
      chunkFilename: 'js/[name].js?id=[chunkhash]',
    },
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
    ],
  })

if (mix.inProduction()) {
  mix.version()
}
