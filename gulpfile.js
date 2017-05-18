var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify')

gulp.task('css', function(){
    return gulp.src(
            [
                './assets/css/bootstrap.css',
                './assets/css/stack-interface.css',
                './assets/css/socicon.css',
                './assets/css/lightbox.min.css',
                './assets/css/flickity.css',
                './assets/css/jquery.steps.css',
                './assets/css/theme.css',
                './assets/css/custom.css',
                './assets/css/font-roboto.css'
            ]
        )
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(gulp.dest('./dist/css/'))
})

gulp.task('copy', function(){
    return gulp.src(
            ['./assets/fonts/**']
        )
        .pipe(gulp.dest('./dist/fonts/'))
})

gulp.task('build', function(){
    return gulp.src(
            [
                './assets/js/jquery-3.1.1.min.js',
                './assets/js/flickity.min.js',
                './assets/js/easypiechart.min.js',
                './assets/js/parallax.js',
                './assets/js/typed.min.js',
                './assets/js/datepicker.js',
                './assets/js/isotope.min.js',
                './assets/js/ytplayer.min.js',
                './assets/js/lightbox.min.js',
                './assets/js/granim.min.js',
                './assets/js/jquery.steps.min.js',
                './assets/js/countdown.min.js',
                './assets/js/twitterfetcher.min.js',
                './assets/js/spectragram.min.js',
                './assets/js/smooth-scroll.min.js',
                './assets/js/scripts.js',
            ]
        )
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./dist/js/'))
})

gulp.task('prod', ['build', 'css', 'copy'], function(){})

gulp.task('default', ['build', 'css', 'copy'], function(){})

