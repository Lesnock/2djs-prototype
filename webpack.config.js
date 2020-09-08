const path = require('path')

module.exports = {
  entry: './src/game/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/game')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_module/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
