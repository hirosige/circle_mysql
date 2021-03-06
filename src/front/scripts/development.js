const
    // required packages
    express                      = require('express')
    , app                        = express()
    , webpack                    = require('webpack')
    , path                       = require('path')
    , webpackDevMiddleware       = require('webpack-dev-middleware')
    , webpackHotMiddleware       = require('webpack-hot-middleware')
    , webpackHotServerMiddleware = require('webpack-hot-server-middleware')
    , config                     = require('../webpack/webpack.development.config.js')
    , compiler                   = webpack(config)
    , favicon                    = require('serve-favicon')

    , i18nextMiddleware          = require('i18next-express-middleware')
    , i18n                       = require('../src/i18n.js')
    , Backend                    = require('i18next-node-fs-backend')


    // configuration
    , serverHostname             = '0.0.0.0'
    , serverPort                 = '9000'
    , publicPath                 = config[0].publicPath

    ;

app.use('/public/images', express.static(path.join(__dirname, '..', 'src', 'static', 'images')));
app.use(favicon(path.join(__dirname, '..', 'src', 'static', 'images', 'favicon.ico')));

i18n
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init({
        backend: {
            loadPath: path.resolve(__dirname, '..', 'src', 'locales', '{{lng}}', '{{ns}}.json'),
        }
    });

app.use(i18nextMiddleware.handle(i18n));

app.use(webpackDevMiddleware(
    compiler,
    {
        noInfo:           true,
        publicPath:       publicPath,
        serverSideRender: true,
    }
));

app.use(webpackHotMiddleware(
    compiler.compilers.find(
        compiler => compiler.name === 'client'
    )
));

app.use(
    webpackHotServerMiddleware(compiler)
);

app.listen(serverPort, serverHostname, function (err) {
    if (err) {
        console.log(err.message)
    } else {
        let hostname = this.address().address;
        let port     = this.address().port;
        console.log(`\x1b[36m%s\x1b[0m`, `Server is listening on http://${hostname}:${port}`);
    }
});