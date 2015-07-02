// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/jquery.js', 'dist/js/bootstrap.min.js', 'js/scripts.js', 'js/ie10-viewport-bug-workaround.js'],
        css: ['dist/css/bootstrap.min.css', 'css/styles.css', 'css/carousel.css']
    },
    production: {
             js: ['js/jquery.js', 'dist/js/bootstrap.min.js', 'js/scripts.js', 'js/ie10-viewport-bug-workaround.js'],
        css: ['dist/css/bootstrap.min.css', 'css/styles.css', 'css/carousel.css']
    }
}