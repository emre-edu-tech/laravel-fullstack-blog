const mix = require('laravel-mix');

// Integrate Vuetify Loader and Case sensitive paths plugin
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/frontend.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/frontend.scss', 'public/css')
    .sourceMaps()
    .webpackConfig({
        devtool: 'source-map',
        plugins: [
            new VuetifyLoaderPlugin(),
            new CaseSensitivePathsPlugin(),
        ]
    });
