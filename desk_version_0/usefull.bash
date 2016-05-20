
 

live-server --no-browser --entry-file=index.html


npm init -y

npm install react react-bootstrap react-document-meta react-dom react-router --save

npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

mkdir dist src 

.babelrc
{
  "presets": [
    "es2015",
    "react"
  ],
  "plugins": [
  ]
}

webpack.config.js

var webpack = require('webpack');

module.exports = {
                entry: {
                    app: [ './src/app.js'],
                        vendor: ["react","react-router","react-bootstrap","node-uuid","react-document-meta"],
                  },
   output: {
     path: __dirname + '/dist/',
     filename: 'deskbundle.js',
     publicPath: '/'
   },
   module: {
     loaders: [
       { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]  }
      ]
   },
   
   plugins: [
             new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.deskbundle.js")
           ]
};