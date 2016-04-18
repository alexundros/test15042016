var gulp = require('gulp'),
	compass = require('gulp-compass'),
	prefixer = require('gulp-autoprefixer'),
	css = __dirname + '/www/css',
	scss = __dirname + '/scss';

gulp.task('styles', function () {
	return gulp.src(scss)
		.pipe(compass({css: css, sass: scss}))
		.pipe(prefixer({browsers: ['last 15 versions'], cascade: false}))
		.pipe(gulp.dest(css));
});

gulp.task('watch', ['styles'], function () {
	gulp.watch(scss + '/*.scss', ['styles']);
});

gulp.task('default', ['watch']);