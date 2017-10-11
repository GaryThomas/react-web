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
        Greeter: 'app/components/Greeter.jsx',
        GreeterMessage: 'app/components/GreeterMessage.jsx',
        GreeterForm: 'app/components/GreeterForm.jsx',
      },
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
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
