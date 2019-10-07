const gulp = require('gulp');
const electron = require('electron-connect').server.create();
 
gulp.task('watch:electron', function () {
    electron.start();
    gulp.watch(['./main.js'], electron.restart);
    gulp.watch(['./main.js'], electron.reload);
});