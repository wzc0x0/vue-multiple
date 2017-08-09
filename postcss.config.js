var autoprefixer = require('autoprefixer')
var browserslist = require('browserslist')

module.exports = {
    plugins: [autoprefixer({browsers: browserslist('ie10')})]
}
