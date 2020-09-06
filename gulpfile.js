const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const shorthand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');

function styles() {
  return gulp
    .src('src/sass/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(shorthand())
    .pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: '*',
        },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'));
}

module.exports.start = gulp.series(styles);
