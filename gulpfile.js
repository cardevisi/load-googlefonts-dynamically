'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('scripts', () =>
    gulp.src(['./app/js/main.js', './app/js/logic.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/'))
);

gulp.task('default', ['scripts']);