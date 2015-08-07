var gulp = require('gulp');
var rseq = require('run-sequence');

var bootstrap = './node_modules/bootstrap/dist/';
var jquery = './node_modules/jquery/dist/';
var css = 'css/*.min.css';
var js = 'js/*.min.js';
var fonts = 'fonts/*';

gulp.task('move-files', function() {
    rseq(['move-css', 'move-js', 'move-fonts']);
});

gulp.task('move-css', function() {
    return gulp.src(bootstrap + css)
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('move-js', function() {
    return gulp.src([jquery + js.substr(2), bootstrap + js])
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('move-fonts', function() {
    return gulp.src(bootstrap + fonts)
        .pipe(gulp.dest('./dist/fonts/'));
});

