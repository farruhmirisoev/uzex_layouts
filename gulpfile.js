var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var bs = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var jsFiles = ["./js/*.js", "!./js/scripts.js"],
    jsDest = './js';
var paths = {
    html: ['index.html'],
    css: ['main.scss'],

};

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { beep: true }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest))
        .pipe(bs.reload({ stream: true }));
});

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['Chrome >=9', 'ie>=6', 'Firefox >=4', 'Opera <=12']
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(bs.reload({ stream: true }));
})

gulp.task('default', ['sass'], function() {
    bs.init({ proxy: "uzex.d", ghostMode: false });
    gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass']);
});
