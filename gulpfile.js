const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const include = require('gulp-include');
gulp.task('scss', function() {
    return gulp.src('scss/style.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer({
                overrideBrowserslist: ['last 10 versions'],
                cascade: false
            }

        ))
        .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'js/jquery-new.js', 
		'js/jquery.fancybox.min.js' ,
        'js/index.js'
		])
		.pipe(concat('script.js'))
        .pipe(include('script.js')) 
		.pipe(gulp.dest('script')); 
});




gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', gulp.parallel('scss'));
    // gulp.watch('js/**/*.js', gulp.parallel('scripts'));

})