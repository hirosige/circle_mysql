export default ({markup, helmet, initialI18nStore, initialLanguage, styledComponent}) => {
    const stylesheet = (process.env.NODE_ENV === 'production')
        ? `<link rel='stylesheet' href='/public/bundle.css'>`
        : require('node-style-loader/collect').collectInitial();

    initialI18nStore = JSON.stringify(initialI18nStore)
        .replace(/\\n/g, `\\\\n`)
        .replace(/\\'/g, `\\\\'`)
        .replace(/\\"/g, `\\\\"`)
    ;

    return `
        <!doctype html>
        <html ${helmet.htmlAttributes.toString()}>
        <head>
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${stylesheet}
            ${(process.env.NODE_ENV === 'production') ? styledComponent : ''}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            ${(process.env.NODE_ENV === 'development') ? styledComponent : ''}
            
            <noscript>
                You need to enable JavaScript to run this app.
            </noscript>
            <div id="root">${markup}</div>
            <script>
                window.initialI18nStore = JSON.parse('${initialI18nStore}');
                window.initialLanguage = '${initialLanguage}';
            </script>
            <script src="/public/client.js" async></script>
        </body>
        </html>
    `;
};