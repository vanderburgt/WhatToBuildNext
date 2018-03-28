'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat'); // concat files in one
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'); // postcss - autoprefixer
var mqpacker = require('css-mqpacker'); // postcss - combine media queries
var chalk = require('chalk'); // Terminal string styling
var plumber = require('gulp-plumber'); // Prevent pipe breaking caused by errors from gulp plugins
var imagemin = require('gulp-imagemin'); // minify imgs
var uglify = require('gulp-uglify'); // minify js
var cleanCSS = require('gulp-clean-css'); // minify css
var sassLint = require('gulp-sass-lint'); // lint sass files

// Lint sass files
gulp.task('sass-lint', function () {
  return gulp.src('./res/scss/**/*.s+(a|c)ss')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(chalk.red('ERROR: in SCSS: ' + error.message));
      }
    }))
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// Compile styles
gulp.task('styles', function () {
  return gulp.src([
      './res/scss/app.scss',
      './node_modules/slick-carousel/slick/slick.scss'
    ])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(chalk.red('ERROR: in SCSS: ' + error.message));
      }
    }))
    .pipe(sass())
    .pipe(postcss([autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4.1', 'Safari >= 8', 'iOS >= 7']}), mqpacker({sort: true})]))
    .pipe(concat('app.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/assets/css'))
});

// Compile images
gulp.task('images', function () {
  return gulp.src('./res/img/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/img'))
});

// Compile fonts
gulp.task('fonts', function () {
  return gulp.src(['res/fonts/*.*'])
    .pipe(gulp.dest('./dist/assets/fonts'))
});

// Concat js scripts
gulp.task('scripts', function () {
  return gulp.src([
      './node_modules/jquery/dist/jquery.min.js',
      './res/js/*.js'
    ])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(chalk.red('ERROR: in JS: ' + error.message));
      }
    }))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/'))
});

// Nunjucks
var nunjucks = require('gulp-nunjucks');
gulp.task('nunjucks', function () {
  return gulp.src(['./res/nunjucks/*.html'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(chalk.red('ERROR: in NUNJUCKS: ' + error.message));
      }
    }))
    .pipe(nunjucks.compile())
    .pipe(gulp.dest('./dist/'))
});

// Watch tasks
//******************************************
gulp.task('watch', function () {
  gulp.watch('./res/scss/**/*', ['sass-lint', 'styles']);
  gulp.watch('./res/img/**/*', ['images']);
  gulp.watch('./res/js/**/*', ['scripts']);
  gulp.watch('./res/nunjucks/**/*', ['nunjucks']);
});

gulp.task('default', ['sass-lint', 'styles', 'images', 'scripts', 'nunjucks', 'fonts']);

gulp.task('dev', ['default', 'watch']);
