var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var pump = require('pump');
var uglify = require('gulp-uglify');
var srcImages = [ './src/images/*.png', './src/images/*.jpg' ];
var srcFonts = [ './src/fonts/*.woff', './src/fonts/*.woff2' ];
var phpFiles = [ './src/service.php' ];

gulp.task('sass', function() {
	gulp.src('./src/css/styles.scss')
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(sass())
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('./src/css'))
});
gulp.task('minify-css', function() {
    gulp.src('./src/css/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('concat-php', function() {
    gulp.src(['./src/index_header.php', './src/index.html'])
        .pipe(concat('index.php'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('minify-html', function() {
    gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('./src/js/*.js'),
        uglify(),
        gulp.dest('./dist/js')
    ],
    cb
  );
});
gulp.task('copy-images', function() {
    gulp.src(srcImages)
    .pipe(gulp.dest('./dist/images'));
});
gulp.task('copy-fonts', function() {
    gulp.src(srcFonts)
    .pipe(gulp.dest('./dist/fonts'));
});
gulp.task('copy-php', function() {
    gulp.src(phpFiles)
    .pipe(gulp.dest('./dist/'));
});
gulp.task('default',['sass', 'minify-css', 'minify-html', 'minify-js', 'copy-images', 'copy-fonts', 'concat-php', 'copy-php']);
