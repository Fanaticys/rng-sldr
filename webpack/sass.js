module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    include: paths,
                    use: [
                        'style-loader', //add style tag to html file
                        'css-loader',
                        'sass-loader' // compile sass to css
                    ]
                }
            ]
        }
    }
}