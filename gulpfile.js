'use strict';

var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    pug         = require('gulp-pug'),
    sass        = require('gulp-sass'),
    imagemin    = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    bourbon     = require('node-bourbon').includePaths,
    neat        = require('node-neat').includePaths;

gulp.task('browser-sync', ['html', 'js', 'css'], function() {
    browserSync.init({
		server: {
			baseDir: 'build'
		}
	});
});

// Template Engine
gulp.task('html', function() {
    return gulp.src('app/templates/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function() {
    return gulp.src(['app/scripts/modules/*.js', 'app/scripts/pages/*.js', 'app/scripts/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('css', function() {
    return gulp.src('app/styles/main.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
			includePaths: require('node-neat').includePaths
        }).on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin({ 
        optimizationLevel: 3, 
        progressive: true, 
        interlaced: true 
    }))
    .pipe(gulp.dest('build/img'));
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('build/fonts'));
})

gulp.task('watch', function() {
	gulp.watch('app/styles/**/*.scss', ['css']);
	gulp.watch('app/scripts/**/*.js', ['js']);
	gulp.watch('app/templates/**/*.pug', ['html']);
    gulp.watch('app/templates/**/*.{jpg,png,gif}', ['img']);
	gulp.watch('app/fonts/**/*', ['fonts']);
});

gulp.task('serve', ['html', 'js', 'css', 'img', 'browser-sync', 'watch']);

