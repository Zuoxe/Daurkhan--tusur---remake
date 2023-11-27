import gulp from "gulp";
import del from "del";

const resources ={
    html: "src/html/**/*.html"
};

function clean() {
    return del("dist");
}

function includeHtml() {
    return gulp
      .src("src/html/*.html")
      .pipe(plumber())
      .pipe(
        include({
          prefix: "@@",
          basepath: "@file"
        })
      )
      .pipe(formatHtml())
      .pipe(gulp.dest("dist"));
  }

