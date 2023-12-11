const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const sync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");

const srcFolder = "./src";
const buildFolder = "./dist";
const paths = {
  srcSvg: `${srcFolder}/img/svg/**.svg`,
  srcImgFolder: `${srcFolder}/img`,
  buildImgFolder: `${buildFolder}/img`,
  srcScss: `${srcFolder}/scss/**/*.scss`,
  buildCssFolder: `${buildFolder}/css`,
  srcFullJs: `${srcFolder}/js/**/*.js`,
  srcMainJs: `${srcFolder}/js/main.js`,
  buildJsFolder: `${buildFolder}/js`,
  srcPartialsFolder: `${srcFolder}/partials`,
  resourcesFolder: `${srcFolder}/resources`,
};

// javaScripts
const js = () => {
  return src(paths.srcMainJs)
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("src/js"))
    .pipe(sync.stream());
};

// Scss
const styles = () => {
  return src(paths.srcScss)
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: ["last 5 versions"],
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("src/css"))
    .pipe(sync.stream());
};

// HTML
const html = () => {
  return src("src/*.html").pipe(dest("dist"));
};

const watcher = () => {
  watch("src/scss/**/*.scss", series(styles));
  watch("src/js/main.js", series(js, reload));
  watch("src/*.html", series(html, reload));
};

const server = (done) => {
  sync.init({
    server: {
      baseDir: "src/",
    },
    // cors: true,
    // notify: false,
    // ui: false,
  });
  done();
};

const reload = (done) => {
  sync.reload();
  done();
};

const cleanDist = () => {
  return src("dist").pipe(clean());
};

const building = () => {
  return src(["src/css/style.min.css", "src/js/main.min.js", "src/*.html"], {
    base: "src",
  }).pipe(dest("dist"));
};


exports.styles = styles;
exports.js = js;
exports.watcher = watcher;
exports.server = server;
exports.reload = reload;
exports.html = html;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, js, server, watcher);
