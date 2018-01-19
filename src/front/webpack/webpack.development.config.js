const Path     = require('path');
const Webpack  = require('webpack');
const LessToJs = require('less-vars-to-js');
const Fs       = require('fs');

const publicPath     = '/public/';
const themeVariables = LessToJs(
    Fs.readFileSync(
        Path.resolve(__dirname, '..', 'src', 'antd.theme.less')
        , 'utf8'
    )
);

// Common Configuration
const commonConfiguration = () => ({
    context: Path.resolve(__dirname, '..', 'src'),
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:      {
            Api:        Path.resolve(__dirname, '..', 'src', 'api'),
            Components: Path.resolve(__dirname, '..', 'src', 'components'),
            Containers: Path.resolve(__dirname, '..', 'src', 'containers'),
            Utilities:  Path.resolve(__dirname, '..', 'src', 'utilities'),
            Images:     Path.resolve(__dirname, '..', 'src', 'static', 'images'),
            Src:        Path.resolve(__dirname, '..', 'src'),
        },
    },
    devtool: 'source-map',
    module:  {
        rules: [
            {
                test:    /\.(js|jsx)$/,
                include: [
                    Path.resolve(__dirname, '..', 'src'),
                ],
                use:     [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            // {
            //     test:    /\.(gif|ico|jpg|jpeg|png|svg|webp)$/,
            //     include: [
            //         Path.resolve(__dirname, '..', 'src'),
            //     ],
            //     use:     [
            //         {
            //             loader:  'url-loader',
            //             options: {
            //                 // limit: 8000,
            //                 name: "/images/[hash].[ext]"
            //             }
            //         }
            //     ]
            // },
        ],
    },
});

// Client Configuration
const clientConfig = {
    ...commonConfiguration(),

    name:   'client',
    target: 'web',
    entry:  [
        'babel-polyfill',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './client.jsx'
    ],
    output: {
        path:       Path.resolve(__dirname, '..', 'dist', 'public'),
        filename:   'client.js',
        publicPath: publicPath,
    },

    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new Webpack.NoEmitOnErrorsPlugin()
    ]
};

clientConfig.module.rules.push({
    test:    /\.(css|scss|sass|less)$/,
    include: [
        Path.resolve(__dirname, '..', 'src'),
        Path.resolve(__dirname, '..', 'node_modules', 'antd'),
    ],
    use:     [
        {
            loader: 'style-loader'
        },
        {
            loader:  'css-loader',
            options: {
                importLoaders: 1,
                minimize:      true
            }
        },
        {
            loader:  'postcss-loader',
            options: {
                sourceMap: true,
            }
        },
        {
            loader:  'sass-loader',
            options: {
                sourceMap: true,
            }
        },
        {
            loader:  'less-loader',
            options: {
                sourceMap:  true,
                modifyVars: themeVariables
            }
        },
    ],
});


// Server Configuration
const serverConfig = {
    ...commonConfiguration(),

    name:   'server',
    target: 'node',
    entry:  './server.jsx',
    output: {
        path:          Path.join(__dirname, '..', 'dist'),
        filename:      'server.js',
        libraryTarget: 'commonjs2',
        publicPath:    publicPath,
    },

    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ],
};

serverConfig.module.rules.push({
    test:    /\.(css|scss|sass|less)$/,
    include: [
        Path.resolve(__dirname, '..', 'src'),
        Path.resolve(__dirname, '..', 'node_modules', 'antd'),
    ],
    use:     [
        {
            loader: 'node-style-loader'
        },
        {
            loader:  'css-loader',
            options: {
                importLoaders: 1,
                minimize:      true
            }
        },
        {
            loader:  'postcss-loader',
            options: {
                sourceMap: true,
            }
        },
        {
            loader:  'sass-loader',
            options: {
                sourceMap: true,
            }
        },
        {
            loader:  'less-loader',
            options: {
                sourceMap:  true,
                modifyVars: themeVariables
            }
        },
    ],
});

module.exports = [
    clientConfig,
    serverConfig,
];