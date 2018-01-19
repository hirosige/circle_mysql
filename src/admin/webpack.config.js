const path = require('path');
// const webpack = require('webpack');

module.exports = [
  {
    context: path.resolve("./app/src"),
    entry: {
      main: "./index.jsx"
    },
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: '',
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {}
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {}
          }
        }
      ]
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    // plugins: [
    //   /* use jQuery as Global */
    //   new webpack.ProvidePlugin({
    //     jQuery: "jquery",
    //     $: "jquery"
    //   })
    // ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
];
