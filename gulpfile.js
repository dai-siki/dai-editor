/******************************************************
 *             ----前端工程自动化构建----             *
 *                                                    *
 *      @author dai-siki同学 < 851733175@qq.com >     *
 ******************************************************/

// import package
const $ = require('gulp-load-plugins')(),
    webpack = require('webpack-stream'),
    named = require('vinyl-named'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    gulp = require('gulp');

/** 开发
 -------------------------------------------------------------*/

gulp.task('css', function() {
    gulp.src('./src/scss/*.scss')
        .pipe($.sass())
        .pipe($.autoprefixer('last 10 version'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({
            stream: true
        }));
});

// jS task
gulp.task('js', function() {
    var webpack_config = {
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-3'],
                    plugins: ['transform-runtime']
                }
            }, {
                test: /\.css$/,
                loaders: ['style', 'css']
            }, {
                test: /\.json$/,
                loaders: ['json']
            }, {
                test: /\.(scss|sass)$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.(html|tpl)$/,
                loaders: ['html']
            }]
        }
    };

    gulp.src('./src/js/index.js')
        .pipe($.plumber({
            errorHandler: _errrHandler
        }))
        .pipe(named(function() {
            return 'editor';
        }))
        .pipe(webpack(webpack_config))
        // .pipe($.uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['./src/**/*.scss'], ['css']);
    gulp.watch(['./src/**/*.js'], ['js']);
    gulp.watch(['./example/**/*.html', './dist/**/*.js'], function () {
        reload();
    });
});

gulp.task('default', ['serve']);

/** 辅助函数
 -------------------------------------------------------------*/
//错误提示
function _errrHandler(e) {
    $.util.beep();
    $.util.log(e);
}
