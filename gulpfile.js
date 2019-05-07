let gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    browserSync   = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', () =>
    gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({stream: true}))
);


gulp.task('browser-sync', function () {
    browserSync({
        server: {
        },
        notify: false
    });
});




gulp.task('watch', ['browser-sync'], function () {

    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['watch']);