'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

var modRewrite = require('connect-modrewrite');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      middleware: [modRewrite(['!\\.\\w+$ /index.html [L] '])],
      routes: routes
    },
    browser: browser
  });

//  browserSync.instance = browserSync.init(files, {
//    startPath: '/index.html',
//    server: {
//      baseDir: baseDir,
//      middleware: [
//        middleware,
//        modRewrite([
//          '!\\.\\w+$ /index.html [L]'
//        ])
//      ]
//    },
//    browser: browser
//  });


}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    '.tmp',
    'src'
  ], [
    '.tmp/{app,components}/**/*.css',
    'src/{app,components}/**/*.js',
    'src/assets/images/**/*',
    '.tmp/*.html',
    '.tmp/{app,components}/**/*.html',
    'src/*.html',
    'src/{app,components}/**/*.html'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});

gulp.task('serve:e2e', ['wiredep', 'injector:js', 'injector:css'], function () {
  browserSyncInit(['.tmp', 'src'], null, []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit('dist', null, []);
});
