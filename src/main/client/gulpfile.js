const gulp = require('gulp');

gulp.task('copy-build', function() {
  return gulp.src('build/**/*')
    .pipe(gulp.dest('../src/main/resources/static/'));
});