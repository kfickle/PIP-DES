/*

Author: Ray Villalobos
Sass Essential Training Repo for the full course files and materials 
https://github.com/planetoftheweb/sassEssentials.git

*/

const gulp = require("gulp"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  browserSync = require("browser-sync").create(),
  source = "./src/",
  dest = "./dst/";

sass.compiler = require("node-sass");

function html() {
  return gulp.src(dest + "**/*.html");
}

function js() {
  return gulp.src(dest + "**/*.js");
}

function styles() {
  return gulp
    .src(source + "sass/style.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        sourcemap: true,
        style: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(dest + "css"));
}

function watch() {
  gulp.watch(dest + "js/**/*.js", js).on("change", browserSync.reload);
  gulp.watch(source + "sass/**/*", styles).on("change", browserSync.reload);
  gulp.watch(dest + "index.html", html).on("change", browserSync.reload);
}

function server() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: dest
    }
  });

  gulp
    .watch(source + "sass/**/*.scss", styles)
    .on("change", browserSync.reload);
  gulp.watch(dest + "js/**/*.js", js).on("change", browserSync.reload);
  gulp.watch(dest + "index.html", html).on("change", browserSync.reload);
}

var build = gulp.series(gulp.parallel(js, styles, html), server, watch);

gulp.task("default", build);