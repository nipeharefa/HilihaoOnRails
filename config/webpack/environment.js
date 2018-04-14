const { environment } = require('@rails/webpacker');
const webpack = require('webpack');
const { join, resolve } = require('path');

const customeConfig = {
  resolve: {
    alias: {
      '@': resolve('app/javascript/packs'),
      '@admin': resolve('app/javascript/packs/admin'),
    },
  },
};

environment.plugins.append(
  'CommonsChunkVendor',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1,
  })
);

environment.plugins.append(
  'CommonsChunkManifest',
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity,
  })
);

environment.loaders.append(
  'babel',
  {
    test: /\.(js|jsx)?(\.erb)?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react', 'stage-2'],
        babelrc: false,
        plugins: [
          'transform-decorators-legacy',
          'syntax-dynamic-import',
          'transform-object-rest-spread',
          [
            'transform-class-properties',
            { spec: true },
          ],
          ['import', {
            libraryName: 'antd',
            style: 'css',
          }],
        ],
        cacheDirectory: join('tmp/cache', 'babel-loader'),
      },
    }],
  }
);

environment.config.merge(customeConfig);

module.exports = environment;
