var gulp = require('gulp');
var jshint = require('gulp-jshint');
var eslint = require('gulp-eslint');

gulp.task('default', ['jshint']);

gulp.task('jshint', function(){
  gulp.src('../bit-map-transformer/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// gulp.task('lint', function(){
//   return gulp.src('./*.js').pipe(eslint){
//     'rules': {
//       'quotes': [1. 'single'],
//       'semi': [1, 'always'],
//     };
//   };
// });
