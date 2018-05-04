var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var mock = require('./mock');

gulp.task('less', function() {
    gulp / src('../src/static/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('../src/static/css/'))
})

gulp.task('watch', function() {
    gulp.watch('../src/static/less/*.less', ['less'])
})

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './src/',
            index: 'page/main.html',
            middleware: function(req, res, next) {
                if (/\/api/g.test(req.url)) {
                    res.end(JSON.stringify(
                        mock(req.url)
                    ))
                }
                next();
            }
        },
        files: ['src'],
        port: 2893
    })
})

gulp.task('default', ['watch', 'server'], function() {

})