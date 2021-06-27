const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

const concat = require("gulp-concat");
const terser = require("gulp-terser-js");
const sourcemaps = require("gulp-sourcemaps");

const paths = {
    images: "./src/img/**/*",
    scss: "./src/sass/**/*.scss",
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

function images() {
    return src(paths.images).pipe(imagemin()).pipe(dest("./build/img"));
}

function webPV() {
    return src(paths.images).pipe(webp()).pipe(dest("./build/img"));
}

exports.default = series(css, images, js, webPV, watchFiles);
