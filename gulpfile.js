'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync').create()

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')

const concat = require('gulp-concat')
const minify = require('gulp-minify')



gulp.task('serve', function() {
	browserSync.init({
		server: './'
	})
	browserSync.watch('./*.html', browserSync.reload)
	browserSync.watch('./css/*.css', browserSync.reload)
	browserSync.watch('./js/*.js', browserSync.reload)
})

gulp.task('sass', function() {
	return gulp.src('./sass/main.sass')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 5 versions'],
    cascade: false
	}))
	.pipe(csso({
		restructure: false,
    sourceMap: true,
    debug: true
	}))
	.pipe(gulp.dest('./css'))
})

gulp.task('js', function() {
	return gulp.src([
			'./js/script.js',
		])
	.pipe(concat('bundle.js'))
	.pipe(minify())
	.pipe(gulp.dest('./js/'))
})

gulp.task('watch', function() {
	gulp.watch('./sass/**/*.sass', gulp.series('sass'))
	gulp.watch('./js/script.js', gulp.series('js'))
})

gulp.task('default', 
	gulp.series(
		gulp.parallel('sass', 'js'),
		gulp.parallel('watch', 'serve')
	)
)