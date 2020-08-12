const {src, watch,  dest,  series,  parallel} = require('gulp');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// file paths used for pipe method and pushing data through the writable data stream
const files = {
    sassPath: 'src/sass/**/*.scss',
    jsPath: 'src/scripts/**/*.js'
}

// sass compile, maping, and minification

function sassTask() {
    return src(files.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'));
}

// javascript file merge automation
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('dist/js'));
}


// monitoring & rerunning tasks
function monitorTask() {
    watch([files.sassPath, files.jsPath], parallel(sassTask, jsTask));
}

// enables task running via the command line
exports.default = series(
    parallel(sassTask, jsTask),
    monitorTask
);