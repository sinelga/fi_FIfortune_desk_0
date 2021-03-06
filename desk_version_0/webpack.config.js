var webpack = require('webpack');

module.exports = {
                entry: {
                    app: [ './src/app.js'],
                        vendor: ["react","react-router","react-bootstrap","react-document-meta"],
                  },
   output: {
     path: __dirname + '/dist/',
     filename: 'deskfortunbundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]  }
      ]
   },
   
   plugins: [
             new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.deskfortunbundle.js")
           ]
};
