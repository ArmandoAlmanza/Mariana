const { series, src, dest, watch } = require("gulp");

var sass = require("gulp-sass")(require("sass"));

const concat = require("gulp-concat");
const terser = require("gulp-terser-js");
const sourcemaps = require("gulp-sourcemaps");

const paths = {
    scss: "./src/scss/**/*.scss",
    js: "./src/js/**/*.js",
};

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "compressed",
            }).on("error", sass.logError)
        )
        .pipe(sourcemaps.write("."))
        .pipe(dest("./build/css"));
}

function js() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat("index.js")) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("./build/js"));
}

function watchFiles() {
    watch(paths.scss, css);
    watch(paths.js, js);
}


exports.default = series(css, js, watchFiles);
