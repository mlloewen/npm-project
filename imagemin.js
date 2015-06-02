var Imagemin = require('imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var imageminOptipng = require('imagemin-optipng');

new Imagemin()
    .src('images/*.{gif,jpg,png,svg,JPG}')
    .dest('dist/images')
    .use(imageminMozjpeg({quality: 75}))
    .use(imageminOptipng({optimizationLevel: 7}))
    .run();
