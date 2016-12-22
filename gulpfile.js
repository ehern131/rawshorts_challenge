var gulp = require('gulp');

// for sass
var sass = require('gulp-sass');

// for less
// var less = require('gulp-less');

// for browserSync
var browserSync = require('browser-sync').create();

// BrowserSync server Task
gulp.task('browserSync',function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});


// Sass precompiler, reloas after using browser-sync
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// This task runs every other task while watching html and js files
gulp.task('default', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss',['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
