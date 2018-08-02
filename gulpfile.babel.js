import { gulp } from 'gulp';
import { plumber } from 'gulp-plumber';
import { sourcemaps } from 'gulp-sourcemaps';
import { sass } from 'gulp-sass';
import { imagemin } from 'gulp-imagemin';
import { concat } from 'gulp-concat';
import { uglify } from 'gulp-uglify';
import { babel } from 'gulp-babel';
import { handlebars } from "gulp-handlebars";
import { browserSync } from 'browser-sync';
import { templates } from 'handlebars';


const dirs = {
  src: 'app',
  dest: 'build',
}

const tasks = {
  browserSync: 'browser-sync',
  html: 'html',
  js: 'js',
  css: 'css',
  img: 'img',
}

const browserSyncTasks = ['html', 'js', 'css']



gulp.task(tasks.browserSync, browserSyncTasks, () => {
  browserSync.init({
    server: {
      baseDir: dirs.dest
    }
  })
})


// HTML Task (Using Handlebars)

gulp.task(tasks.html, () => {
  return gulp.src(dirs.src + '/templates/*.html')
    .pipe(plumber())
    .pipe(handlebars())
    .pipe(gulp.dest(dirs.dest))
    .pipe(browserSync.reload({stream: true}))
})


gulp.task(tasks.css, () => {
  return gulp.src(`${dirs.src}/styles/main.{scss,sass}`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(gulp.dest(`${dirs.dest}/css`))
    .pipe(browserSync.reload({stream:true}))
})


gulp.task(tasks.img, () => {
  return gulp.src(`${dirs.src}/img/**/*.{jpg,png,gif}`)
    .pipe(plumber())
    .pipe(imagemin({ 
        optimizationLevel: 3, 
        progressive: true, 
        interlaced: true 
    }))
    .pipe(gulp.dest(`${dirs.dest}/img`))
})


// TODO: Create other tasks.
// TODO: Modularize better.

