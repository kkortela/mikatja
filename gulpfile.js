const gulp        = require('gulp')
const browserSync = require('browser-sync').create()
const sass        = require('gulp-sass')

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['browser-sync', 'sass'], function() {
  gulp.watch("scss/*.scss", ['sass'])
  gulp.watch(['fonts/**/*', 'images/**/*', '*.html', '*.css', '*.js'])
    .on('change', browserSync.reload)
})

gulp.task('default', ['serve'])
