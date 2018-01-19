module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha'],

    files: [
      'tests/**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'tests/*.spec.js':    ['webpack', 'coverage'],
      'tests/**/*.spec.js': ['webpack', 'coverage']
    },

    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      }
    },

    client: {
      mocha: {
        reporter: 'html',

        require: [
          require.resolve('./tests/.setup.js'),
          require.resolve('babel-register')
        ]
      }
    }
  });
};
