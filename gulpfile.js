var gulp = require('gulp');
var rseq = require('run-sequence');

var bootstrap = './node_modules/bootstrap/dist/';
var jquery = './node_modules/jquery/dist/';
var css = 'css/*.min.css';
var js = 'js/*.min.js';

gulp.task('move-files', function() {
    rseq(['move-css', 'move-js']);
});

gulp.task('move-css', function() {
    return gulp.src(bootstrap + css)
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('move-js', function() {
    return gulp.src([jquery + js.substr(2), bootstrap + js])
        .pipe(gulp.dest('./dist/js/'));
});

