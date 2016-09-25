var gulp = require('gulp'),
  path = require('path'),
  jspm = require('jspm'),
  template = require('gulp-template'),
  htmlreplace = require('gulp-html-replace'),
  ngAnnotate = require('gulp-ng-annotate'),
  serve = require('browser-sync'),
  yargs = require('yargs').argv,
  rimraf = require('rimraf'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  eslint = require('gulp-eslint'),
  minify = require('gulp-minify');
var root = 'client';

// helper method to resolveToApp paths
var resolveTo = function (resolvePath) {
  return function (glob) {
    glob = glob || '';
    return path.resolve(path.join(root, resolvePath, glob));
  }
};

var resolveToApp = resolveTo('app'); // app/{glob}
// map of all our paths
var paths = {
  source: resolveToApp('**/*.js'),
  scss: resolveToApp('**/[^_]*.scss'),
  scssWatch: resolveToApp('**/*.scss'),
  css: resolveToApp('**/*.css'),
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  dist: path.join(__dirname, 'dist/')
};

gulp.task('serve', ['sass:watch'],
  function () {
    'use strict'
    require('chokidar-socket-emitter')({
      port: 8081,
      path: root,
      relativeTo: root,
      dir: __dirname
    });
    serve({
      port: process.env.PORT || 3000,
      open: false,
      files: [].concat(
        [paths.css],
        paths.html
      ),
      server: {
        baseDir: root,
        // serve our jspm dependencies with the client folder
        routes: {
          '/jspm.config.js': './jspm.config.js',
          '/jspm_packages': './jspm_packages'
        }
      },
    });
  }
)
;

gulp.task('serve-dist', function () {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {
      baseDir: 'dist'
    },
  });
});

gulp.task('build', ['sass'], function () {
  var dist = path.join(paths.dist + 'app.js');
  rimraf.sync(path.join(paths.dist, '*'));
  console.log("dadad");
  // Use JSPM to bundle our app
  return jspm.bundleSFX('app', dist, {})
    .then(function () {
      // Also create a fully annotated minified copy
      return gulp.src(dist)
        .pipe(ngAnnotate())
        .pipe(debug({title: 'unicorn:'}))
        .pipe(minify({
          ext:{
            src:'.js',
            min:'.min.js'
          },
          mangle: false,
          compress: true

        }))
        .pipe(gulp.dest(paths.dist))
    })
    .then(function () {
      // Inject minified script into index
      return gulp.src('client/index.html')
        .pipe(htmlreplace({
          'js': 'app.min.js'
        }))
        .pipe(gulp.dest(paths.dist));
    });
});


gulp.task('sass', function () {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
});

gulp.task('sass:watch', function () {
  gulp.watch(paths.scssWatch, ['sass']);
});

gulp.task('lint', function () {
  return gulp.src([paths.source])
    .pipe(eslint())
    .pipe(eslint.format())
});


gulp.task('default', ['serve']);
