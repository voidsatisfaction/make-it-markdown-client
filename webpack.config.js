const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [ // 웹팩 서버 설정
    'webpack-dev-server/client?http://127.0.0.1:8080/', // 서버생성
    'webpack/hot/only-dev-server', // dev모드 일때만 hot loader하겠다.
    './src' // js파일들
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js' //  bundle.js를 cache형식으로 만든다. 딱히 react프로젝트 안에서 만들 필요가없다.
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'], // 바벨 적용영역
    extensions: ['', '.js'] // 바벨 적용하는 파일 형식
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // babel 지원안함.
        loaders: [
          'react-hot-loader/webpack',
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ] // webpack의 일부의 기능만 쓰겠다.
};