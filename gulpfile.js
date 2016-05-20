/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('src/**/*.js')
            .pipe(concat('common-coms.js'))
        .pipe(gulp.dest(""))
        .pipe(rename('common-coms.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(""));
});