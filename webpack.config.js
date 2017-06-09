const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// console.log'PATH', path.resolve(__dirname, 'dist/css/[name].css'))

module.exports = [
  {
    target: 'node',
    entry: {
      server: './src/server/server.js'
    },
    externals: {
      'express': 'commonjs express',
      'knex': 'commonjs knex',
      'bookshelf': 'commonjs bookshelf'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    plugins: [
      new ExtractTextPlugin(path.resolve(__dirname, 'dist/css/[name].css'))
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.scss$/,
          exclude: /(node_modules|bower_components)/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    }
  },
  {
    target: 'web',
    entry: {
      client: './src/client/app.jsx'
    },
    externals: {
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    }
  }
]
