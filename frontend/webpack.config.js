// This library allows us to combine paths easily
const path = require('path');
module.exports = {
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   devServer: {
      contentBase: './src',
      publicPath: '/output',
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          pathRewrite: {"^/api" : ""}
        }
      }
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
             test: /\.jsx/,
             exclude: /node_modules/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015'] }
             }
         },
         {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
          {
              test: /\.css/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.png$/,
              use: ["url-loader?limit=100000"]
          },
          {
              test: /\.jpg$/,
              use: ["file-loader"]
          },
          {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              use: ['url-loader?limit=10000&mimetype=application/font-woff']
          },
          {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              use: ['file-loader']
          },
          {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              use: ['file-loader']
          },
          {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              use: ['url-loader?limit=10000&mimetype=image/svg+xml']
          }
      ]
   }
};
