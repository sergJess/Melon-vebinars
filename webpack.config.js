const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'script'),
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
    hot: true,
},
  module: {
    rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  ['@babel/plugin-transform-runtime',
                    {
                      regenerator: true,
                    },
                  ],
                ],
              },
            },
          },
    ]
  }
};