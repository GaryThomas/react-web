var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/foundation.min.js',
      './app/app.jsx',
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
      })
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      modules: [
        __dirname,
        'node_modules'
      ],
      alias: {
        Components: path.resolve(__dirname, 'app/components'),
        Api: path.resolve(__dirname, 'app/api'),
        Styles: path.resolve(__dirname, 'app/styles'),
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          },
          test: /\.jsx$/,
          exclude: /(node_modules|bower_components)/,
          include: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'components'),
          ],
        }
      ]
    }
};
