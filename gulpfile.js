var gulp = require('gulp');
var sass = require('gulp-sass');
// var babel = require('gulp-babel');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var rtlcss = require('gulp-rtlcss');
var del = require('del');

var paths = {
    // scripts: {
    //   src: 'scripts/**/*.js',
    //   dest: 'scripts/'
    // },
    styles: {
        src: 'sass/**/*.scss',
        dest: 'assets/styles/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(['assets/styles']);
}

/*
 * Define our tasks using plain functions
 */
function englishstyles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'toolkit',
            suffix: '-en'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function arabicstyles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(rtlcss())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'toolkit',
            suffix: '-ar'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}


// function scripts() {
//   return gulp.src(paths.scripts.src, { sourcemaps: true })
//     .pipe(babel())
//     .pipe(uglify())
//     .pipe(concat('commons.min.js'))
//     .pipe(gulp.dest(paths.scripts.dest));
// }


function watch() {
    // gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, englishstyles);
    gulp.watch(paths.styles.src, arabicstyles);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
// var build = gulp.series(clean , scripts , englishstyles , arabicstyles);
var build = gulp.series(clean, englishstyles, arabicstyles);
var english = gulp.series(clean, arabicstyles);
var arabic = gulp.series(clean, arabicstyles);


/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.watch = watch;
// exports.scripts = scripts;
exports.english = english;
exports.arabic = arabic;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;