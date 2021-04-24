module.exports = function () {
    $.gulp.task('browser-sync', () => {

        $.browserSync.init({
            // server: {
            //     baseDir: './build/' 
            // },

            proxy: 'http://bloss.html/',
            notify: false,
            online: true
        });

    });
}