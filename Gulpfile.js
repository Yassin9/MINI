var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    plumber         = require('gulp-plumber'),
    browserSync     = require("browser-sync").create(),
    sourcemaps      = require('gulp-sourcemaps'),
    autoprefixer    = require('gulp-autoprefixer'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    spritesmith     = require('gulp.spritesmith'),
    notify          = require('gulp-notify'),
    gutil           = require('gulp-util'),
    path            = require('path');
    // htmlInjector    = require("bs-html-injector");


//the title and icon that will be used for the Gulp notifications
var notifyInfo = {
    "title" : "Gulp",
    "icon"  : path.join(__dirname, "gulp.png")
};

//error notification settings for plumber
var plumberErrorHandler = { 
    errorHandler : notify.onError({
    		"title"         : notifyInfo.title,
    		"icon"          : notifyInfo.icon,
    		"message"       : "Error: <%= error.message %>"
    	})
};

// ... variables
var autoprefixerOptions = {
  browsers: ['last 5 versions', '> 5%', 'Firefox ESR']
};

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var src = {
    scss: 'app/css/sass/**/*.scss',
    css:  'app/css',
    html: 'app/*.html',
    img:  'app/img/**/*.*',
    js:   'app/js/*.js'
};

gulp.task('hello', function() {
    gulp.src("./")
      .pipe(notify({
          'title': 'Hello Yassine',
          'icon': path.join(__dirname, "gulp.png")
        }));
})

gulp.task('sass', function() {
  return gulp.src(src.scss)
  	.pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

// Generating CSS sprites
gulp.task('sprite', function() {
    var spriteData = gulp.src('app/img/icon/*.png')
        .pipe(spritesmith({
            imgName: '../img/sprite.png',
            cssName: '_sprite.scss'
        }));

    spriteData.img.pipe(gulp.dest('app/img'));
    spriteData.css.pipe(gulp.dest('app/css/sass/module'));
});


// IMAGE MIN
gulp.task('img', function () {
    return gulp.src(src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});



gulp.task('browserSync', function() {
  // browserSync.use(htmlInjector);

  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


gulp.task('serve', ['browserSync', 'sass'], function() {
    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html, browserSync.reload);
    gulp.watch(src.js, browserSync.reload);
    gulp.watch(['app/img/icon/*.png'], ['sprite']);
});

gulp.task('default', ['hello', 'serve']);