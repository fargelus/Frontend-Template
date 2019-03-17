// ********** Instances **********
const gulp = require('gulp');
const gulpif = require('gulp-if');

const pug = require('gulp-pug');
const w3cValidation = require('gulp-w3c-html-validation');

const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const del = require('del');

const paths = {
  dest: './build',

  views: {
    src: 'src/pug/index.pug',
    all: 'src/pug/**/*.pug',
  },

  styles: {
    src: 'src/scss/main.scss',
    all: 'src/scss/**/*.scss',
  },

  assets: {
    src: 'src/assets/**/*.*',
  },

  scripts: {
    all: 'src/js/*.js',
  },
};

// ***************************

// ********* Tasks ***********
gulp.task('clean', () => del([paths.dest]));

gulp.task('views', () =>
  gulp.src(paths.views.src)
    .pipe(pug())
    .pipe(gulp.dest(paths.dest))
    .pipe(w3cValidation())
    .pipe(reload({ stream: true })));


gulp.task('styles', () =>
  gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(scss().on('error', scss.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename({
      basename: 'app',
      suffix: '.min',
    }))
    .pipe(gulp.dest(paths.dest))
    .pipe(reload({ stream: true })));


gulp.task('js', () =>
  gulp.src(paths.scripts.all)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest)));


function isImage(file) {
  return /.(png|jpe?g|svg)$/.test(file);
}

gulp.task('assets', () =>
  gulp.src(paths.images.src, { since: gulp.lastRun('assets') })
    .pipe(gulpif(isImage), imagemin)
    .pipe(gulp.dest(paths.images.dest)));


// Static server
gulp.task('browserSync', () => {
  browserSync.init({
    server: paths.dest,
  });

  browserSync.watch(paths.destAll).on('change', browserSync.reload);
});

gulp.task('watch', () => {
  gulp.watch(paths.views.all, gulp.series('views'));
  gulp.watch(paths.styles.all, gulp.series('styles'));
  gulp.watch(paths.images.src, gulp.series('assets'));
  gulp.watch(paths.scripts.all, gulp.series('js'));
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('views', 'styles', 'assets', 'js'),
));

gulp.task('default', gulp.series(
  'build',
  gulp.parallel('watch', 'browserSync'),
));
