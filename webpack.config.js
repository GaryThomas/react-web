var path = require('path');

module.exports = {
    entry: './app/app.jsx',
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
